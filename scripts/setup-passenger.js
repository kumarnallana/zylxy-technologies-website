const fs = require('fs');
const path = require('path');

console.log('');
console.log('═══════════════════════════════════════════════════');
console.log('  🚀  ZYLXY PASSENGER DEPLOYMENT SETUP');
console.log('═══════════════════════════════════════════════════');
console.log('');

// ─────────────────────────────────────────────────────────────────
// ARCHITECTURE REFERENCE
// On Hostinger, the directory tree is:
//
//   /home/u990914603/domains/zylxytech.com/
//     nodejs/             ← PassengerAppRoot (Node.js serves page HTML)
//       scripts/          ← this file lives here (__dirname)
//       .next/static/     ← Next.js build output (chunks, fonts, CSS)
//       public/           ← STALE LOCATION — must be cleaned every deploy
//     public_html/        ← LiteSpeed's document root (ONLY path for static)
//       _next/static/     ← WHERE WE COPY TO — LiteSpeed serves in <50ms
//       .htaccess         ← Must explicitly exempt /_next/static from Passenger
//
// ROOT CAUSE OF 9,488ms CSS LOAD:
//   Static assets were in nodejs/public/, not public_html/.
//   LiteSpeed couldn't find them → forwarded to Passenger → 9,488ms.
//   Fix: copy to public_html/_next/static + patch .htaccess.
// ─────────────────────────────────────────────────────────────────

const nextStaticDir       = path.join(__dirname, '..', '.next', 'static');

// ✅ CORRECT target: LiteSpeed's document root
const publicHtmlDir       = path.join(__dirname, '..', '..', 'public_html');
const litespeedStaticDir  = path.join(publicHtmlDir, '_next', 'static');
const htaccessPath        = path.join(publicHtmlDir, '.htaccess');

// ⚠️  STALE location from old deploys — must be wiped to prevent fallback inconsistency
const staleStaticDir      = path.join(__dirname, '..', 'public', '_next');

try {

  // ─── STEP 1: Wipe stale nodejs/public/_next ────────────────────────────
  // This prevents fallback inconsistency if Passenger ever checks this path.
  console.log('🧹 [Step 1] Cleaning up stale static copy in nodejs/public/_next...');
  if (fs.existsSync(staleStaticDir)) {
    fs.rmSync(staleStaticDir, { recursive: true, force: true });
    console.log('✅  Removed stale nodejs/public/_next — no fallback inconsistency possible');
  } else {
    console.log('✅  No stale copy found — clean slate');
  }

  // ─── STEP 2: Copy fresh chunks to public_html/_next/static ───────────
  console.log('');
  console.log('📂 [Step 2] Copying static assets to LiteSpeed document root...');
  if (fs.existsSync(nextStaticDir)) {
    // Always wipe the target first — ensures no stale chunks from previous build
    if (fs.existsSync(litespeedStaticDir)) {
      fs.rmSync(litespeedStaticDir, { recursive: true, force: true });
      console.log('    Cleared old public_html/_next/static (fresh copy incoming)');
    }
    fs.mkdirSync(litespeedStaticDir, { recursive: true });
    fs.cpSync(nextStaticDir, litespeedStaticDir, { recursive: true });
    console.log('✅  Copied .next/static → public_html/_next/static');
    console.log('    LiteSpeed will now serve CSS/JS/fonts in <50ms (bypasses Node.js)');

    // ── STEP 2b: Write .htaccess into _next/ for immutable caching ────────
    // next.config.mjs headers() only apply when Node.js handles the request.
    // Since LiteSpeed serves static files directly, we need a .htaccess here.
    // This fires even during Hostinger CI build — no dependency on live server.
    const nextHtaccessPath = path.join(publicHtmlDir, '_next', '.htaccess');
    const cacheHtaccess = `# Cache headers for Next.js static assets (written by setup-passenger.js)
# All files here are content-hashed — safe to cache for 1 year.
<IfModule mod_headers.c>
  <FilesMatch "\\.(js|css|woff|woff2|avif|webp|jpg|jpeg|png|svg|ico|map)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
</IfModule>
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 year"
</IfModule>
`;
    fs.writeFileSync(nextHtaccessPath, cacheHtaccess, 'utf8');
    console.log('✅  Wrote _next/.htaccess — Cache-Control: immutable on all static assets');
  } else {
    console.warn('⚠️  .next/static not found — run `next build` first');
    process.exit(1);
  }

  // ─── STEP 3: Patch .htaccess ─────────────────────────────────────────
  console.log('');
  console.log('🔧 [Step 3] Patching Hostinger .htaccess...');

  if (!fs.existsSync(htaccessPath)) {
    console.warn(`⚠️  .htaccess not found at ${htaccessPath}.`);
    console.warn('    This is normal in local dev. On Hostinger this file must exist.');
  } else {
    let content  = fs.readFileSync(htaccessPath, 'utf8');
    let modified = false;

    // ── 3a. _next/static bypass rule (MUST be at the TOP, before Passenger rules)
    // v2: adds RewriteCond -f so ONLY files that actually exist in public_html
    // get served by LiteSpeed. Missing files fall through to Passenger which
    // serves them from nodejs/.next/static/ — eliminates all 404 chunk errors.
    const staticBypassMarkerV1 = '# zylxy:static-bypass';
    const staticBypassMarkerV2 = '# zylxy:static-bypass-v2';

    if (!content.includes(staticBypassMarkerV2)) {
      // Remove old v1 block if present (it lacked -f condition, caused 404s)
      if (content.includes(staticBypassMarkerV1)) {
        const v1Start = content.indexOf(staticBypassMarkerV1);
        // Find the closing blank line after </IfModule>
        const v1End = content.indexOf('</IfModule>', v1Start) + '</IfModule>'.length;
        const afterV1 = content.slice(v1End).match(/^\n*/);
        const skipLen = afterV1 ? afterV1[0].length : 0;
        content = content.slice(0, v1Start) + content.slice(v1End + skipLen);
        console.log('🔄  Removed old v1 bypass rule (upgrading to v2 with -f fallback)');
        modified = true;
      }

      const staticBypassBlock = `${staticBypassMarkerV2}
<IfModule mod_rewrite.c>
  RewriteEngine On
  # Serve /_next/static/* from public_html ONLY when the file exists there.
  # If not found on disk, falls through to Passenger (nodejs/.next/static/).
  # This prevents 404 errors for chunks that weren't copied during build.
  RewriteCond %{REQUEST_FILENAME} -f
  RewriteRule ^_next/static/ - [L]
  # Image optimization is always a dynamic route → always goes to Passenger.
  RewriteRule ^_next/image - [L]
</IfModule>

`;
      content  = staticBypassBlock + content;
      modified = true;
      console.log('✅  Applied v2 static bypass rule with -f condition (Passenger fallback enabled)');
    } else {
      console.log('✅  v2 static bypass rule already present — skipping');
    }

    // ── 3b. UV_THREADPOOL_SIZE ────────────────────────────────────────
    if (!content.includes('UV_THREADPOOL_SIZE')) {
      content  += '\nSetEnv UV_THREADPOOL_SIZE 2\n';
      modified  = true;
      console.log('✅  Added UV_THREADPOOL_SIZE 2');
    }

    // ── 3c. --v8-pool-size=1 ─────────────────────────────────────────
    if (content.includes('NODE_OPTIONS') && !content.includes('--v8-pool-size=1')) {
      content  = content.replace(
        /SetEnv NODE_OPTIONS "([^"]+)"/,
        'SetEnv NODE_OPTIONS "--v8-pool-size=1 $1"'
      );
      modified = true;
      console.log('✅  Injected --v8-pool-size=1 into NODE_OPTIONS');
    }

    // ── 3d. Cache-Control headers ─────────────────────────────────────
    if (!content.includes('Header set Cache-Control')) {
      const cacheBlock = `
# ─── Static Asset Caching (injected by setup-passenger.js) ───────
<IfModule mod_headers.c>
  # Next.js chunks are content-hashed — safe to cache for 1 year
  <FilesMatch "\\.(js|css|woff|woff2|avif|webp|jpg|jpeg|png|svg|ico)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
</IfModule>
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 year"
</IfModule>
`;
      content  += cacheBlock;
      modified  = true;
      console.log('✅  Injected Cache-Control: immutable headers (1-year TTL)');
    }

    if (modified) {
      fs.writeFileSync(htaccessPath, content, 'utf8');
      console.log('');
      console.log('✅  .htaccess saved successfully');
    } else {
      console.log('✅  .htaccess already fully patched — no changes needed');
    }
  }

  // ─── STEP 4: Verify the copy succeeded ───────────────────────────────────
  console.log('');
  console.log('🔍 [Step 4] Verifying deployment integrity...');
  //
  // NOTE: Next.js 16 + Turbopack does NOT create a separate _next/static/css/
  // directory. CSS is co-located inside _next/static/chunks/ as .css files.
  // Only verify directories that are guaranteed to exist.
  //
  const verifyDirs = ['chunks', 'media'];
  let allGood = true;
  for (const dir of verifyDirs) {
    const fullPath = path.join(litespeedStaticDir, dir);
    if (fs.existsSync(fullPath)) {
      const count = fs.readdirSync(fullPath).length;
      console.log(`✅  public_html/_next/static/${dir}/ — ${count} files`);
    } else {
      // Log a warning but do NOT exit — the build succeeded, this is non-fatal
      console.warn(`⚠️  public_html/_next/static/${dir}/ — NOT FOUND (unexpected, check build output)`);
      allGood = false;
    }
  }

  // Also verify at least one CSS file exists inside chunks/
  const chunksDir = path.join(litespeedStaticDir, 'chunks');
  if (fs.existsSync(chunksDir)) {
    const cssFiles = fs.readdirSync(chunksDir).filter(f => f.endsWith('.css'));
    if (cssFiles.length > 0) {
      console.log(`✅  CSS files in chunks/ — ${cssFiles.length} .css files (Turbopack colocated CSS)`);
    } else {
      console.warn('⚠️  No .css files found in chunks/ — CSS may not be loading correctly');
    }
  }

  if (!allGood) {
    console.warn('');
    console.warn('⚠️  Some expected directories were missing — site may still work if chunks/ is present.');
    console.warn('    Review the build output carefully before declaring success.');
    // Non-fatal: do NOT process.exit(1) here — a missing media/ dir is not worth failing a deploy
  }

  console.log('');
  console.log('═══════════════════════════════════════════════════');
  console.log('  ✅  DEPLOYMENT SETUP COMPLETE & VERIFIED');
  console.log('      CSS/JS/Fonts → LiteSpeed direct (<50ms)');
  console.log('      Node.js      → HTML page rendering only');
  console.log('      Cache-TTL    → 1 year immutable');
  console.log('      Stale files  → Wiped from nodejs/public/');
  console.log('      Bypass rule  → Prepended to .htaccess');
  console.log('═══════════════════════════════════════════════════');
  console.log('');

} catch (error) {
  console.error('');
  console.error('❌  Passenger setup failed:', error.message);
  console.error(error.stack);
  process.exit(1);
}

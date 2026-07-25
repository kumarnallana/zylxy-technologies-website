const fs = require('fs');
const path = require('path');

console.log('');
console.log('═══════════════════════════════════════════════════');
console.log('  🚀  ZYLXY PASSENGER DEPLOYMENT SETUP');
console.log('═══════════════════════════════════════════════════');
console.log('');

// ─────────────────────────────────────────────────────────────────
// PATHS
// On Hostinger, the app tree is:
//   /home/u990914603/domains/zylxytech.com/
//     nodejs/          ← Passenger app root (PassengerAppRoot)
//       scripts/       ← this file lives here
//       .next/static/  ← Next.js build output chunks
//     public_html/     ← LiteSpeed's document root (serves static files)
//       _next/static/  ← WE MUST COPY HERE for fast LiteSpeed delivery
//       .htaccess
//
// CRITICAL: If static assets stay in nodejs/, every CSS/font/JS
// request goes through Node.js/Passenger instead of LiteSpeed.
// That is why the critical path was 9,488ms instead of <50ms.
// ─────────────────────────────────────────────────────────────────

const nextStaticDir      = path.join(__dirname, '..', '.next', 'static');

// ✅ CORRECTED: target LiteSpeed's document root, not the nodejs/ folder
const publicHtmlDir      = path.join(__dirname, '..', '..', 'public_html');
const litespeedStaticDir = path.join(publicHtmlDir, '_next', 'static');
const htaccessPath       = path.join(publicHtmlDir, '.htaccess');

try {

  // ─── STEP 1: Copy static chunks to public_html/_next/static ───────
  console.log('📂 [Step 1] Copying static assets to LiteSpeed document root...');
  if (fs.existsSync(nextStaticDir)) {
    fs.mkdirSync(litespeedStaticDir, { recursive: true });
    fs.cpSync(nextStaticDir, litespeedStaticDir, { recursive: true });
    console.log('✅  Copied .next/static → public_html/_next/static');
    console.log('    LiteSpeed will now serve CSS/JS/fonts in <50ms (not via Node.js)');
  } else {
    console.warn('⚠️  .next/static not found — run `next build` first');
  }

  // ─── STEP 2: Patch .htaccess ─────────────────────────────────────
  console.log('');
  console.log('🔧 [Step 2] Patching Hostinger .htaccess...');

  if (!fs.existsSync(htaccessPath)) {
    console.warn(`⚠️  .htaccess not found at ${htaccessPath}. Skipping (normal in local dev).`);
  } else {
    let content  = fs.readFileSync(htaccessPath, 'utf8');
    let modified = false;

    // ── 2a. UV_THREADPOOL_SIZE ─────────────────────────────────────
    if (!content.includes('UV_THREADPOOL_SIZE')) {
      content  += '\nSetEnv UV_THREADPOOL_SIZE 2\n';
      modified  = true;
      console.log('✅  Added UV_THREADPOOL_SIZE 2');
    }

    // ── 2b. --v8-pool-size=1 ───────────────────────────────────────
    if (content.includes('NODE_OPTIONS') && !content.includes('--v8-pool-size=1')) {
      content  = content.replace(
        /SetEnv NODE_OPTIONS "([^"]+)"/,
        'SetEnv NODE_OPTIONS "--v8-pool-size=1 $1"'
      );
      modified = true;
      console.log('✅  Injected --v8-pool-size=1 into NODE_OPTIONS');
    }

    // ── 2c. Cache-Control headers ──────────────────────────────────
    if (!content.includes('Header set Cache-Control')) {
      const cacheBlock = `
# ─── Static Asset Caching (injected by setup-passenger.js) ───────
<IfModule mod_headers.c>
  # Next.js chunk files are content-hashed — safe to cache forever
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

    // ── 2d. Serve _next/static directly from public_html ──────────
    // This RewriteRule ensures requests for /_next/static/* are served
    // by LiteSpeed from public_html/_next/static, bypassing Passenger.
    if (!content.includes('RewriteRule ^_next/static')) {
      const staticRoute = `
# ─── Serve _next/static directly via LiteSpeed (bypass Passenger) ──
<IfModule mod_rewrite.c>
  RewriteEngine On
  # Serve pre-copied static assets from public_html directly
  RewriteCond %{REQUEST_URI} ^/_next/static/
  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f
  RewriteRule ^ - [L]
</IfModule>
`;
      content  += staticRoute;
      modified  = true;
      console.log('✅  Added RewriteRule to bypass Passenger for static assets');
    }

    if (modified) {
      fs.writeFileSync(htaccessPath, content, 'utf8');
      console.log('');
      console.log('✅  .htaccess saved successfully');
    } else {
      console.log('✅  .htaccess already fully patched — no changes needed');
    }
  }

  console.log('');
  console.log('═══════════════════════════════════════════════════');
  console.log('  ✅  DEPLOYMENT SETUP COMPLETE');
  console.log('      CSS/fonts → LiteSpeed (<50ms)');
  console.log('      Node.js   → Page rendering only');
  console.log('      Cache-TTL → 1 year (immutable)');
  console.log('═══════════════════════════════════════════════════');
  console.log('');

} catch (error) {
  console.error('');
  console.error('❌  Passenger setup failed:', error.message);
  console.error(error.stack);
  process.exit(1);
}

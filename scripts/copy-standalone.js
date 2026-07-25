const fs = require('fs');
const path = require('path');

console.log('📂 [Post-Build] Copying static assets to standalone directory...');

const standaloneDir = path.join(__dirname, '..', '.next', 'standalone');
const publicDir = path.join(__dirname, '..', 'public');
const staticDir = path.join(__dirname, '..', '.next', 'static');

const destPublic = path.join(standaloneDir, 'public');
const destStatic = path.join(standaloneDir, '.next', 'static');

try {
  if (fs.existsSync(publicDir)) {
    fs.cpSync(publicDir, destPublic, { recursive: true });
    console.log('✅ Copied public/ folder');
  }

  if (fs.existsSync(staticDir)) {
    fs.cpSync(staticDir, destStatic, { recursive: true });
    console.log('✅ Copied .next/static/ folder to standalone');
  }

  // --- HOSTINGER LITESPEED / HCDN STATIC ASSET SYNC ---
  // Hostinger's LiteSpeed web server and Hostinger CDN (hcdn) serve static assets (_next/static/*)
  // directly from the public_html directory.
  // Because Hostinger CI builds in .builds/last-source or nodejs, we dynamically find public_html
  // and sync all static chunks directly into public_html/_next/static.

  function findPublicHtml(startDir) {
    let current = path.resolve(startDir);
    for (let i = 0; i < 6; i++) {
      if (path.basename(current) === 'public_html') {
        return current;
      }
      const checkPath = path.join(current, 'public_html');
      if (fs.existsSync(checkPath) && fs.statSync(checkPath).isDirectory()) {
        return checkPath;
      }
      const parent = path.dirname(current);
      if (parent === current) break;
      current = parent;
    }
    // Fallback for Hostinger domain path
    const hostingerPath = '/home/u990914603/domains/zylxytech.com/public_html';
    if (fs.existsSync(hostingerPath)) {
      return hostingerPath;
    }
    return null;
  }

  const publicHtmlDir = findPublicHtml(__dirname) || findPublicHtml(process.cwd());

  if (publicHtmlDir && fs.existsSync(publicHtmlDir)) {
    console.log(`\n🌐 Hostinger environment detected! Syncing static files to: ${publicHtmlDir}`);
    
    // Copy .next/static to public_html/_next/static (without deleting existing chunks to support cached HTML)
    const targetNextStatic = path.join(publicHtmlDir, '_next', 'static');
    fs.mkdirSync(targetNextStatic, { recursive: true });
    if (fs.existsSync(staticDir)) {
      fs.cpSync(staticDir, targetNextStatic, { recursive: true });
      console.log('✅ Synced .next/static -> public_html/_next/static');
    }

    // Copy public/* to public_html/
    if (fs.existsSync(publicDir)) {
      fs.cpSync(publicDir, publicHtmlDir, { recursive: true });
      console.log('✅ Synced public/ -> public_html/');
    }

    // Also check if /home/u990914603/domains/zylxytech.com/nodejs exists and copy there if needed
    const nodejsDir = '/home/u990914603/domains/zylxytech.com/nodejs';
    if (fs.existsSync(nodejsDir) && nodejsDir !== path.resolve(__dirname, '..')) {
      const nodejsNextStatic = path.join(nodejsDir, '.next', 'static');
      const nodejsPublic = path.join(nodejsDir, 'public');
      fs.mkdirSync(nodejsNextStatic, { recursive: true });
      if (fs.existsSync(staticDir)) {
        fs.cpSync(staticDir, nodejsNextStatic, { recursive: true });
        console.log('✅ Synced .next/static -> nodejs/.next/static');
      }
      if (fs.existsSync(publicDir)) {
        fs.cpSync(publicDir, nodejsPublic, { recursive: true });
        console.log('✅ Synced public/ -> nodejs/public');
      }
    }
  } else {
    console.log(`\n⚠️ public_html directory not found. Skipping Litespeed static sync.`);
  }

  console.log('\n🎉 Post-build asset copying complete!');
} catch (error) {
  console.error('❌ Error during post-build copy:', error.message);
  process.exit(1);
}

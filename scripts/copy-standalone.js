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

  // --- HOSTINGER LITESPEED FIX ---
  // Hostinger's Litespeed server intercepts static file requests and looks for them in public_html.
  // Since the Node app lives in a parallel folder (nodejs), Litespeed returns 404 for CSS/JS.
  // Fix: We automatically copy the static assets directly into public_html during the CI build!
  const publicHtmlDir = path.join(__dirname, '..', '..', 'public_html');
  
  if (fs.existsSync(publicHtmlDir)) {
    console.log(`\n🌐 Hostinger environment detected! Syncing static files to public_html...`);
    
    // Copy .next/static to public_html/_next/static
    const targetNextStatic = path.join(publicHtmlDir, '_next', 'static');
    fs.mkdirSync(targetNextStatic, { recursive: true });
    fs.cpSync(staticDir, targetNextStatic, { recursive: true });
    console.log('✅ Synced .next/static -> public_html/_next/static');

    // Copy public/* to public_html/
    fs.cpSync(publicDir, publicHtmlDir, { recursive: true });
    console.log('✅ Synced public/ -> public_html/');
  } else {
    console.log(`\n⚠️ public_html not found at ${publicHtmlDir}. Skipping Litespeed static sync.`);
  }

  console.log('\n🎉 Post-build asset copying complete!');
} catch (error) {
  console.error('❌ Error during post-build copy:', error.message);
  process.exit(1);
}

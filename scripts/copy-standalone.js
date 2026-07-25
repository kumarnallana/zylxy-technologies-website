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
    console.log('✅ Copied .next/static/ folder');
  }

  console.log('🎉 Post-build asset copying complete!');
} catch (error) {
  console.error('❌ Error during post-build copy:', error.message);
  process.exit(1);
}

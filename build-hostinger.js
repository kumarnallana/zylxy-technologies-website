const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 [Zylxy Architecture] Starting Hostinger Standalone Build Pipeline...');

try {
  // Step 1: Run the standard Next.js build
  console.log('📦 Building Next.js application...');
  execSync('npm run build', { stdio: 'inherit' });

  // Step 2: Define paths for the standalone output
  const standaloneDir = path.join(__dirname, '.next', 'standalone');
  const publicDir = path.join(__dirname, 'public');
  const staticDir = path.join(__dirname, '.next', 'static');

  const destPublic = path.join(standaloneDir, 'public');
  const destStatic = path.join(standaloneDir, '.next', 'static');

  // Step 3: Copy the required assets that Next.js intentionally leaves out
  console.log('📂 Copying static assets to standalone directory...');
  
  if (fs.existsSync(publicDir)) {
    fs.cpSync(publicDir, destPublic, { recursive: true });
    console.log('✅ Copied public/ folder');
  }

  if (fs.existsSync(staticDir)) {
    fs.cpSync(staticDir, destStatic, { recursive: true });
    console.log('✅ Copied .next/static/ folder');
  }

  console.log('\n🎉 Build Pipeline Complete!');
  console.log('====================================================');
  console.log('Next Steps for Hostinger Deployment:');
  console.log('1. Go into the `.next/standalone` folder.');
  console.log('2. ZIP the ENTIRE CONTENTS of the `.next/standalone` folder (not the folder itself, but everything inside it).');
  console.log('3. Upload that ZIP to Hostinger and extract it.');
  console.log('4. Ensure your Node.js app is configured to run `server.js`.');
  console.log('====================================================\n');

} catch (error) {
  console.error('❌ Build Pipeline Failed:', error.message);
  process.exit(1);
}

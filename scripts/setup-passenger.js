const fs = require('fs');
const path = require('path');

console.log('📂 [Passenger Setup] Copying static assets for LiteSpeed/Passenger delivery...');

// Next.js puts static assets in .next/static
const nextStaticDir = path.join(__dirname, '..', '.next', 'static');

// Passenger serves static assets natively from the 'public' directory at the root of the app
const passengerPublicNextStaticDir = path.join(__dirname, '..', 'public', '_next', 'static');

try {
  // Step 1: Sync .next/static to public/_next/static
  if (fs.existsSync(nextStaticDir)) {
    fs.mkdirSync(passengerPublicNextStaticDir, { recursive: true });
    fs.cpSync(nextStaticDir, passengerPublicNextStaticDir, { recursive: true });
    console.log('✅ Copied .next/static -> public/_next/static');
  } else {
    console.warn('⚠️ .next/static not found! Did you run `next build` first?');
  }
  
  // Step 2: Auto-patch .htaccess in public_html to prevent V8/libuv thread crashes
  console.log('🔧 [Passenger Setup] Patching Hostinger .htaccess...');
  const htaccessPath = path.join(__dirname, '..', '..', 'public_html', '.htaccess');
  
  if (fs.existsSync(htaccessPath)) {
    let htaccessContent = fs.readFileSync(htaccessPath, 'utf8');
    let modified = false;

    // Add UV_THREADPOOL_SIZE if missing
    if (!htaccessContent.includes('UV_THREADPOOL_SIZE')) {
      htaccessContent += '\nSetEnv UV_THREADPOOL_SIZE 2\n';
      modified = true;
      console.log('✅ Added UV_THREADPOOL_SIZE to .htaccess');
    }

    // Inject --v8-pool-size=1 into NODE_OPTIONS if missing
    if (htaccessContent.includes('NODE_OPTIONS') && !htaccessContent.includes('--v8-pool-size=1')) {
      htaccessContent = htaccessContent.replace(
        /SetEnv NODE_OPTIONS "([^"]+)"/,
        'SetEnv NODE_OPTIONS "--v8-pool-size=1 $1"'
      );
      modified = true;
      console.log('✅ Injected --v8-pool-size=1 into NODE_OPTIONS in .htaccess');
    }

    if (modified) {
      fs.writeFileSync(htaccessPath, htaccessContent, 'utf8');
      console.log('✅ Successfully patched .htaccess automatically!');
    } else {
      console.log('✅ .htaccess is already fully patched.');
    }
  } else {
    console.warn(`⚠️ .htaccess not found at ${htaccessPath}. If testing locally, this is normal.`);
  }

  console.log('🎉 Passenger setup complete! LiteSpeed will now serve chunks instantly and Node will boot safely.');
} catch (error) {
  console.error('❌ Error during Passenger setup:', error.message);
  process.exit(1);
}

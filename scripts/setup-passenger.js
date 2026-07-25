const fs = require('fs');
const path = require('path');

console.log('📂 [Passenger Setup] Copying static assets for LiteSpeed/Passenger delivery...');

// Next.js puts static assets in .next/static
const nextStaticDir = path.join(__dirname, '..', '.next', 'static');
const nextPublicDir = path.join(__dirname, '..', 'public');

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
  
  console.log('🎉 Passenger static asset setup complete! LiteSpeed will now serve these chunks instantly.');
} catch (error) {
  console.error('❌ Error during Passenger setup:', error.message);
  process.exit(1);
}

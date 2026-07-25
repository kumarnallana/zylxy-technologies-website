// server.js
process.env.UV_THREADPOOL_SIZE = '2';
console.log('🚀 Booting Next.js Standalone server via Passenger...');
process.env.NODE_ENV = 'production';
require('./.next/standalone/server.js');
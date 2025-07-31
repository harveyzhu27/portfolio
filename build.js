const { spawn } = require('child_process');
const path = require('path');

console.log('Starting build process...');

// Use spawn to run vite with proper stdio inheritance
const viteProcess = spawn('node', [
  path.join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js'),
  'build'
], {
  stdio: 'inherit',
  cwd: __dirname
});

viteProcess.on('close', (code) => {
  if (code === 0) {
    console.log('Build completed successfully!');
  } else {
    console.error(`Build failed with code ${code}`);
    process.exit(code);
  }
});

viteProcess.on('error', (error) => {
  console.error('Build error:', error);
  process.exit(1);
}); 
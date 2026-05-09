const fs = require('fs');

fs.mkdirSync('build', { recursive: true });
fs.writeFileSync('build/index.html', '<html><body><h1>Jenkins Build Success</h1></body></html>');
console.log('Build complete: build/index.html created');

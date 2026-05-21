const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      processDir(fullPath);
    } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Replace /Behind The Scenes/ with /behind-the-scenes/
      if (content.includes('/Behind The Scenes/')) {
        content = content.replace(/\/Behind The Scenes\//g, '/behind-the-scenes/');
        changed = true;
      }
      
      // Fix .JPG to .jpg
      if (content.includes('.JPG')) {
        content = content.replace(/\.JPG/g, '.jpg');
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log('Fixed', fullPath);
      }
    }
  }
}

processDir(path.join(__dirname, 'app'));

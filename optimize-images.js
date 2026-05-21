const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');

// Only process photography directories to be safe
const dirsToProcess = [
  'about-me',
  'behind-the-scenes',
  'camera-image',
  'conservation',
  'dt-images',
  'event',
  'expedition',
  'hotel',
  'safari',
  'sports',
  'assets'
];

async function optimizeImages() {
  let totalSaved = 0;
  let totalProcessed = 0;

  for (const dir of dirsToProcess) {
    const dirPath = path.join(publicDir, dir);
    if (!fs.existsSync(dirPath)) continue;

    const files = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const file of files) {
      if (file.isDirectory()) {
         // recursively handle subdirectories (e.g. for camera-image)
         const subPath = path.join(dirPath, file.name);
         const subFiles = fs.readdirSync(subPath);
         for (const subFile of subFiles) {
            await processFile(path.join(subPath, subFile));
         }
      } else {
         await processFile(path.join(dirPath, file.name));
      }
    }
  }

  console.log(`\nFinished! Optimized ${totalProcessed} images. Saved approximately ${(totalSaved / 1024 / 1024).toFixed(2)} MB in total size.`);

  async function processFile(filePath) {
    if (!/\.(jpg|jpeg|png|webp)$/i.test(filePath)) return;

    try {
      const statsBefore = fs.statSync(filePath);
      const tempPath = filePath + '.tmp';

      await sharp(filePath)
        .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 70, progressive: true, force: false }) // don't force jpeg if it's png
        .png({ quality: 70, force: false })
        .webp({ quality: 70, force: false })
        .toFile(tempPath);

      const statsAfter = fs.statSync(tempPath);
      
      // Only replace if it's actually smaller
      if (statsAfter.size < statsBefore.size) {
        fs.renameSync(tempPath, filePath);
        totalSaved += (statsBefore.size - statsAfter.size);
      } else {
        fs.unlinkSync(tempPath); // delete temp if it's larger
      }
      totalProcessed++;
      process.stdout.write('.');
    } catch (err) {
      console.error(`\nError processing ${filePath}: ${err.message}`);
    }
  }
}

optimizeImages();

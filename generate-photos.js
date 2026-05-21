const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const categoriesMap = {
  'Behind The Scenes': 'BEHIND THE SCENES',
  'expedition': 'EXPEDITION',
  'hotel': 'HOTEL',
  'safari': 'SAFARI',
  'event': 'EVENT & EXPERIENCE',
  'sports': 'SPORTS',
  'conservation': 'CONSERVATION',
};

const photos = [];

Object.entries(categoriesMap).forEach(([folderName, categoryName]) => {
  const dirPath = path.join(publicDir, folderName);
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath);
    files.forEach((file) => {
      if (/\.(jpg|jpeg|png|webp|gif)$/i.test(file)) {
        photos.push({
          src: `/${folderName}/${file}`,
          category: categoryName,
          alt: file.split('.')[0] || categoryName,
        });
      }
    });
  }
});

fs.writeFileSync(
  path.join(__dirname, 'app', 'photography', 'photoData.json'),
  JSON.stringify(photos, null, 2)
);

console.log(`Generated photoData.json with ${photos.length} photos.`);

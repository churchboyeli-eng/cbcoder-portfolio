const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const categoriesMap = {
  'behind-the-scenes': 'BEHIND THE SCENES',
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
        // Create new safe filename
        let newName = file.toLowerCase()
                        .replace(/\s+/g, '-')
                        .replace(/&/g, 'and')
                        .replace(/[^\w\-\.]/g, ''); // Remove any other weird characters
        
        const oldPath = path.join(dirPath, file);
        const newPath = path.join(dirPath, newName);
        
        // Rename the file physically if it changed
        if (oldPath !== newPath) {
          fs.renameSync(oldPath, newPath);
        }

        // Add to our JSON data list
        photos.push({
          src: `/${folderName}/${newName}`,
          category: categoryName,
          alt: newName.split('.')[0] || categoryName,
        });
      }
    });
  }
});

// No URL encoding needed since everything is now web-safe (lowercase, hyphenated)
photos.forEach(p => {
   // Ensuring no extra trailing spaces
   p.src = p.src.trim();
});

fs.writeFileSync(
  path.join(__dirname, 'app', 'photography', 'photoData.json'),
  JSON.stringify(photos, null, 2)
);

console.log(`Renamed and generated photoData.json with ${photos.length} photos.`);

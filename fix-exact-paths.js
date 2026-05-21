const fs = require('fs');
const path = require('path');

// Recursively get all files in public directory, mapping lowercase paths to actual paths
const publicDir = path.join(__dirname, 'public');
const actualPaths = {}; // lowercase -> actual

function scanPublic(dir, prefix = '') {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      scanPublic(path.join(dir, file.name), prefix + '/' + file.name);
    } else {
      const actualPath = prefix + '/' + file.name;
      actualPaths[actualPath.toLowerCase()] = actualPath;
    }
  }
}
scanPublic(publicDir);

function processTsx(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      processTsx(fullPath);
    } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Regex to find paths inside quotes that start with / (e.g. "/behind-the-scenes/ELIWILD.JPG")
      const regex = /(?:src|image|href|url)=?[:]\s*['"](\/[^'"]+)['"]|['"](\/[^'"]*\.(?:jpg|jpeg|png|webp|JPG|JPEG|PNG))['"]/g;
      
      content = content.replace(regex, (match, p1, p2) => {
        const urlPath = p1 || p2;
        if (!urlPath) return match;

        // Try to decode URI component in case it has %20
        let decodedUrl = urlPath;
        try { decodedUrl = decodeURIComponent(urlPath); } catch (e) {}

        const lowerUrl = decodedUrl.toLowerCase();
        
        if (actualPaths[lowerUrl] && actualPaths[lowerUrl] !== decodedUrl) {
           console.log(`Fixing case in ${file.name}: ${decodedUrl} -> ${actualPaths[lowerUrl]}`);
           changed = true;
           // If we matched p1 or p2, we just replace the exact urlPath string in the match
           return match.replace(urlPath, actualPaths[lowerUrl]);
        }

        // Also check if the URL path without decoding matches (for spaces)
        if (actualPaths[urlPath.toLowerCase()] && actualPaths[urlPath.toLowerCase()] !== urlPath) {
           console.log(`Fixing case in ${file.name}: ${urlPath} -> ${actualPaths[urlPath.toLowerCase()]}`);
           changed = true;
           return match.replace(urlPath, actualPaths[urlPath.toLowerCase()]);
        }

        return match;
      });

      if (changed) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

processTsx(path.join(__dirname, 'app'));

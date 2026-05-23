const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetDirs = [
  'public/images',
  'public/images/105',
  'public/images/106'
];

async function optimizeImages() {
  console.log('Starting image optimization to WebP...');
  
  for (const dir of targetDirs) {
    if (!fs.existsSync(dir)) continue;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const inputPath = path.join(dir, file);
        const outputPath = path.join(dir, path.basename(file, ext) + '.webp');
        
        console.log(`Converting: ${inputPath} -> ${outputPath}`);
        
        try {
          await sharp(inputPath)
            .webp({ 
              quality: 80,
              smartSubsample: true,
              effort: 6 // Max compression effort
            })
            .toFile(outputPath);
            
          const oldSize = fs.statSync(inputPath).size;
          const newSize = fs.statSync(outputPath).size;
          const savings = ((oldSize - newSize) / oldSize * 100).toFixed(1);
          
          console.log(`  Done! Size: ${Math.round(oldSize/1024)}KB -> ${Math.round(newSize/1024)}KB (${savings}% saved)`);
          
          // Delete the old file
          fs.unlinkSync(inputPath);
        } catch (err) {
          console.error(`  Error converting ${file}:`, err.message);
        }
      }
    }
  }
  console.log('Optimization complete!');
}

optimizeImages();

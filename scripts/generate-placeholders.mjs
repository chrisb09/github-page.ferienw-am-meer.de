import fs from 'fs/promises';
import path from 'path';
import { getPlaiceholder } from 'plaiceholder';
import sharp from 'sharp';

async function generateBlurData() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const previewDir = path.join(process.cwd(), 'public', 'images', 'previews');
  const outputFile = path.join(process.cwd(), 'lib', 'placeholders.json');

  // Create preview directory if it doesn't exist
  await fs.mkdir(previewDir, { recursive: true });

  console.log('Generating blur placeholders and intermediate previews...');

  const results = {};

  async function walk(dir) {
    const files = await fs.readdir(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = await fs.stat(fullPath);
      
      // Skip the previews directory itself to avoid infinite recursion or processing previews
      if (stat.isDirectory()) {
        if (file !== 'previews') {
          await walk(fullPath);
        }
      } else if (/\.(webp|jpg|jpeg|png)$/i.test(file)) {
        const relativePath = path.relative(path.join(process.cwd(), 'public'), fullPath);
        const webPath = '/' + relativePath.replace(/\\/g, '/');
        
        try {
          const buffer = await fs.readFile(fullPath);
          
          // 1. Generate 10x10 Base64 for the very first frame
          const { base64 } = await getPlaiceholder(buffer, { size: 10 });
          
          // 2. Generate intermediate "preview" image (approx 200px wide, very low quality)
          // We'll save it with a flattened path name in the previews folder
          const previewFileName = relativePath.replace(/[\/\\]/g, '_').replace(/\.[^.]+$/, '') + '.preview.webp';
          const previewPath = path.join(previewDir, previewFileName);
          const previewWebPath = `/images/previews/${previewFileName}`;
          
          await sharp(buffer)
            .resize(200) // Small enough to be ~5-10kb
            .webp({ quality: 20 }) // Low quality but better than 10x10
            .toFile(previewPath);

          results[webPath] = {
            base64,
            preview: previewWebPath
          };
          
          console.log(`✓ ${webPath} (Base64 + Preview)`);
        } catch (err) {
          console.error(`✗ Failed to process ${webPath}:`, err);
        }
      }
    }
  }

  await walk(imagesDir);
  
  await fs.writeFile(outputFile, JSON.stringify(results, null, 2));
  console.log(`\nSuccess! Placeholders saved to ${outputFile}`);
}

generateBlurData().catch(console.error);

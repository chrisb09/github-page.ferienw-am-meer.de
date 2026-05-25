import fs from 'fs/promises';
import path from 'path';
import { getPlaiceholder } from 'plaiceholder';

async function generateBlurData() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const outputFile = path.join(process.cwd(), 'lib', 'placeholders.json');

  console.log('Generating blur placeholders...');

  const results = {};

  async function walk(dir) {
    const files = await fs.readdir(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = await fs.stat(fullPath);
      
      if (stat.isDirectory()) {
        await walk(fullPath);
      } else if (/\.(webp|jpg|jpeg|png)$/i.test(file)) {
        const relativePath = path.relative(path.join(process.cwd(), 'public'), fullPath);
        // Next.js expects paths starting with /
        const webPath = '/' + relativePath.replace(/\\/g, '/');
        
        try {
          const buffer = await fs.readFile(fullPath);
          const { base64 } = await getPlaiceholder(buffer, { size: 10 });
          results[webPath] = base64;
          console.log(`✓ ${webPath}`);
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

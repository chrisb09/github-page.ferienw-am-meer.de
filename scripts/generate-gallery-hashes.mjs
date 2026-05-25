import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const galleryDir = path.join(process.cwd(), 'public/images/gallery');
const outputFile = path.join(process.cwd(), 'lib/gallery-metadata.json');

function getHash(filePath) {
    const fileBuffer = fs.readFileSync(filePath);
    const hashSum = crypto.createHash('md5');
    hashSum.update(fileBuffer);
    return hashSum.digest('hex');
}

const files = fs.readdirSync(galleryDir).filter(f => f.endsWith('.webp')).sort();
const metadata = {};

files.forEach(file => {
    const hash = getHash(path.join(galleryDir, file));
    metadata[hash] = {
        file: file,
        alt: ""
    };
});

fs.writeFileSync(outputFile, JSON.stringify(metadata, null, 2));
console.log(`Generated metadata for ${files.length} images in ${outputFile}`);

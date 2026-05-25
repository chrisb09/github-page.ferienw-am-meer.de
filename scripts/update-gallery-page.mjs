import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const galleryDir = path.join(process.cwd(), 'public/images/gallery');
const metadataFile = path.join(process.cwd(), 'lib/gallery-metadata.json');
const galleryPage = path.join(process.cwd(), 'app/fotogalerie/page.tsx');

function getHash(filePath) {
    const fileBuffer = fs.readFileSync(filePath);
    const hashSum = crypto.createHash('md5');
    hashSum.update(fileBuffer);
    return hashSum.digest('hex');
}

const metadata = JSON.parse(fs.readFileSync(metadataFile, 'utf8'));
const files = fs.readdirSync(galleryDir).filter(f => f.endsWith('.webp')).sort();

const galleryImages = files.map(file => {
    const hash = getHash(path.join(galleryDir, file));
    const alt = metadata[hash]?.alt || "Impression vom Zwischenahner Meer";
    return { src: `/images/gallery/${file}`, alt: alt };
});

const pageContent = `import type { Metadata } from "next";
import { GalleryClient } from "@/components/gallery-client";

export const metadata: Metadata = {
  title: "Fotogalerie – Ferienwohnungen Am Meer",
  description: "Impressionen von den Ferienwohnungen, der Wohnanlage am See und der Umgebung in Bad Zwischenahn.",
};

const galleryImages = ${JSON.stringify(galleryImages, null, 2)};

export default function FotoGaleriePage() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Impressionen
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Entdecken Sie die Schönheit der Wohnanlage am See und die idyllische Umgebung von Bad Zwischenahn zu jeder Jahreszeit. 
          Klicken Sie auf ein Bild, um es zu vergrößern.
        </p>
      </div>

      <GalleryClient images={galleryImages} />
    </section>
  );
}
`;

fs.writeFileSync(galleryPage, pageContent);
console.log(`Updated ${galleryPage} with ${galleryImages.length} images.`);

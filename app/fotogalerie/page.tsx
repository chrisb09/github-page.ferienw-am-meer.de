import type { Metadata } from "next";
import { GalleryClient } from "@/components/gallery-client";

export const metadata: Metadata = {
  title: "Fotogalerie – Ferienwohnungen Am Meer",
  description: "Impressionen von den Ferienwohnungen, der Wohnanlage am See und der Umgebung in Bad Zwischenahn.",
};

const galleryImages = [
  { src: "/images/gallery/image-01.webp", alt: "Wohnanlage Am Delf vom Wasser aus gesehen" },
  { src: "/images/gallery/image-02.webp", alt: "Boote im Hafen der Wohnanlage" },
  { src: "/images/gallery/image-03.webp", alt: "Segelboote am Zwischenahner Meer" },
  { src: "/images/gallery/image-04.webp", alt: "Blick aus dem Hafen auf die Wohnanlage" },
  { src: "/images/gallery/image-05.webp", alt: "Der Steg in den See bei Nacht mit Nordlichtern" },
  { src: "/images/gallery/image-06.webp", alt: "Ufervegetation bei Nacht mit farbiger Lichtstimmung" },
  { src: "/images/gallery/image-07.webp", alt: "Abendstimmung am Seeufer" },
  { src: "/images/gallery/image-08.webp", alt: "Blick über das Wasser auf den Hafen der Wohnanlage" },
  { src: "/images/gallery/image-09.webp", alt: "Blick vom Steg auf den See und Hafen" },
  { src: "/images/gallery/image-10.webp", alt: "Boote im Hafen bei Sonnenuntergang" },
  { src: "/images/gallery/image-11.webp", alt: "Abendlicher Blick über das weite Zwischenahner Meer" },
  { src: "/images/gallery/image-12.webp", alt: "Uferweg am Zwischenahner Meer bei Nacht" },
  { src: "/images/gallery/image-13.webp", alt: "Der Steg in den See am Tag" },
  { src: "/images/gallery/image-14.webp", alt: "Reflektionen der Uferbäume im See bei Nacht" },
];

export default function FotoGaleriePage() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Impressionen
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Entdecken Sie die Schönheit der Wohnanlage am See und die idyllische Umgebung von Bad Zwischenahn. 
          Klicken Sie auf ein Bild, um es zu vergrößern.
        </p>
      </div>

      <GalleryClient images={galleryImages} />
    </section>
  );
}

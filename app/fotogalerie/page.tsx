import type { Metadata } from "next";
import { GalleryClient } from "@/components/gallery-client";

export const metadata: Metadata = {
  title: "Fotogalerie – Ferienwohnungen Am Meer",
  description: "Impressionen von den Ferienwohnungen, der Wohnanlage am See und der Umgebung in Bad Zwischenahn.",
};

const galleryImages = [
  {
    "src": "/images/gallery/image-01.webp",
    "alt": "Wohnanlage Am Delf vom Wasser aus gesehen"
  },
  {
    "src": "/images/gallery/image-02.webp",
    "alt": "Boote im Hafen der Wohnanlage"
  },
  {
    "src": "/images/gallery/image-03.webp",
    "alt": "Segelboote am Zwischenahner Meer"
  },
  {
    "src": "/images/gallery/image-04.webp",
    "alt": "Blick aus dem Hafen auf die Wohnanlage"
  },
  {
    "src": "/images/gallery/image-05.webp",
    "alt": "Der Steg in den See bei Nacht mit Nordlichtern"
  },
  {
    "src": "/images/gallery/image-06.webp",
    "alt": "Ufervegetation bei Nacht mit farbiger Lichtstimmung"
  },
  {
    "src": "/images/gallery/image-07.webp",
    "alt": "Abendstimmung am Seeufer"
  },
  {
    "src": "/images/gallery/image-08.webp",
    "alt": "Blick über das Wasser auf den Hafen der Wohnanlage"
  },
  {
    "src": "/images/gallery/image-09.webp",
    "alt": "Blick vom Steg auf den See und Hafen"
  },
  {
    "src": "/images/gallery/image-10.webp",
    "alt": "Boote im Hafen bei Sonnenuntergang"
  },
  {
    "src": "/images/gallery/image-11.webp",
    "alt": "Abendlicher Blick über das weite Zwischenahner Meer"
  },
  {
    "src": "/images/gallery/image-12.webp",
    "alt": "Uferweg am Zwischenahner Meer bei Nacht"
  },
  {
    "src": "/images/gallery/image-13.webp",
    "alt": "Der Steg in den See am Tag"
  },
  {
    "src": "/images/gallery/image-14.webp",
    "alt": "Reflektionen der Uferbäume im See bei Nacht"
  },
  {
    "src": "/images/gallery/image-15.webp",
    "alt": "Dramatischer Sonnenuntergang hinter dem Schilfgürtel"
  },
  {
    "src": "/images/gallery/image-16.webp",
    "alt": "Feuriger Himmel über dem Zwischenahner Meer bei Sonnenuntergang"
  },
  {
    "src": "/images/gallery/image-17.webp",
    "alt": "Spiegelung der Wolken im ruhigen Wasserweg"
  },
  {
    "src": "/images/gallery/image-18.webp",
    "alt": "Blick durch das Schilf auf das weite Wasser"
  },
  {
    "src": "/images/gallery/image-19.webp",
    "alt": "Abendsonne bricht durch die Bäume am Sandstrand"
  },
  {
    "src": "/images/gallery/image-20.webp",
    "alt": "Blick vom Wasser auf die Segelboote am Ufer"
  },
  {
    "src": "/images/gallery/image-21.webp",
    "alt": "Luftbild: Wohnanlage Am Delf direkt am See"
  },
  {
    "src": "/images/gallery/image-22.webp",
    "alt": "Verschneiter Steg führt in den zugefrorenen See"
  },
  {
    "src": "/images/gallery/image-23.webp",
    "alt": "Goldene Stunde am Seeufer"
  },
  {
    "src": "/images/gallery/image-24.webp",
    "alt": "Spiegelglattes Wasser im Hafen der Wohnanlage"
  },
  {
    "src": "/images/gallery/image-25.webp",
    "alt": "Vollmond über der beleuchteten Wohnanlage"
  },
  {
    "src": "/images/gallery/image-26.webp",
    "alt": "Nächtliche Hafenidylle unter bewölktem Himmel"
  },
  {
    "src": "/images/gallery/image-27.webp",
    "alt": "Eiskristalle am Schilf vor dem gefrorenen Meer"
  },
  {
    "src": "/images/gallery/image-28.webp",
    "alt": "Bizarre Eisformationen am Ufer des Meeres"
  },
  {
    "src": "/images/gallery/image-29.webp",
    "alt": "Glaskugel-Fotografie: Die Anlage Kopf stehend im Schnee"
  },
  {
    "src": "/images/gallery/image-30.webp",
    "alt": "Glaskugel-Fotografie: Nächtliche Beleuchtung in der Kugel gefangen"
  },
  {
    "src": "/images/gallery/image-31.webp",
    "alt": "Glaskugel-Fotografie: Der verschneite Hafen im Fokus"
  },
  {
    "src": "/images/gallery/image-32.webp",
    "alt": "Glaskugel-Fotografie: Die Wohnanlage im Winterkleid"
  },
  {
    "src": "/images/gallery/image-33.webp",
    "alt": "Glaskugel-Fotografie: Weite Winterlandschaft in der Kugel"
  },
  {
    "src": "/images/gallery/image-34.webp",
    "alt": "Glaskugel-Fotografie: Ein Schiff am winterlichen Anleger"
  },
  {
    "src": "/images/gallery/image-35.webp",
    "alt": "Glaskugel-Fotografie: Die Anlage schwebend über dem Schnee"
  },
  {
    "src": "/images/gallery/image-36.webp",
    "alt": "Glaskugel-Fotografie: Detailaufnahme eines Astes im Winter"
  },
  {
    "src": "/images/gallery/image-37.webp",
    "alt": "Glaskugel-Fotografie: Der weite Himmel über der Anlage"
  },
  {
    "src": "/images/gallery/image-38.webp",
    "alt": "Glaskugel-Fotografie: Die Anlage perfekt zentriert in der Kugel"
  },
  {
    "src": "/images/gallery/image-39.webp",
    "alt": "Glaskugel-Fotografie: Abendliche Stimmung am Hafen"
  },
  {
    "src": "/images/gallery/image-40.webp",
    "alt": "Verschneite Äste über dem zugefrorenen Wasserweg"
  },
  {
    "src": "/images/gallery/image-41.webp",
    "alt": "Winterliche Weite über dem Eis am Abend"
  },
  {
    "src": "/images/gallery/image-42.webp",
    "alt": "Sonne spiegelt sich auf der weiten Wasserfläche"
  },
  {
    "src": "/images/gallery/image-43.webp",
    "alt": "Dunkle Wolken und Sonnenstrahlen über dem See"
  },
  {
    "src": "/images/gallery/image-44.webp",
    "alt": "Morgenstimmung mit leichtem Nebel über dem Wasser"
  },
  {
    "src": "/images/gallery/image-45.webp",
    "alt": "Verschneiter Uferweg bei Nacht unter Straßenlaternen"
  },
  {
    "src": "/images/gallery/image-46.webp",
    "alt": "Blick über den verschneiten Anleger auf die beleuchtete Anlage"
  }
];

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

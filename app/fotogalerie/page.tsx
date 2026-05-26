import type { Metadata } from "next";
import { GalleryClient } from "@/components/gallery-client";

export const metadata: Metadata = {
  title: "Fotogalerie – Ferienwohnungen Am Meer",
  description: "Impressionen von den Ferienwohnungen, der Wohnanlage am See und der Umgebung in Bad Zwischenahn.",
};

const galleryImages = [
  {
    "src": "/images/gallery/image-01.webp",
    "alt": "Wohnanlage Am Delf vom Wasser aus gesehen, mit Booten im anliegenden Hafen"
  },
  {
    "src": "/images/gallery/image-02.webp",
    "alt": "Segelboote im Hafen direkt vor der Wohnanlage"
  },
  {
    "src": "/images/gallery/image-03.webp",
    "alt": "Hafen an der Wohnanlage mit Segelbooten unter bewölktem Himmel"
  },
  {
    "src": "/images/gallery/image-04.webp",
    "alt": "Blick aus dem Hafen auf die Wohnanlage"
  },
  {
    "src": "/images/gallery/image-05.webp",
    "alt": "Der Steg in Eyhausen führt in den See unter leuchtend grünen Polarlichtern"
  },
  {
    "src": "/images/gallery/image-06.webp",
    "alt": "Rote Nordlichter über dem zugefrorenen See mit Schilf im Vordergrund"
  },
  {
    "src": "/images/gallery/image-07.webp",
    "alt": "Tanzende grüne und pinke Polarlichter am Nachthimmel über einer Holzbank am See"
  },
  {
    "src": "/images/gallery/image-08.webp",
    "alt": "Rote Nordlichter leuchten hinter Bäumen am Ufer"
  },
  {
    "src": "/images/gallery/image-09.webp",
    "alt": "Mystische Polarlichter in Rot und Grün über beleuchteten Bäumen am Ufer"
  },
  {
    "src": "/images/gallery/image-10.webp",
    "alt": "Farbenfrohes Nordlichter-Spektakel spiegelt sich im Wasser neben Uferbäumen"
  },
  {
    "src": "/images/gallery/image-11.webp",
    "alt": "Leuchtende Polarlichter am Nachthimmel über der Ufervegetation"
  },
  {
    "src": "/images/gallery/image-12.webp",
    "alt": "Abendstimmung mit pinken Wolken über dem See und der Hafenanlage"
  },
  {
    "src": "/images/gallery/image-13.webp",
    "alt": "Sanfter Sonnenuntergang mit farbigen Wolken über dem See und Hafen"
  },
  {
    "src": "/images/gallery/image-14.webp",
    "alt": "Intensiv pink leuchtende Wolken bei Sonnenuntergang über dem Hafen"
  },
  {
    "src": "/images/gallery/image-15.webp",
    "alt": "Die hell erleuchtete Wohnanlage an der winterlichen Seeseite bei Nacht (zugefroren)"
  },
  {
    "src": "/images/gallery/image-16.webp",
    "alt": "Goldener Sonnenuntergang über dem ruhigen See mit Holzsteg"
  },
  {
    "src": "/images/gallery/image-17.webp",
    "alt": "Tief verschneiter, zugefrorener Wasserlauf gesäumt von Winterbäumen"
  },
  {
    "src": "/images/gallery/image-18.webp",
    "alt": "Glaskugel-Fotografie: Die winterliche Wohnanlage steht in der Kugel Kopf"
  },
  {
    "src": "/images/gallery/image-19.webp",
    "alt": "Glaskugel-Fotografie: Detailaufnahme eines schneebedeckten Baumstumpfes"
  },
  {
    "src": "/images/gallery/image-20.webp",
    "alt": "Glaskugel-Fotografie: Der verschneite Anleger im Fokus der Kugel"
  },
  {
    "src": "/images/gallery/image-21.webp",
    "alt": "Glaskugel-Fotografie: Ein Ausflugsschiff am zugefrorenen Anleger"
  },
  {
    "src": "/images/gallery/image-22.webp",
    "alt": "Ruhige Abendstimmung über dem teilweise zugefrorenen See"
  },
  {
    "src": "/images/gallery/image-23.webp",
    "alt": "Der teilweise abgebaute Hafen im Winter (ohne Holzstege) unter nächtlichem Himmel"
  },
  {
    "src": "/images/gallery/image-24.webp",
    "alt": "Bizarre Eiskristalle und gefrorene Pflanzen am winterlichen Seeufer"
  },
  {
    "src": "/images/gallery/image-25.webp",
    "alt": "Raureif an einem Schilfhalm vor der Kulisse des vereisten Meeres"
  },
  {
    "src": "/images/gallery/image-26.webp",
    "alt": "Blick über das eisige Ufer auf den zugefrorenen See und entfernte Gebäude"
  },
  {
    "src": "/images/gallery/image-27.webp",
    "alt": "Glaskugel-Fotografie: Eine weite Winterlandschaft mit Bäumen am gefrorenen See"
  },
  {
    "src": "/images/gallery/image-28.webp",
    "alt": "Glaskugel-Fotografie: Spiegelung der verschneiten Wohnanlage am Ufer"
  },
  {
    "src": "/images/gallery/image-29.webp",
    "alt": "Wunderschöne Wolkenformationen spiegeln sich im ruhigen Wasser des Sees"
  },
  {
    "src": "/images/gallery/image-30.webp",
    "alt": "Weiter Blick über den See auf den fernen Yachthafen Bünting unter blauem Himmel"
  },
  {
    "src": "/images/gallery/image-31.webp",
    "alt": "Goldene Abendsonne scheint durch die großen, kahlen Bäume am Strand"
  },
  {
    "src": "/images/gallery/image-32.webp",
    "alt": "Blick durch das Schilf auf das weite Wasser"
  },
  {
    "src": "/images/gallery/image-33.webp",
    "alt": "Spiegelung der Wolken im ruhigen Wasserweg"
  },
  {
    "src": "/images/gallery/image-34.webp",
    "alt": "Verschneiter Steg (Eyhausen) in den See bei Nacht mit Sperrschildern"
  },
  {
    "src": "/images/gallery/image-35.webp",
    "alt": "Glaskugel-Fotografie: Nächtlicher Blick auf die Architektur der Anlage"
  },
  {
    "src": "/images/gallery/image-36.webp",
    "alt": "Glaskugel-Fotografie: Die erleuchtete Wohnanlage bei Nacht in der Kugel gefangen"
  },
  {
    "src": "/images/gallery/image-37.webp",
    "alt": "Die Sonne taucht den gefrorenen See in ein warmes Licht"
  },
  {
    "src": "/images/gallery/image-38.webp",
    "alt": "Romantischer Sonnenuntergang mit pinken Wolken über dem zugefrorenen See"
  },
  {
    "src": "/images/gallery/image-39.webp",
    "alt": "Intensives Abendrot spiegelt sich auf der eisigen Fläche des Meeres"
  },
  {
    "src": "/images/gallery/image-40.webp",
    "alt": "Leuchtender Sonnenuntergang hinter dem winterlichen Schilfgürtel"
  },
  {
    "src": "/images/gallery/image-41.webp",
    "alt": "Nächtliche Winterstimmung am gesperrten Holzsteg in Eyhausen"
  },
  {
    "src": "/images/gallery/image-42.webp",
    "alt": "Der helle Vollmond scheint durch die Wolken über der nächtlichen Wohnanlage"
  },
  {
    "src": "/images/gallery/image-43.webp",
    "alt": "Nächtliche Hafenatmosphäre mit der hell erleuchteten Anlage unter dem Mondlicht"
  },
  {
    "src": "/images/gallery/image-44.webp",
    "alt": "Mystischer Morgennebel steigt bei Sonnenaufgang über dem See auf"
  },
  {
    "src": "/images/gallery/image-45.webp",
    "alt": "Blick vom Steg in Eyhausen über das Wasser, rechts im Bild der Yachthafen Bünting"
  },
  {
    "src": "/images/gallery/image-46.webp",
    "alt": "Luftaufnahme: Die gesamte Wohnanlage Am Delf und die Bootsliegeplätze aus der Vogelperspektive"
  },
  {
    "src": "/images/gallery/image-47.webp",
    "alt": "Impression vom Zwischenahner Meer"
  },
  {
    "src": "/images/gallery/image-48.webp",
    "alt": "Impression vom Zwischenahner Meer"
  },
  {
    "src": "/images/gallery/image-49.webp",
    "alt": "Impression vom Zwischenahner Meer"
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

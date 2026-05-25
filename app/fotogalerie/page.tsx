import type { Metadata } from "next";
import { GalleryClient } from "@/components/gallery-client";

export const metadata: Metadata = {
  title: "Fotogalerie – Ferienwohnungen Am Meer",
  description: "Impressionen von den Ferienwohnungen, der Wohnanlage am See und der Umgebung in Bad Zwischenahn.",
};

const galleryImages = [
  // Block 1: Building & Initial impressions
  { src: "/images/gallery/image-01.webp", alt: "Wohnanlage Am Delf vom Wasser aus gesehen" },
  { src: "/images/gallery/image-02.webp", alt: "Dramatischer Sonnenuntergang mit intensiven Rot- und Orangetönen am See" },
  { src: "/images/gallery/image-03.webp", alt: "Abendstimmung über dem Zwischenahner Meer mit weichen Wolkenformationen" },
  { src: "/images/gallery/image-04.webp", alt: "Blick vom Boot im Hafen auf die Architektur der Wohnanlage" },
  { src: "/images/gallery/image-05.webp", alt: "Abendsonne bricht durch das dichte Schilf am Seeufer" },
  { src: "/images/gallery/image-06.webp", alt: "Sonnenuntergang am Sandstrand mit Spiegelungen im nassen Uferbereich" },
  { src: "/images/gallery/image-07.webp", alt: "Spektakuläre Nordlichter in kräftigem Grün über dem nächtlichen Anleger" },
  { src: "/images/gallery/image-08.webp", alt: "Polarlichter spiegeln sich magisch im spiegelglatten Wasser des Meeres" },
  { src: "/images/gallery/image-09.webp", alt: "Nächtliche Uferbäume unter dem mystischen Leuchten der Nordlichter" },
  { src: "/images/gallery/image-10.webp", alt: "Farbenfrohes Polarlicht-Spektakel über der nächtlichen Ufervegetation" },
  { src: "/images/gallery/image-11.webp", alt: "Luftbild: Die Wohnanlage und der Yachthafen aus der Vogelperspektive" },
  { src: "/images/gallery/image-12.webp", alt: "Mystische Morgenstimmung mit aufsteigendem Nebel über dem stillen Wasser" },
  { src: "/images/gallery/image-13.webp", alt: "Die beleuchtete Wohnanlage bei Nacht unter dem hellen Vollmond" },
  { src: "/images/gallery/image-14.webp", alt: "Nächtliche Hafenidylle mit Blick auf die beleuchtete Anlage" },

  // Block 2: Sunsets & Atmosphere
  { src: "/images/gallery/image-15.webp", alt: "Leuchtender Sonnenuntergang hinter dem winterlichen Schilfgürtel" },
  { src: "/images/gallery/image-16.webp", alt: "Grüne Polarlichter über dem verschneiten Steg bei Nacht" },
  { src: "/images/gallery/image-17.webp", alt: "Atmosphärische Nordlichter über dem tief verschneiten Uferweg" },
  { src: "/images/gallery/image-18.webp", alt: "Blick auf den Yachthafen Bünting durch die winterlichen Uferbäume" },
  { src: "/images/gallery/image-19.webp", alt: "Boote im Yachthafen Bünting an einem klaren Tag" },
  { src: "/images/gallery/image-20.webp", alt: "Abendrot und dunkle Wolken über dem weiten Schilfgürtel am See" },
  { src: "/images/gallery/image-21.webp", alt: "Sanfter Sonnenuntergang über der weiten Wasserfläche" },
  { src: "/images/gallery/image-22.webp", alt: "Morgenstimmung mit leichtem Nebel über dem Zwischenahner Meer" },

  // Block 3: Creative & Details
  { src: "/images/gallery/image-23.webp", alt: "Glaskugel-Fotografie: Die nächtliche Wohnanlage in einer Kristallkugel" },
  { src: "/images/gallery/image-24.webp", alt: "Detailaufnahme: Die beleuchteten Giebel der Anlage in einer Glaskugel bei Nacht" },
  { src: "/images/gallery/image-25.webp", alt: "Der verschneite Anleger führt bei Nacht in die winterliche Weite" },
  { src: "/images/gallery/image-26.webp", alt: "Hafenansicht durch eine Glaskugel an einem sonnigen Wintertag" },
  { src: "/images/gallery/image-27.webp", alt: "Die verschneite Wohnanlage Kopf stehend in einer Glaskugel eingefangen" },
  { src: "/images/gallery/image-28.webp", alt: "Kristallkugel im Schnee mit einer klaren Spiegelung der Anlage" },
  { src: "/images/gallery/image-29.webp", alt: "Kräftige Nordlichter leuchten über dem winterlichen Zwischenahner Meer" },
  { src: "/images/gallery/image-30.webp", alt: "Polarlichter spiegeln sich auf der gefrorenen Eisfläche des Sees" },
  { src: "/images/gallery/image-31.webp", alt: "Tanzende Polarlichter am winterlichen Nachthimmel über Bad Zwischenahn" },
  { src: "/images/gallery/image-32.webp", alt: "Raureif und Eiskristalle an den Halmen im winterlichen Schilf" },
  { src: "/images/gallery/image-33.webp", alt: "Bizarre Eisformationen am zugefrorenen Seeufer bei starkem Frost" },
  { src: "/images/gallery/image-34.webp", alt: "Luftaufnahme der Wohnanlage im sommerlichen Grün am Ufer" },
  { src: "/images/gallery/image-35.webp", alt: "Blick vom Steg über das Wasser auf den weiten See" },
  { src: "/images/gallery/image-36.webp", alt: "Sonne steigt durch dichten Morgennebel über dem winterlichen Wasser auf" },
  { src: "/images/gallery/image-37.webp", alt: "Die Wohnanlage bei Nacht unter dem Schein des Vollmonds" },
  { src: "/images/gallery/image-38.webp", alt: "Beleuchtete Fassade der Anlage unter dem nächtlichen Wolkenhimmel" },
  { src: "/images/gallery/image-39.webp", alt: "Glaskugel im Schnee spiegelt den winterlichen Hafen der Anlage" },
  { src: "/images/gallery/image-40.webp", alt: "Zugefrorener Wasserlauf gesäumt von tief verschneiten Uferbäumen" },
  { src: "/images/gallery/image-41.webp", alt: "Abendstimmung über der weiten, gefrorenen Eisfläche des Meeres" },
  { src: "/images/gallery/image-42.webp", alt: "Golden glänzender Sonnenuntergang über dem winterlichen Zwischenahner Meer" },
  { src: "/images/gallery/image-43.webp", alt: "Kristallkugel im Schnee zeigt ein Schiff am winterlichen Anleger" },
  { src: "/images/gallery/image-44.webp", alt: "Nächtlicher Blick auf den verschneiten Hafen und die Wohnanlage" },
  { src: "/images/gallery/image-45.webp", alt: "Vereiste Slippanlage im Hafen unter dem nächtlichen Winterhimmel" },
  { src: "/images/gallery/image-46.webp", alt: "Winterliche Nachtansicht der beleuchteten Anlage am verschneiten Hafen" },
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

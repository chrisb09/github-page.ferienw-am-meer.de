import type { Metadata } from "next";
import { RoomPage } from "@/components/room-page";

export const metadata: Metadata = {
  title: "Wohnzimmer – Ferienwohnung 105 Am Meer",
  description: "Das Wohnzimmer der Ferienwohnung 105 mit Küchenzeile und Seeblick.",
};

export default function Wohnzimmer105Page() {
  return (
    <RoomPage
      apartment={105}
      roomSlug="wohnzimmer"
      roomLabel="Wohnzimmer"
      description={
        <>
          <p>
            Die großen Fensterscheiben vermitteln Ihnen das Gefühl, im Freien zu sitzen,
            mit einem weiten Blick auf den Zwischenahner See.
          </p>
          <p>
            Der Wohnbereich ist ausgestattet mit Kabel-TV, Radio sowie Büchern, Zeitschriften
            und Gesellschaftsspielen.
          </p>
          <p>
            Die Küchenzeile ist voll ausgestattet: Kaffeemaschine, Herd, Kühlschrank,
            Mikrowelle, Heißluftfritteuse sowie alle notwendigen Küchenutensilien.
          </p>
          <p>
            Das Wohnzimmer ist modern und gemütlich eingerichtet und bietet Platz zum
            Entspannen nach einem aktiven Tag.
          </p>
        </>
      }
      images={[
        { src: "/images/105/wohnzimmer-01.webp", alt: "Wohnzimmer Ferienwohnung 105 – Sitzbereich mit Seeblick" },
        { src: "/images/105/wohnzimmer-02.webp", alt: "Wohnzimmer Ferienwohnung 105 – Essbereich" },
        { src: "/images/105/wohnzimmer-03.webp", alt: "Wohnzimmer Ferienwohnung 105 – Küchenzeile" },
      ]}
    />
  );
}

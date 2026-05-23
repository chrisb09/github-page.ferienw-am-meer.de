import type { Metadata } from "next";
import { RoomPage } from "@/components/room-page";

export const metadata: Metadata = {
  title: "Wohnzimmer – Ferienwohnung 106 Am Meer",
  description: "Das modern und gemütlich eingerichtete Wohnzimmer der Ferienwohnung 106 mit Seeblick.",
};

export default function Wohnzimmer106Page() {
  return (
    <RoomPage
      apartment={106}
      roomSlug="wohnzimmer"
      roomLabel="Wohnzimmer"
      description={
        <>
          <p>
            Die großen Fensterscheiben vermitteln Ihnen das Gefühl, im Freien zu sitzen.
          </p>
          <p>
            Der Wohnbereich ist ausgestattet mit Kabel-TV, Radio-CD-Kassettenspieler, Fernglas
            sowie Büchern, Zeitschriften und Gesellschaftsspielen.
          </p>
          <p>
            Zur Unterbringung Ihrer Wertsachen ist ein Safe installiert.
          </p>
          <p>
            Das Wohnzimmer ist modern und gemütlich eingerichtet. Hinter dem Raumteiler
            befindet sich noch ein ausziehbares Sofa, das einen weiteren Schlafplatz ermöglicht.
          </p>
          <p>
            Die Kochnische ist voll ausgestattet: Kaffeemaschine, Wasserkocher, Herd,
            Mikrowelle, Kühlschrank mit Gefrierfach sowie Toaster und Spülmaschine.
          </p>
        </>
      }
      images={[
        { src: "/images/106/wohnzimmer-01.webp", alt: "Wohnzimmer Ferienwohnung 106 – Sitzbereich mit Seeblick" },
        { src: "/images/106/wohnzimmer-02.webp", alt: "Wohnzimmer Ferienwohnung 106 – Essbereich am Abend" },
        { src: "/images/106/wohnzimmer-03.webp", alt: "Wohnzimmer Ferienwohnung 106 – Küchenbereich" },
      ]}
    />
  );
}

import type { Metadata } from "next";
import { RoomPage } from "@/components/room-page";

export const metadata: Metadata = {
  title: "Schlafzimmer – Ferienwohnung 106 Am Meer",
  description: "Das ruhige Schlafzimmer der Ferienwohnung 106 mit Doppelbett und Seeblick.",
};

export default function Schlafzimmer106Page() {
  return (
    <RoomPage
      apartment={106}
      roomSlug="schlafzimmer"
      roomLabel="Schlafzimmer"
      description={
        <>
          <p>
            Das Schlafzimmer ist mit einem komfortablen Doppelbett ausgestattet und bietet
            eine ruhige, erholsame Atmosphäre.
          </p>
          <p>
            Durch die ruhige Lage der Wohnung schlafen Sie hier besonders gut.
            Frische Bettwäsche ist selbstverständlich inklusive.
          </p>
          <p>
            Ein Kleiderschrank bietet ausreichend Stauraum für Ihren Urlaub.
          </p>
        </>
      }
      images={[
        { src: "/Schlafzimmer_106_files/shapeimage_1.jpg", alt: "Schlafzimmer Ferienwohnung 106 – Doppelbett" },
        { src: "/Schlafzimmer_106_files/shapeimage_7.jpg", alt: "Schlafzimmer Ferienwohnung 106 – Detail" },
        { src: "/Schlafzimmer_106_files/shapeimage_8.jpg", alt: "Schlafzimmer Ferienwohnung 106 – weiterer Blick" },
        { src: "/Schlafzimmer_106_files/shapeimage_9.jpg", alt: "Schlafzimmer Ferienwohnung 106 – Einrichtung" },
      ]}
    />
  );
}

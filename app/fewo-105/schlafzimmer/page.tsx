import type { Metadata } from "next";
import { RoomPage } from "@/components/room-page";

export const metadata: Metadata = {
  title: "Schlafzimmer – Ferienwohnung 105 Am Meer",
  description: "Das ruhige Schlafzimmer der Ferienwohnung 105 mit Doppelbett.",
};

export default function Schlafzimmer105Page() {
  return (
    <RoomPage
      apartment={105}
      roomSlug="schlafzimmer"
      roomLabel="Schlafzimmer"
      description={
        <>
          <p>
            Das Schlafzimmer ist mit einem komfortablen Doppelbett ausgestattet und bietet
            eine ruhige, erholsame Atmosphäre.
          </p>
          <p>
            Frische Bettwäsche ist selbstverständlich inklusive. Ein Kleiderschrank bietet
            ausreichend Stauraum für Ihren Urlaub.
          </p>
          <p>
            Durch die ruhige Lage der Wohnung direkt am See schlafen Sie hier besonders
            gut und erholt.
          </p>
        </>
      }
      images={[
        { src: "/Schlafzimmer_105_files/shapeimage_1.jpg", alt: "Schlafzimmer Ferienwohnung 105 – Doppelbett" },
        { src: "/Schlafzimmer_105_files/shapeimage_7.jpg", alt: "Schlafzimmer Ferienwohnung 105 – Detail" },
        { src: "/Schlafzimmer_105_files/shapeimage_8.jpg", alt: "Schlafzimmer Ferienwohnung 105 – Einrichtung" },
      ]}
    />
  );
}

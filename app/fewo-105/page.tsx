import type { Metadata } from "next";
import { ApartmentPageClient } from "@/components/apartment-page-client";

export const metadata: Metadata = {
  title: "Ferienwohnung 105 – Am Meer Bad Zwischenahn",
  description:
    "50 qm Ferienwohnung 105 mit überdachtem Balkon, direkt am Zwischenahner Meer. Nichtraucher, allergiefreundlich.",
};

const rooms = [
  { href: "/fewo-105/wohnzimmer", label: "Wohnzimmer" },
  { href: "/fewo-105/balkon", label: "Balkon" },
  { href: "/fewo-105/schlafzimmer", label: "Schlafzimmer" },
  { href: "/fewo-105/badezimmer", label: "Badezimmer" },
];

export default function Fewo105Page() {
  return (
    <ApartmentPageClient
      apartment={105}
      title="Wohnung 105"
      subtitle="Nichtraucher · Allergiefreundlich · 50 qm · 4. Etage mit Fahrstuhl"
      floorPlanSrc="/images/105/grundriss.svg"
      floorPlanAlt="Grundriss Ferienwohnung 105"
      rooms={rooms}
      otherAptHref="/fewo-106"
      otherAptLabel="Wohnung 106"
      description={
        <>
          <p>
            Beide Wohnungen liegen direkt nebeneinander in der 4. Etage und
            sind mit einem Fahrstuhl erreichbar.
          </p>
          <p>
            Durch einen separaten Eingang ist ein barrierefreies Erreichen der
            Wohnung möglich.
          </p>
          <p>
            Die <strong className="text-foreground">50 qm</strong> teilen sich
            auf in ein Wohnzimmer mit Küchenzeile, ein Schlafzimmer mit
            Doppelbett, Dusche, Flur, Abstellraum und einen{" "}
            <strong className="text-foreground">
              6&nbsp;m langen überdachten Balkon
            </strong>{" "}
            (Loggia).
          </p>
          <p>
            Die Wohnung ist komplett ausgestattet. Sollte etwas fehlen, sorge
            ich gerne für Abhilfe.
          </p>
        </>
      }
    />
  );
}

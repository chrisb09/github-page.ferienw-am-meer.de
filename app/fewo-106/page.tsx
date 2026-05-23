import type { Metadata } from "next";
import { ApartmentPageClient } from "@/components/apartment-page-client";

export const metadata: Metadata = {
  title: "Ferienwohnung 106 – Am Meer Bad Zwischenahn",
  description:
    "70 qm Ferienwohnung 106 mit 18 qm Loggia, direkt am Zwischenahner Meer.",
};

const rooms = [
  { href: "/fewo-106/wohnzimmer", label: "Wohnzimmer" },
  { href: "/fewo-106/balkon", label: "Balkon / Loggia" },
  { href: "/fewo-106/schlafzimmer", label: "Schlafzimmer" },
  { href: "/fewo-106/badezimmer", label: "Badezimmer" },
];

export default function Fewo106Page() {
  return (
    <ApartmentPageClient
      apartment={106}
      title="Wohnung 106"
      subtitle="Nichtraucher · Allergiefreundlich · 70 qm · 4. Etage mit Fahrstuhl"
      floorPlanSrc="/images/106/wohnzimmer-01.png"
      floorPlanAlt="Wohnzimmer Wohnung 106"
      rooms={rooms}
      otherAptHref="/fewo-105"
      otherAptLabel="Wohnung 105"
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
            Die <strong className="text-foreground">70 qm</strong> teilen sich
            auf in ein Wohnzimmer mit Kochnische und einer zusätzlichen
            Schlafnische, ein Schlafzimmer mit Doppelbett, Duschbad, Flur,
            Abstellraum und einen{" "}
            <strong className="text-foreground">
              9&nbsp;m langen, 18&nbsp;qm großen überdachten Balkon
            </strong>{" "}
            zum See (Loggia).
          </p>
          <p>
            Die Wohnung ist komplett ausgestattet. Sollte etwas fehlen, sorge
            ich gerne für Abhilfe.
          </p>
          <p>Es steht Ihnen ein eigener Fahrradraum zur Verfügung.</p>
        </>
      }
    />
  );
}

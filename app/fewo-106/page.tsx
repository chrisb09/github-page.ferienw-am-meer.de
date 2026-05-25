import type { Metadata } from "next";
import { ApartmentPageClient } from "@/components/apartment-page-client";

export const metadata: Metadata = {
  title: "Ferienwohnung 106 – Am Meer Bad Zwischenahn",
  description:
    "70 qm Ferienwohnung 106 mit 18 qm Loggia, direkt am Zwischenahner Meer.",
};

const rooms = [
  { href: "/fewo-106", label: "Übersicht" },
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
      subtitle="Nichtraucher · Allergikerfreundlich · 70 qm · 4. Etage mit Fahrstuhl"
      floorPlanSrc="/images/106/grundriss.webp"
      floorPlanAlt="Grundriss Wohnung 106"
      rooms={rooms}
      otherAptHref="/fewo-105"
      otherAptLabel="Wohnung 105"
      description={
        <>
          <p>
            Die <strong className="text-foreground">70 qm</strong> große Wohnung liegt in der 4. Etage und
            ist barrierefrei mit dem Fahrstuhl erreichbar.
          </p>
          <p>
            Sie bietet ein Wohnzimmer mit Kochnische und zusätzlicher Schlafnische,
            ein Schlafzimmer mit Doppelbett, Duschbad und einen Abstellraum.

          </p>
          <p>
            Besonderes Highlight ist die <strong className="text-foreground">18 qm große Loggia</strong> zum See, 
            die Ihnen einen traumhaften Ausblick bietet.
          </p>
          <p>
            Die Wohnung ist komplett ausgestattet; ein eigener Fahrradraum steht Ihnen ebenfalls zur Verfügung.
          </p>
        </>
      }
    />
  );
}

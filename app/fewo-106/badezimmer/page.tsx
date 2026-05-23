import type { Metadata } from "next";
import { RoomPage } from "@/components/room-page";

export const metadata: Metadata = {
  title: "Badezimmer – Ferienwohnung 106 Am Meer",
  description: "Das Badezimmer der Ferienwohnung 106 mit Dusche und allem Komfort.",
};

export default function Badezimmer106Page() {
  return (
    <RoomPage
      apartment={106}
      roomSlug="badezimmer"
      roomLabel="Badezimmer"
      description={
        <>
          <p>
            Das Badezimmer ist ausgestattet mit Dusche und Handtüchern.
          </p>
          <p>
            Außerdem stehen Ihnen Fön und ein Bügeleisen zur Verfügung.
          </p>
        </>
      }
      images={[
        { src: "/images/106/badezimmer.webp", alt: "Badezimmer Ferienwohnung 106 mit Dusche" },
      ]}
    />
  );
}

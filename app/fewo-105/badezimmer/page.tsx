import type { Metadata } from "next";
import { RoomPage } from "@/components/room-page";

export const metadata: Metadata = {
  title: "Badezimmer – Ferienwohnung 105 Am Meer",
  description: "Das Badezimmer der Ferienwohnung 105 mit Dusche.",
};

export default function Badezimmer105Page() {
  return (
    <RoomPage
      apartment={105}
      roomSlug="badezimmer"
      roomLabel="Badezimmer"
      description={
        <>
          <p>
            Das Badezimmer ist mit Dusche und frischen Handtüchern ausgestattet.
          </p>
          <p>
            Außerdem stehen Ihnen Fön und ein Bügeleisen zur Verfügung.
          </p>
        </>
      }
      images={[
        { src: "/images/105/badezimmer-01.jpg", alt: "Badezimmer Ferienwohnung 105 mit Dusche" },
      ]}
    />
  );
}

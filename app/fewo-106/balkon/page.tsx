import type { Metadata } from "next";
import { RoomPage } from "@/components/room-page";

export const metadata: Metadata = {
  title: "Balkon / Loggia – Ferienwohnung 106 Am Meer",
  description: "9 m langer überdachter Balkon der Ferienwohnung 106 mit direktem Blick auf den Zwischenahner See.",
};

export default function Balkon106Page() {
  return (
    <RoomPage
      apartment={106}
      roomSlug="balkon"
      roomLabel="Balkon / Loggia"
      description={
        <>
          <p>
            Begeistert sein werden Sie vom 9&nbsp;m langen überdachten Balkon. Können Sie ihn
            doch nutzen bei Regen (trocken sitzen), wie auch bei Sonnenschein (angenehm kühl,
            da schattige Nutzung möglich).
          </p>
          <p>
            Die Liegestühle laden zum kleinen Schläfchen ein und die Sitzecke ermöglicht Ihnen
            das Essen auf dem Balkon.
          </p>
          <p>
            Der direkte Blick auf den See mit seinen Segelbooten, Schwänen und Enten macht
            jeden Morgen zum Erlebnis.
          </p>
        </>
      }
      images={[
        { src: "/images/106/balkon-chairs.png", alt: "Überdachter Balkon Ferienwohnung 106 – Sitzbereich" },
        { src: "/images/106/balkon-view-01.png", alt: "Ausblick vom Balkon der Wohnung 106 auf den Steg" },
        { src: "/images/106/balkon-view-02.png", alt: "Panoramablick über den Zwischenahner See von Wohnung 106" },
      ]}
    />
  );
}

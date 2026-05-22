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
        { src: "/Balkon_106_files/P2200062-filtered.jpg", alt: "Überdachter Balkon Ferienwohnung 106 mit Seeblick" },
        { src: "/Balkon_106_files/19.jpg", alt: "Balkon Ferienwohnung 106 – Sitzecke" },
      ]}
    />
  );
}

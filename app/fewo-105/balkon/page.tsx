import type { Metadata } from "next";
import { RoomPage } from "@/components/room-page";

export const metadata: Metadata = {
  title: "Balkon – Ferienwohnung 105 Am Meer",
  description: "6 m langer überdachter Balkon der Ferienwohnung 105 mit direktem Blick auf den Zwischenahner See.",
};

export default function Balkon105Page() {
  return (
    <RoomPage
      apartment={105}
      roomSlug="balkon"
      roomLabel="Balkon"
      description={
        <>
          <p>
            Der 6&nbsp;m lange überdachte Balkon (Loggia) bietet Ihnen einen wunderbaren Blick
            auf den Zwischenahner See.
          </p>
          <p>
            Sie können ihn bei Regen trocken genießen und bei Sonnenschein sitzt man angenehm
            im Schatten.
          </p>
          <p>
            Die Sitzgelegenheiten laden zum Verweilen und Beobachten des Seelebens ein –
            Segelboote, Schwäne und Enten gehören zum täglichen Panorama.
          </p>
        </>
      }
      images={[
        { src: "/Balkon_105_files/19.jpg", alt: "Balkon Ferienwohnung 105 – Seeblick" },
        { src: "/Balkon_105_files/16.jpg", alt: "Balkon Ferienwohnung 105 – Sitzbereich" },
      ]}
    />
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ferienwohnung 106 – Am Meer Bad Zwischenahn",
  description:
    "70 qm Ferienwohnung 106 mit 18 qm Loggia, 4-Sterne-Klassifizierung, direkt am Zwischenahner Meer.",
};

const rooms = [
  { href: "/fewo-106/wohnzimmer", label: "Wohnzimmer" },
  { href: "/fewo-106/balkon", label: "Balkon / Loggia" },
  { href: "/fewo-106/schlafzimmer", label: "Schlafzimmer" },
  { href: "/fewo-106/badezimmer", label: "Badezimmer" },
];

export default function Fewo106Page() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        <nav className="text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground transition-colors">
            Willkommen
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Fewo 106</span>
        </nav>

        <div className="flex flex-wrap items-baseline gap-3 mb-2">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
            Wohnung 106
          </h1>
          <span className="text-accent font-medium text-sm">4 Sterne</span>
        </div>
        <p className="text-muted-foreground text-sm mb-8">
          Nichtraucher &middot; Allergiefreundlich &middot; 70 qm &middot; 4. Etage mit Fahrstuhl
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded overflow-hidden shadow-md">
            <Image
              src="/Fewo_106_files/shapeimage_4.jpg"
              alt="Grundriss und Ansicht Ferienwohnung 106"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Description */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
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

            <div className="pt-4">
              <Link
                href="/kontakt"
                className="inline-block bg-primary text-primary-foreground px-5 py-2.5 rounded text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Anfragen &amp; Preise
              </Link>
            </div>
          </div>
        </div>

        {/* Room nav */}
        <div className="mt-12">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Zimmer &amp; Räume
          </h2>
          <div className="flex flex-wrap gap-3">
            {rooms.map((room) => (
              <Link
                key={room.href}
                href={room.href}
                className="px-4 py-2 border border-border rounded text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {room.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Switch apartment */}
        <div className="mt-10 pt-8 border-t border-border flex justify-between items-center">
          <p className="text-sm text-muted-foreground">Auch interessant:</p>
          <Link
            href="/fewo-105"
            className="text-sm text-primary font-medium hover:underline"
          >
            Wohnung 105 ansehen &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}

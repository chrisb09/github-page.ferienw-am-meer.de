import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
    <>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        <nav className="text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground transition-colors">
            Willkommen
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Fewo 105</span>
        </nav>

        <div className="flex flex-wrap items-baseline gap-3 mb-2">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
            Wohnung 105
          </h1>
        </div>
        <p className="text-muted-foreground text-sm mb-8">
          Nichtraucher &middot; Allergiefreundlich &middot; 50 qm &middot; 4. Etage mit Fahrstuhl
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Floor plan */}
          <div className="rounded overflow-hidden shadow-md bg-white p-4 flex items-center justify-center">
            <Image
              src="/images/105/grundriss.svg"
              alt="Grundriss Ferienwohnung 105"
              width={300}
              height={400}
              className="w-full max-w-sm h-auto"
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
            href="/fewo-106"
            className="text-sm text-primary font-medium hover:underline"
          >
            Wohnung 106 ansehen &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}

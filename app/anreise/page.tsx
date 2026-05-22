import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Train, Car } from "lucide-react";

export const metadata: Metadata = {
  title: "Anreise – Ferienwohnungen Am Meer",
  description: "Anfahrtsbeschreibung zu den Ferienwohnungen Am Meer in Bad Zwischenahn – mit Bahn oder PKW.",
};

export default function AnreisePage() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        <nav className="text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground transition-colors">Willkommen</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Anreise</span>
        </nav>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">Anreise</h1>
        <p className="text-muted-foreground mb-8">So finden Sie uns in Bad Zwischenahn</p>
      </section>

      {/* Map image */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-10">
        <div className="relative aspect-[16/7] rounded overflow-hidden shadow-md">
          <Image
            src="/Anreise_files/011.jpg"
            alt="Karte Bad Zwischenahn mit Lage der Ferienwohnungen Am Meer"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-xs text-muted-foreground text-center mt-2">
          Copyright: Kurverwaltung Bad Zwischenahn
        </p>
      </section>

      {/* Directions */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Train */}
          <div className="bg-muted border border-border rounded p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded">
                <Train size={20} className="text-primary" />
              </div>
              <h2 className="font-serif text-xl font-semibold text-foreground">Mit der Bahn</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Anreise zum Bahnhof <strong className="text-foreground">Bad Zwischenahn</strong>.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                <span>Dann mit dem Taxi zur Straße <strong className="text-foreground">Am Delf 37</strong>.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                <span>
                  Oder zu Fuß: Vom Bahnhof links in die Wilhelmstraße bis zum Kaufhaus Ceka,
                  dort rechts in die Mühlenstraße bis zu den Gaststätten „Sofra" und
                  „Pfeffermühle", dann links in die Lange Straße. Nach Querung der Aue rechts
                  in den Fußweg oder in die Straße „Am Delf". Nach ca. 600 m erreichen Sie das Haus.
                </span>
              </li>
            </ul>
          </div>

          {/* Car */}
          <div className="bg-muted border border-border rounded p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded">
                <Car size={20} className="text-primary" />
              </div>
              <h2 className="font-serif text-xl font-semibold text-foreground">Mit dem PKW</h2>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground mb-1">Aus Bremen / Osnabrück:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                    <span>Am AD Oldenburg-West (Ausfahrt 11) auf die A28 Richtung Emden/Leer, dann Ausfahrt 9 „Neuenkruge" und rechts Richtung Bad Zwischenahn.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                    <span>In Bad Zwischenahn der Hauptverkehrsstraße folgen, Bahnhof rechts lassen, an der Ampel rechts in die Mühlenstraße, erste Straße links (Lange Straße), erste Straße rechts (Am Delf). Nach ca. 600 m erreichen Sie das Haus.</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-foreground mb-1">Aus Emden / Leer:</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                    <span>A28 Richtung Oldenburg, Ausfahrt 7 „Zwischenahner Meer", der Straße ca. 6 km folgen bis zum Stoppschild.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                    <span>Links abbiegen Richtung Bad Zwischenahn, an der 2. Ampel links in die „Eyhauser Allee", dann erste Straße links (Am Delf). Nach ca. 600 m erreichen Sie das Haus.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Address box */}
        <div className="mt-8 p-5 border border-border rounded bg-background flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div>
            <p className="font-medium text-foreground">Adresse der Wohnungen</p>
            <p className="text-muted-foreground text-sm">Fewo „Am Meer" &middot; Am Delf 37 &middot; 26160 Bad Zwischenahn</p>
          </div>
          <a
            href="https://www.google.com/maps/search/Am+Delf+37+Bad+Zwischenahn"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm text-primary font-medium hover:underline"
          >
            In Google Maps öffnen &rarr;
          </a>
        </div>
      </section>
    </>
  );
}

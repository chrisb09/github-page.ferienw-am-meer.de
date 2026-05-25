"use client";

import { useState } from "react";
import { MapPin, Train, Car } from "lucide-react";

export default function AnreisePage() {
  const [mapActive, setMapActive] = useState(false);

  return (
    <>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">Anreise</h1>
        <p className="text-muted-foreground mb-8">So finden Sie uns in Bad Zwischenahn</p>
      </section>

      {/* Map */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-10">
        <div className="relative rounded overflow-hidden shadow-md border border-border bg-muted flex items-center justify-center text-center p-6" style={{ height: "420px" }}>
          {!mapActive ? (
            <div className="max-w-md space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={32} />
              </div>
              <h2 className="text-lg font-serif font-semibold text-foreground">Google Maps laden?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Um Ihre Privatsphäre zu schützen, werden Karten von Google Maps erst geladen, wenn Sie auf den Button klicken. 
                Dabei werden Daten (u.a. Ihre IP-Adresse) an Google übertragen.
              </p>
              <button
                onClick={() => setMapActive(true)}
                className="bg-primary text-primary-foreground px-6 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Karte aktivieren
              </button>
              <p className="text-[10px] text-muted-foreground">
                Weitere Informationen finden Sie in unserer{" "}
                <a href="/datenschutz" className="underline">Datenschutzerklärung</a>.
              </p>
            </div>
          ) : (
            <iframe
              title="Karte: Ferienwohnungen Am Meer, Am Delf 37, 26160 Bad Zwischenahn"
              src="https://maps.google.com/maps?q=Am%20Delf%2037,%2026160%20Bad%20Zwischenahn&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          )}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-2">
          Größere Karte anzeigen in{" "}
          <a
            href="https://www.google.com/maps/search/Am+Delf+37+Bad+Zwischenahn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors underline"
          >
            Google Maps
          </a>
        </p>
      </section>

      {/* Directions */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Train */}
          <div className="bg-muted border border-border rounded p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Train className="text-primary" size={24} />
              </div>
              <h2 className="font-serif text-xl font-semibold text-foreground">Mit der Bahn</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vom Bahnhof Bad Zwischenahn erreichen Sie uns in ca. 15 Gehminuten oder in wenigen Minuten mit dem Taxi. 
              Der Weg führt Sie direkt durch das gemütliche Ortszentrum von Bad Zwischenahn.
            </p>
          </div>

          {/* Car */}
          <div className="bg-muted border border-border rounded p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Car className="text-primary" size={24} />
              </div>
              <h2 className="font-serif text-xl font-semibold text-foreground">Mit dem Auto</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nutzen Sie die Autobahn A28 bis zur Abfahrt Bad Zwischenahn. Folgen Sie der Beschilderung Richtung Zentrum. 
              Kostenlose Parkmöglichkeiten befinden sich direkt an der Wohnanlage.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

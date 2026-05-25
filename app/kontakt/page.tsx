import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt & Preise – Ferienwohnungen Am Meer",
  description:
    "Kontaktdaten und Preisinfos der Ferienwohnungen Am Meer in Bad Zwischenahn. Ellen Günther, Am Delf 27a.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Kontakt &amp; Preise
        </h1>
        <p className="text-muted-foreground mb-10">Wir freuen uns auf Ihre Anfrage</p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Contact card */}
          <div className="bg-muted border border-border rounded p-6 space-y-5 h-full">
            <h2 className="font-serif text-xl font-semibold text-foreground">Kontakt</h2>

            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <div className="text-muted-foreground">
                  <p className="font-medium text-foreground">Fewo &bdquo;Am Meer&ldquo;</p>
                  <p>Ellen Günther</p>
                  <p>Am Delf 27a</p>
                  <p>26160 Bad Zwischenahn</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                <div className="text-muted-foreground space-y-0.5">
                  <p>
                    <a href="tel:+494403583070" className="hover:text-primary transition-colors">
                      04403 58307
                    </a>
                  </p>
                  <p>
                    <a href="tel:+4901714492282" className="hover:text-primary transition-colors">
                      0171 4492282 (Mobil)
                    </a>
                  </p>
                  <p>Fax: 04403 949122</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                <a
                  href="mailto:info@ferienw-am-meer.de?subject=Kontakt über Homepage"
                  className="text-primary hover:underline text-sm"
                >
                  info@ferienw-am-meer.de
                </a>
              </div>
            </div>
          </div>

          {/* Pricing & conditions */}
          <div className="bg-muted border border-border rounded p-6 space-y-5 h-full">
            <h2 className="font-serif text-xl font-semibold text-foreground">Preise &amp; Konditionen</h2>

            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                Aktuelle Preise können Sie auf der Seite der{" "}
                <a
                  href="https://www.bad-zwischenahn-touristik.de/hotel/ferienwohnung-am-meer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary inline-flex items-center gap-1 hover:underline"
                >
                  Kurverwaltung Bad Zwischenahn
                  <ExternalLink size={12} />
                </a>{" "}
                abrufen.
              </p>

              <ul className="space-y-2">
                {[
                  "Mietzeitraum: Samstag bis Samstag oder nach Absprache",
                  "Endreinigung, Bettwäsche, Handtücher und Nebenkosten inklusive",
                  "Die Wohnungen sind allergikerfreundlich – keine Vermietung an Gäste mit Hunden",
                  "Nicht enthalten ist die Kurtaxe",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Postal address for forwarding */}
        <div className="mt-8 p-5 border border-border rounded bg-background">
          <h3 className="font-medium text-foreground mb-1 text-sm">
            Adresse für Ihre Nachsendepost / Zeitung:
          </h3>
          <p className="text-sm text-muted-foreground">
            Fewo &bdquo;Am Meer&ldquo; &middot; Wohnung 105 bzw. 106 &middot; Am Delf 37 &middot; 26160 Bad Zwischenahn
          </p>
        </div>
      </section>
    </>
  );
}

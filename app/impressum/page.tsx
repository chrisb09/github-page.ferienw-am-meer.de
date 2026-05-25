import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – Ferienwohnungen Am Meer",
};

export default function ImpressumPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-serif text-3xl font-bold text-foreground mb-8">Impressum</h1>

      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-medium text-foreground mb-1">Angaben gemäß § 5 TMG</h2>
          <p>Ellen Günther</p>
          <p>Am Delf 27a</p>
          <p>26160 Bad Zwischenahn</p>
        </div>

        <div>
          <h2 className="font-medium text-foreground mb-1">Kontakt</h2>
          <p>Telefon: 04403 58307</p>
          <p>
            E-Mail:{" "}
            <a href="mailto:info@ferienw-am-meer.de" className="text-primary hover:underline">
              info@ferienw-am-meer.de
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-medium text-foreground mb-1">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
            den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
            oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-foreground mb-1">Gestaltung und Entwicklung</h2>
          <p>
            <a 
              href="https://christian-f-brinkmann.de" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline"
            >
              Christian F. Brinkmann
            </a>
            {" "}&middot;{" "}
            <a 
              href="https://github.com/chrisb09" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { Phone, Mail, MapPin, ExternalLink, Calendar, CheckCircle2, Ban, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt & Preise – Ferienwohnungen Am Meer",
  description:
    "Preise, Saisonzeiten und Kontaktdaten der Ferienwohnungen Am Meer in Bad Zwischenahn. Ellen Günther, Am Delf 27a.",
};

const pricingData = [
  {
    season: "Hauptsaison",
    period: "April – Oktober",
    fewo105: "74,00 €",
    fewo106: "84,00 €",
  },
  {
    season: "Nebensaison",
    period: "November – März",
    fewo105: "69,00 €",
    fewo106: "79,00 €",
  },
];

export default function KontaktPage() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Kontakt &amp; Preise
        </h1>
        <p className="text-muted-foreground mb-10 text-balance">
          Hier finden Sie Informationen zu unseren Preisen und wie Sie uns erreichen können.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Pricing Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Price Table Card */}
            <div className="bg-background border border-border rounded-lg shadow-sm overflow-hidden">
              <div className="bg-muted px-6 py-4 border-b border-border flex items-center gap-2">
                <Calendar className="text-primary" size={20} />
                <h2 className="font-serif text-xl font-semibold text-foreground">Übernachtungspreise</h2>
              </div>

              {/* Mobile View: Stacked Cards */}
              <div className="md:hidden divide-y border-border">
                {pricingData.map((row) => (
                  <div key={row.season} className="p-6 space-y-4">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-medium text-foreground">{row.season}</h3>
                      <span className="text-xs text-muted-foreground">{row.period}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="bg-muted/30 p-3 rounded text-center">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Fewo 105</p>
                        <p className="text-lg font-semibold text-foreground">{row.fewo105}</p>
                      </div>
                      <div className="bg-muted/30 p-3 rounded text-center">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Fewo 106</p>
                        <p className="text-lg font-semibold text-foreground">{row.fewo106}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop View: Traditional Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-muted/30 text-muted-foreground font-medium border-b border-border">
                      <th className="px-6 py-3">Saison</th>
                      <th className="px-6 py-3">Zeitraum</th>
                      <th className="px-6 py-3 text-right">Fewo 105</th>
                      <th className="px-6 py-3 text-right">Fewo 106</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-border text-foreground">
                    {pricingData.map((row) => (
                      <tr key={row.season}>
                        <td className="px-6 py-4 font-medium">{row.season}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.period}</td>
                        <td className="px-6 py-4 text-right">{row.fewo105}</td>
                        <td className="px-6 py-4 text-right">{row.fewo106}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-6 py-3 bg-muted/20 text-[11px] text-muted-foreground flex justify-between border-t border-border/50">
                <span>* Alle Angaben ohne Gewähr</span>
                <span className="italic">Stand: Mai 2026</span>
              </div>
              <div className="p-6 bg-muted/10 border-t border-border/50">
                <div className="bg-background p-4 rounded-md border border-border/50">
                  <p className="text-sm text-foreground font-medium flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={16} />
                    Mietzeitraum: Samstag bis Samstag oder nach Absprache
                  </p>
                </div>
              </div>
            </div>

            {/* Features & Policies */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Inklusive Leistungen</h3>
                <ul className="space-y-3">
                  {[
                    "Endreinigung der Wohnung",
                    "Bettwäsche & Handtücher",
                    "Nebenkosten (Strom, Wasser, Heizung)",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="text-primary shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Hinweise</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm font-medium text-accent">
                    <Ban className="shrink-0" size={18} />
                    <span>Die Wohnungen sind allergiefreundlich, daher keine Vermietung an Gäste mit Hunden.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="text-primary shrink-0" size={18} />
                    <span>Nicht enthalten: Kurtaxe (Zahlung vor Ort)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* External Info */}
            <div className="p-5 rounded-lg border border-primary/20 bg-primary/5 flex items-start gap-4">
              <Info className="text-primary shrink-0 mt-1" size={24} />
              <div>
                <p className="text-sm text-foreground font-semibold">Verbindliche Preise &amp; Online-Buchung</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1.5">
                  Bitte beachten Sie, dass die hier angegebenen Preise lediglich der Orientierung dienen. 
                  Die <span className="font-semibold text-foreground">verbindlichen, tagesaktuellen Preise</span> sowie die Verfügbarkeit finden Sie ausschließlich auf der offiziellen Buchungsseite der{" "}
                  <a
                    href="https://www.bad-zwischenahn-touristik.de/hotel/ferienwohnung-am-meer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline font-medium"
                  >
                    Kurverwaltung Bad Zwischenahn
                  </a>.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <div className="bg-muted border border-border rounded-lg p-6 shadow-sm sticky top-24">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-6">Kontakt</h2>
              
              <div className="space-y-6 text-sm">
                <div className="flex gap-4">
                  <MapPin className="text-primary shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-foreground text-base">Ellen Günther</p>
                    <p className="text-muted-foreground">Am Delf 27a</p>
                    <p className="text-muted-foreground">26160 Bad Zwischenahn</p>
                  </div>
                </div>

                <div className="flex gap-4 border-t border-border/50 pt-6">
                  <Phone className="text-primary shrink-0" size={20} />
                  <div className="space-y-2">
                    <a href="tel:+49440358307" className="block text-primary hover:underline font-medium text-base">
                      04403 58307
                    </a>
                    <a href="tel:+491714492282" className="block text-primary hover:underline font-medium">
                      0171 4492282 (Mobil)
                    </a>
                    <p className="text-muted-foreground text-xs">Fax: 04403 949122</p>
                  </div>
                </div>

                <div className="flex gap-4 border-t border-border/50 pt-6">
                  <Mail className="text-primary shrink-0" size={20} />
                  <div>
                    <a
                      href="mailto:info@ferienw-am-meer.de"
                      className="text-primary hover:underline font-medium break-all text-base"
                    >
                      info@ferienw-am-meer.de
                    </a>
                  </div>
                </div>
              </div>

              {/* Postal address for forwarding */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <h3 className="font-medium text-foreground mb-2 text-xs uppercase tracking-wider">
                  Nachsendepost &amp; Zeitungen:
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Fewo &bdquo;Am Meer&ldquo;<br />
                  Wohnung 105 bzw. 106<br />
                  Am Delf 37<br />
                  26160 Bad Zwischenahn
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

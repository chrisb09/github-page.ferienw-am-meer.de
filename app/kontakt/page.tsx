import type { Metadata } from "next";
import { Phone, Mail, MapPin, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt & Preise – Ferienwohnungen Am Meer",
  description:
    "Preise, Saisonzeiten und Kontaktdaten der Ferienwohnungen Am Meer in Bad Zwischenahn. Ellen Günther, Am Delf 27a.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Kontakt &amp; Preise
        </h1>
        <p className="text-muted-foreground mb-10 text-balance">
          Hier finden Sie Informationen zu unseren Preisen, Saisonzeiten und wie Sie uns erreichen können.
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
                <h2 className="font-serif text-xl font-semibold text-foreground">Preise pro Übernachtung</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-muted/30 text-muted-foreground font-medium border-b border-border">
                      <th className="px-6 py-3">Saisonzeit</th>
                      <th className="px-6 py-3">Zeitraum</th>
                      <th className="px-6 py-3 text-right">Fewo 105</th>
                      <th className="px-6 py-3 text-right">Fewo 106</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-border">
                    <tr>
                      <td className="px-6 py-4 font-medium text-foreground">Hauptsaison</td>
                      <td className="px-6 py-4 text-muted-foreground">Juli &amp; August</td>
                      <td className="px-6 py-4 text-right text-foreground">85,00 &euro;</td>
                      <td className="px-6 py-4 text-right text-foreground">110,00 &euro;</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-foreground">Zwischensaison</td>
                      <td className="px-6 py-4 text-muted-foreground">Mai, Juni, Sept. &amp; Feiertage</td>
                      <td className="px-6 py-4 text-right text-foreground">65,00 &euro;</td>
                      <td className="px-6 py-4 text-right text-foreground">85,00 &euro;</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-foreground">Nebensaison</td>
                      <td className="px-6 py-4 text-muted-foreground">Restliche Zeit</td>
                      <td className="px-6 py-4 text-right text-foreground">45,00 &euro;</td>
                      <td className="px-6 py-4 text-right text-foreground">65,00 &euro;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 bg-muted/20 text-xs text-muted-foreground italic">
                Preise gelten ab einer Mindestmietzeit von 7 Tagen (Saisonspezifisch ggf. ab 3-5 Tagen möglich).
              </div>
            </div>

            {/* Conditions Card */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Inklusive Leistungen</h3>
                <ul className="space-y-3">
                  {[
                    "Energiekosten (Strom, Wasser, Heizung)",
                    "Endreinigung der Wohnung",
                    "Pkw-Stellplatz direkt am Haus",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="text-primary shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background border border-border rounded-lg p-6 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Optionale Leistungen</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="text-primary shrink-0" size={18} />
                    <span>Wäschepaket (Bettwäsche &amp; Handtücher): 15,00 &euro; pro Person</span>
                  </li>
                  <li className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="text-primary shrink-0" size={18} />
                    <span>Hunde: Auf Anfrage (Fewo 105)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* External Info */}
            <div className="p-4 rounded-lg border border-primary/20 bg-primary/5 flex items-start gap-4">
              <ExternalLink className="text-primary shrink-0 mt-1" size={20} />
              <div>
                <p className="text-sm text-foreground font-medium">Kurverwaltung &amp; Buchung</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  Die Verfügbarkeit und eine direkte Buchungsmöglichkeit finden Sie auch über die{" "}
                  <a
                    href="https://www.bad-zwischenahn-touristik.de/hotel/ferienwohnung-am-meer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline font-medium"
                  >
                    Touristik-Information Bad Zwischenahn
                  </a>. Bitte beachten Sie, dass vor Ort eine Kurtaxe erhoben wird.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <div className="bg-muted border border-border rounded-lg p-6 shadow-sm sticky top-24">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-6">Buchungsanfrage</h2>
              
              <div className="space-y-6 text-sm">
                <div className="flex gap-4">
                  <MapPin className="text-primary shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Vermieterin</p>
                    <p className="text-muted-foreground">Ellen Günther</p>
                    <p className="text-muted-foreground">Am Delf 27a</p>
                    <p className="text-muted-foreground">26160 Bad Zwischenahn</p>
                  </div>
                </div>

                <div className="flex gap-4 border-t border-border/50 pt-6">
                  <Phone className="text-primary shrink-0" size={20} />
                  <div className="space-y-2">
                    <p className="font-medium text-foreground">Telefonisch erreichbar</p>
                    <a href="tel:+49440358307" className="block text-primary hover:underline font-medium">
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
                    <p className="font-medium text-foreground">Per E-Mail</p>
                    <a
                      href="mailto:info@ferienw-am-meer.de?subject=Buchungsanfrage Ferienwohnung"
                      className="text-primary hover:underline font-medium break-all"
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

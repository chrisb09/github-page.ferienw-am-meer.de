import type { Metadata } from "next";
import { Phone, Mail, MapPin, ExternalLink, Calendar, CheckCircle2, Ban } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt & Preise – Ferienwohnungen Am Meer",
  description:
    "Preise und Kontaktdaten der Ferienwohnungen Am Meer in Bad Zwischenahn. Ellen Günther, Am Delf 27a.",
};

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
            
            {/* Price Info Card */}
            <div className="bg-background border border-border rounded-lg shadow-sm overflow-hidden">
              <div className="bg-muted px-6 py-4 border-b border-border flex items-center gap-2">
                <Calendar className="text-primary" size={20} />
                <h2 className="font-serif text-xl font-semibold text-foreground">Preise &amp; Mietzeitraum</h2>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Der Preis pro Übernachtung beträgt je nach Saison und Wohnungsgröße zwischen 
                  <span className="text-foreground font-semibold"> 45,00 &euro; und 110,00 &euro;</span>.
                </p>
                <div className="bg-muted/30 p-4 rounded-md border border-border/50">
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
                  <li className="flex gap-3 text-sm text-muted-foreground font-medium text-accent">
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
            <div className="p-4 rounded-lg border border-primary/20 bg-primary/5 flex items-start gap-4">
              <ExternalLink className="text-primary shrink-0 mt-1" size={20} />
              <div>
                <p className="text-sm text-foreground font-medium">Verfügbarkeit &amp; Online-Buchung</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  Die tagesaktuellen Preise und die Verfügbarkeit finden Sie auf der offiziellen Buchungsseite der{" "}
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

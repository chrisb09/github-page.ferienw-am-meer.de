import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Ferienwohnungen Am Meer",
};

export default function DatenschutzPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-serif text-3xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>

      <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-medium text-foreground mb-2 text-base">1. Datenschutz auf einen Blick</h2>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-foreground mb-2 text-base">2. Verantwortliche Stelle</h2>
          <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <div className="mt-2 text-foreground">
            <p>Ellen Günther</p>
            <p>Am Delf 27a</p>
            <p>26160 Bad Zwischenahn</p>
            <p>E-Mail: info@ferienw-am-meer.de</p>
          </div>
        </div>

        <div>
          <h2 className="font-medium text-foreground mb-2 text-base">3. Datenerfassung auf dieser Website (Hosting)</h2>
          <p>
            Unsere Website wird bei <strong>GitHub Pages</strong> gehostet (GitHub Inc., 88 Colin P. Kelly Jr. St., San Francisco, CA 94107, USA).
          </p>
          <p className="mt-2">
            Wenn Sie unsere Website besuchen, erfasst GitHub automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an GitHub übermittelt. Dies sind i.d.R.:
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL (die zuvor besuchte Seite)</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p className="mt-2">
            Die Verwendung von GitHub Pages erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Wir haben keinen direkten Zugriff auf diese Daten und können diese nicht löschen oder verändern; die Verwaltung dieser Daten obliegt GitHub gemäß deren Datenschutzrichtlinien.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-foreground mb-2 text-base">4. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-foreground mb-2 text-base">5. Analyse-Tools und Tools von Drittanbietern</h2>
          <p>
            Wir verwenden auf dieser Website keine Analyse-Tools (wie Google Analytics) und keine Tracking-Cookies.
          </p>
        </div>
      </div>
    </section>
  );
}

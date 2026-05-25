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
            <p>Ellen Bothe // Ellen Günther</p>
            <p>Am Delf 27a</p>
            <p>26160 Bad Zwischenahn</p>
            <p>
              E-Mail:{" "}
              <a href="mailto:Ellenbothe@gmx.net" className="text-primary hover:underline">Ellenbothe@gmx.net</a>
              {" "}&middot;{" "}
              <a href="mailto:Ellen.Guenther@gmx.net" className="text-primary hover:underline">Ellen.Guenther@gmx.net</a>
            </p>
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
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten. 
          </p>
          <p className="mt-2">
            Da wir selbst keine personenbezogenen Daten speichern und lediglich die Infrastruktur von <strong>GitHub Pages</strong> nutzen, beziehen sich diese Rechte in Bezug auf die Server-Log-Dateien (z.B. IP-Adressen) auf die Datenverarbeitung durch GitHub. Wir haben keinen direkten Zugriff auf diese Protokolle und können diese weder einsehen, noch verändern oder löschen. Für die Ausübung Ihrer Rechte bezüglich der Server-Daten müssten Sie sich daher direkt an GitHub wenden.
          </p>
          <p className="mt-2">
            Sollten Sie uns per E-Mail oder Telefon kontaktieren (siehe Impressum), verarbeiten wir Ihre dort freiwillig mitgeteilten Daten nur zum Zweck der Bearbeitung Ihrer Anfrage.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-foreground mb-2 text-base">5. Analyse-Tools und Tools von Drittanbietern</h2>
          <p>
            Wir verwenden auf dieser Website keine Analyse-Tools (wie Google Analytics) und keine Tracking-Cookies.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-foreground mb-2 text-base">6. Google Maps</h2>
          <p>
            Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
          </p>
          <p className="mt-2">
            Um den Datenschutz auf unserer Website zu gewährleisten, ist Google Maps deaktiviert, wenn Sie unsere Website das erste Mal betreten. Eine direkte Verbindung zu den Servern von Google wird erst aufgebaut, wenn Sie Google Maps selbstständig aktivieren (Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO). Auf diese Weise wird verhindert, dass Ihre Daten schon beim ersten Betreten der Seite an Google übertragen werden.
          </p>
          <p className="mt-2">
            Nach der Aktivierung wird Google Maps Ihre IP-Adresse speichern. Diese wird in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Wir haben nach der Aktivierung der Karte keinen Einfluss auf diese Datenübertragung.
          </p>
          <p className="mt-2">
            Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy?hl=de</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

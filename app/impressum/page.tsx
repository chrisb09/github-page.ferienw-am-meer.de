import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Ferienwohnungen Am Meer",
};

export default function ImpressumPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-serif text-3xl font-bold text-foreground mb-8">Impressum</h1>

      <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
        {/* Contact Info */}
        <div>
          <h2 className="font-medium text-foreground mb-1 text-base underline underline-offset-4 decoration-primary/30">Angaben gemäß § 5 TMG</h2>
          <div className="text-foreground mt-2">
            <p className="font-semibold text-base">Ellen Günther</p>
            <p>Am Delf 27a</p>
            <p>26160 Bad Zwischenahn</p>
            <div className="mt-2 space-y-0.5">
                <p>Telefon: 04403 58307</p>
                <p>E-Mail: <a href="mailto:info@ferienw-am-meer.de" className="text-primary hover:underline">info@ferienw-am-meer.de</a></p>
            </div>
          </div>
        </div>

        {/* 1. Inhalt des Onlineangebotes */}
        <div>
          <h2 className="font-medium text-foreground mb-1 text-base underline underline-offset-4 decoration-primary/30">1. Inhalt des Onlineangebotes</h2>
          <p>
            Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
          </p>
          <p className="mt-2">
            Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
          </p>
        </div>

        {/* 2. Verweise und Links */}
        <div>
          <h2 className="font-medium text-foreground mb-1 text-base underline underline-offset-4 decoration-primary/30">2. Verweise und Links</h2>
          <p>
            Bei direkten oder indirekten Verweisen auf fremde Webseiten ("Hyperlinks"), die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren.
          </p>
          <p className="mt-2">
            Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der verlinkten/verknüpften Seiten hat der Autor keinerlei Einfluss. Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller verlinkten /verknüpften Seiten, die nach der Linksetzung verändert wurden. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde.
          </p>
        </div>

        {/* 3. Urheber- und Kennzeichenrecht */}
        <div>
          <h2 className="font-medium text-foreground mb-1 text-base underline underline-offset-4 decoration-primary/30">3. Urheber- und Kennzeichenrecht</h2>
          <p>
            Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zurückzugreifen.
          </p>
          <p className="mt-2">
            Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung ist nicht der Schluss zu ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind!
          </p>
          <p className="mt-2">
            Das Copyright für veröffentlichte, vom Autor selbst erstellte Objekte bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht gestattet.
          </p>
          <p className="mt-4 bg-muted/50 p-4 rounded border-l-4 border-primary/30 italic">
            Die auf dieser Website verwendeten Fotografien unterliegen dem Urheberrecht von Ellen Günther sowie beteiligten Dritten. Die digitale Aufbereitung, Restaurierung und KI-gestützte Optimierung des Bildmaterials erfolgte durch Christian F. Brinkmann.
          </p>
        </div>

        {/* 4. Rechtswirksamkeit */}
        <div>
          <h2 className="font-medium text-foreground mb-1 text-base underline underline-offset-4 decoration-primary/30">4. Rechtswirksamkeit dieses Haftungsausschlusses</h2>
          <p>
            Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
          </p>
        </div>

        {/* Development Credit */}
        <div className="pt-8 border-t border-border/50">
          <h2 className="font-medium text-foreground mb-1 text-base underline underline-offset-4 decoration-primary/30">Gestaltung und Entwicklung</h2>
          <p>
            <a 
              href="https://christian-f-brinkmann.de" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline font-medium"
            >
              Christian F. Brinkmann
            </a>
            {" "}&middot;{" "}
            <a 
              href="https://github.com/chrisb09" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline font-medium"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

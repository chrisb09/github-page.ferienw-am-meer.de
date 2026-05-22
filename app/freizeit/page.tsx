import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Freizeit – Ferienwohnungen Am Meer Bad Zwischenahn",
  description:
    "Freizeitangebote rund um die Ferienwohnungen Am Meer: Fahrradfahren, Segeln, Tennis, Schwimmen, Wellness und mehr in Bad Zwischenahn.",
};

const activities = [
  {
    title: "Fahrrad fahren",
    items: [
      { text: "Verleihstation in 5 Min. Fußweg erreichbar", href: "http://www.fahrradverleih-bad-zwischenahn.de" },
      { text: "Fahrradgemeinschaftsraum unten im Haus" },
      { text: "Reichlich Fahrradständer am Haus" },
      { text: "Der Wanderweg um den See darf befahren werden und führt direkt am Haus entlang" },
    ],
  },
  {
    title: "Segeln",
    items: [
      { text: "Liegeplatz im Hafen am Haus ist kurzzeitig mietbar" },
      { text: "Segelschule im Hafen des Hauses – Kontakte können vermittelt werden" },
      { text: "Segelbootverleih in Dreibergen" },
    ],
  },
  {
    title: "Tennis",
    items: [
      { text: "Der Tennisverein befindet sich auf der anderen Straßenseite – Gastspieler willkommen" },
      { text: "Öffentliche Tennisanlage mit Hallen- und Außenplätzen in Aschhausen", href: "http://www.tennis-und-meer.de/" },
    ],
  },
  {
    title: "Schwimmen",
    items: [
      { text: "Direkt am Haus führt eine Treppe vom Steg in den See" },
      { text: "Badepark (Freibad) in 5 Min. Fußweg erreichbar" },
      { text: "Im Ort: Wellenhallenbad mit Soleaußenbecken" },
    ],
  },
  {
    title: "Wellness",
    items: [
      { text: 'Unten im Haus bietet die \u201eWellness-Oase\u201c ein vielfältiges Verwöhnprogramm', href: "http://www.das-health-care-studio-mit-herz.de/index.php" },
      { text: 'Wellness-Welt \u201eWellness am Meer\u201c angeschlossen ans Wellenbad', href: "http://www.wellness-am-meer.de/" },
    ],
  },
  {
    title: "Kurklinik",
    items: [
      { text: "Kurklinik mit dem Rad in 10 Min. erreichbar – Wassergymnastik, Moorpackung, Wellenbad", href: "http://www.rehazentrum-am-meer.de/" },
    ],
  },
  {
    title: "Park der Gärten",
    items: [
      { text: "Nachfolge der Niedersächsischen Landesgartenschau 2002", href: "http://www.park-der-gaerten.de/index.html" },
    ],
  },
  {
    title: "Golf",
    items: [
      { text: "Der Golfclub freut sich, Sie als Gäste begrüßen zu dürfen", href: "http://www.golfclub-am-meer.de/front_content.php" },
    ],
  },
  {
    title: "Bootfahren",
    items: [
      { text: "Bootsverleih und Rundfahrten am See" },
      { text: "Tretbootverleih an der Seepromenade" },
    ],
  },
  {
    title: "Spazierengehen",
    items: [
      { text: "Im Mai und Juni ist das gesamte Ammerland ein Blütenmeer – besonders schön: Bruns Baumschulen Rhododendronpark und Rhododendronpark in Linswege" },
      { text: "Das Engelsmeer – eine Moorlandschaft" },
      { text: "Das Freilichtmuseum im Ort" },
      { text: "Der Kurpark im Ort" },
      { text: "Auch im Winter zeigt Bad Zwischenahn seine schönen Seiten" },
    ],
  },
];

export default function FreizeitPage() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        <nav className="text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground transition-colors">Willkommen</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Freizeit</span>
        </nav>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">Freizeit</h1>
        <p className="text-muted-foreground mb-10">
          Aktivitäten und Ausflugsziele rund um Bad Zwischenahn
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="bg-muted border border-border rounded p-5 space-y-3"
            >
              <h2 className="font-serif text-lg font-semibold text-foreground border-b border-border pb-2">
                {activity.title}
              </h2>
              <ul className="space-y-2">
                {activity.items.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5 shrink-0">&#8226;</span>
                    <span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {item.text}
                        </a>
                      ) : (
                        item.text
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";

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
    title: "Tennis & Padel",
    items: [
      { text: "Der Tennisverein befindet sich auf der anderen Straßenseite – Gastspieler willkommen" },
      { text: "Neu: Padel-Plätze auf der gegenüberliegenden Tennisanlage" },
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
      { text: 'Wellness-Welt „Wellness am Meer“ angeschlossen ans Wellenbad', href: "http://www.wellness-am-meer.de/" },
    ],
  },
  {
    title: "Spielbank",
    items: [
      { text: "Spielbank Bad Zwischenahn – Glücksspiel und Events im Jagdhaus Eiden", href: "https://www.merkur-spielbanken-nds.de/bad-zwischenahn/" },
    ],
  },
  {
    title: "Kurklinik",
    items: [
      { text: "Kurklinik mit dem Rad in 10 Min. erreichbar – Wassergymnastik, Moorpackung, Wellenbad", href: "http://www.rehazentrum-am-meer.de/" },
    ],
  },
  {
    title: "Gastronomie",
    items: [
      { text: "Direkt im Haus: Die „Schänke zum Wels“ bietet kühle Getränke und kleine Gerichte in gemütlicher Atmosphäre" },
      { text: "Traditionelle Spezialitäten: Ammerländer Schinken und Smoortaal" },
      { text: "Gemütliche Cafés und erstklassige Restaurants im Ortskern und am See" },
    ],
  },
  {
    title: "Einkaufen",
    items: [
      { text: "Die Flaniermeile im Ortskern lädt zum Bummeln ein" },
      { text: "Zahlreiche Fachgeschäfte und Boutiquen" },
      { text: "Saisonale Sonntagsöffnungen der Geschäfte" },
    ],
  },
  {
    title: "Kultur",
    items: [
      { text: "Das Freilichtmuseum im Ort", href: "https://www.freilichtmuseum-zwischenahn.de/" },
      { text: "Der Kurpark im Ort" },
      { text: "Park der Gärten – Nachfolge der Niedersächsischen Landesgartenschau 2002", href: "http://www.park-der-gaerten.de/index.html" },
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
    ],
  },
];

export default function FreizeitPage() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-4">
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

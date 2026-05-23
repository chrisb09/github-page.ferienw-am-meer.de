import Image from "next/image";
import Link from "next/link";
import { Waves, MapPin, Bike, Sailboat } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function WillkommenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] bg-foreground overflow-hidden">
        <Image
          src={`${basePath}/images/titelbild.png`}
          alt="Blick auf die Wohnanlage Am Delf am Zwischenahner Meer"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
        <div className="relative h-full flex flex-col justify-end max-w-5xl mx-auto px-4 sm:px-6 pb-10">
          <p className="text-primary-foreground/70 text-sm tracking-widest uppercase font-sans mb-2">
            Bad Zwischenahn &middot; Zwischenahner Meer
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary-foreground text-balance leading-tight">
            Urlaub direkt<br className="hidden sm:block" /> am Wasser
          </h1>
        </div>
      </section>

      {/* Intro text */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-4 text-balance">
              Wohnen mitten auf dem See
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In dieser Wohnanlage in Bad Zwischenahn, die in den See
              hineingebaut wurde, liegen die beiden Ferienwohnungen. Große
              Fenster bieten einen freien Blick auf den See mit seinen
              Segelbooten, den Enten, Schwänen und Haubentauchern.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Das Ortszentrum und das öffentliche Freibad erreichen Sie in
              5 Minuten. Trotzdem sind die Wohnungen ruhig gelegen, direkt
              am Wanderweg um den See.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded overflow-hidden shadow-md">
            <Image
              src={`${basePath}/images/lake-view-01.png`}
              alt="Segelboote am Zwischenahner Meer"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="bg-muted border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <p className="text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
            Frühsport gefällig? Sie können nach dem Aufstehen direkt am Haus im
            See schwimmen gehen und während des Frühstücks dem zwischenahner
            Fischer beim Leeren seiner Reusen zuschauen.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h2 className="font-serif text-2xl font-semibold text-foreground mb-8 text-center">
          Was Sie erwartet
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: <Waves size={24} className="text-primary" />,
              title: "Direkt am See",
              desc: "Treppe vom Steg in den See – schwimmen direkt ab Haus",
            },
            {
              icon: <MapPin size={24} className="text-primary" />,
              title: "Zentrale Lage",
              desc: "Ortszentrum & Freibad in 5 Minuten erreichbar",
            },
            {
              icon: <Bike size={24} className="text-primary" />,
              title: "Fahrradparadies",
              desc: "Wanderweg um den See direkt vor der Tür",
            },
            {
              icon: <Sailboat size={24} className="text-primary" />,
              title: "Wassersport",
              desc: "Liegeplatz & Segelschule im Hafen des Hauses",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 p-5 bg-background border border-border rounded shadow-sm"
            >
              {item.icon}
              <h3 className="font-medium text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Apartment cards */}
      <section className="bg-muted border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-8 text-center">
            Die Wohnungen
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                href: "/fewo-106",
                name: "Wohnung 106",
                size: "70 qm",
                detail:
                  "Wohnzimmer mit Kochnische, Schlafzimmer, Duschbad, 18 qm Loggia zum See",
              },
              {
                href: "/fewo-105",
                name: "Wohnung 105",
                size: "50 qm",
                detail:
                  "Wohnzimmer mit Küchenzeile, Schlafzimmer, Dusche, überdachter Balkon",
              },
            ].map((apt) => (
              <Link
                key={apt.href}
                href={apt.href}
                className="group flex flex-col gap-4 p-6 bg-background border border-border rounded shadow-sm hover:border-primary transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {apt.name}
                    </h3>
                    <p className="text-sm text-accent font-medium mt-0.5">Nichtraucher &middot; Allergiefreundlich</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">{apt.size}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{apt.detail}</p>
                <span className="text-primary text-sm font-medium group-hover:underline mt-auto">
                  Mehr erfahren &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Aerial photo */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="relative aspect-[16/7] rounded overflow-hidden shadow-md">
          <Image
            src={`${basePath}/images/lake-view-02.png`}
            alt="Luftbild Bad Zwischenahn mit Wohnanlage am See"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-xs text-muted-foreground text-center mt-3">
          Bad Zwischenahn &middot; Wohnanlage am Zwischenahner Meer
        </p>
      </section>
    </>
  );
}

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <div>
            <p className="font-serif text-lg font-semibold mb-1">Ferienwohnungen Am Meer</p>
            <p className="text-sm text-primary-foreground/70">Bad Zwischenahn</p>
          </div>

          <div className="text-sm text-primary-foreground/70 space-y-1">
            <p className="font-medium text-primary-foreground">Kontakt</p>
            <p>Ellen Günther</p>
            <p>Am Delf 27a, 26160 Bad Zwischenahn</p>
            <p>
              <a href="tel:+494403583070" className="hover:text-accent transition-colors">
                04403 58307
              </a>
            </p>
            <p>
              <a
                href="mailto:info@ferienw-am-meer.de"
                className="hover:text-accent transition-colors"
              >
                info@ferienw-am-meer.de
              </a>
            </p>
          </div>

          <div className="text-sm text-primary-foreground/70 space-y-1">
            <p className="font-medium text-primary-foreground">Navigation</p>
            <ul className="space-y-1">
              {[
                ["/", "Willkommen"],
                ["/fewo-106", "Fewo 106"],
                ["/fewo-105", "Fewo 105"],
                ["/anreise", "Anreise"],
                ["/freizeit", "Freizeit"],
                ["/kontakt", "Kontakt & Preise"],
                ["/impressum", "Impressum"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-accent transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-xs text-primary-foreground/40">
          <p>
            &copy; {new Date().getFullYear()} Ferienwohnungen Am Meer &middot;{" "}
            <Link href="/impressum" className="hover:text-primary-foreground/60 transition-colors">
              Impressum
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground mt-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-0.5">
            <h3 className="font-serif text-lg font-medium leading-tight">Ferienwohnungen Am Meer</h3>
            <p className="text-sm text-primary-foreground/50">Bad Zwischenahn</p>
          </div>

          <div className="text-sm text-primary-foreground/60 text-right">
            <p>Ellen Günther &middot; Am Delf 27a, 26160 Bad Zwischenahn</p>
            <p className="space-x-3">
              <a href="tel:+494403583070" className="hover:text-accent transition-colors">
                04403 58307
              </a>
              <span className="text-primary-foreground/20">|</span>
              <a
                href="mailto:info@ferienw-am-meer.de"
                className="hover:text-accent transition-colors"
              >
                info@ferienw-am-meer.de
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-4 pt-4 text-[10px] text-primary-foreground/30 flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Ferienwohnungen Am Meer</p>
          <Link href="/impressum" className="hover:text-primary-foreground/60 transition-colors uppercase tracking-widest">
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";

interface RoomImage {
  src: string;
  alt: string;
}

interface RoomPageProps {
  apartment: 106 | 105;
  roomSlug: string;
  roomLabel: string;
  description: React.ReactNode;
  images: RoomImage[];
}

const allRooms = [
  { slug: "wohnzimmer", label: "Wohnzimmer" },
  { slug: "balkon", label: "Balkon / Loggia" },
  { slug: "schlafzimmer", label: "Schlafzimmer" },
  { slug: "badezimmer", label: "Badezimmer" },
];

export function RoomPage({ apartment, roomSlug, roomLabel, description, images }: RoomPageProps) {
  const fewoSlug = `fewo-${apartment}`;
  const fewoLabel = `Wohnung ${apartment}`;

  return (
    <>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6 flex items-center gap-1 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground transition-colors">Willkommen</Link>
          <span>/</span>
          <Link href={`/${fewoSlug}`} className="hover:text-foreground transition-colors">{fewoLabel}</Link>
          <span>/</span>
          <span className="text-foreground">{roomLabel}</span>
        </nav>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-1">
          {roomLabel}
        </h1>
        <p className="text-muted-foreground text-sm mb-8">{fewoLabel}</p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
          {/* Description */}
          <div className="space-y-4 text-muted-foreground leading-relaxed order-2 md:order-1">
            {description}
          </div>

          {/* Primary image */}
          {images[0] && (
            <div className="relative aspect-[4/3] rounded overflow-hidden shadow-md order-1 md:order-2">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>

        {/* Additional images */}
        {images.length > 1 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
            {images.slice(1).map((img, i) => (
              <div key={i} className="relative aspect-[4/3] rounded overflow-hidden shadow-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Room nav */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-3">Weitere Räume in {fewoLabel}:</p>
          <div className="flex flex-wrap gap-3">
            {allRooms.map((room) => {
              const isActive = room.slug === roomSlug;
              return (
                <Link
                  key={room.slug}
                  href={`/${fewoSlug}/${room.slug}`}
                  className={`px-4 py-2 border rounded text-sm transition-colors ${
                    isActive
                      ? "border-primary text-primary font-medium"
                      : "border-border text-foreground hover:border-primary hover:text-primary"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {room.label}
                </Link>
              );
            })}
          </div>
          <div className="mt-6">
            <Link
              href={`/${fewoSlug}`}
              className="text-sm text-primary font-medium hover:underline"
            >
              &larr; Zurück zu {fewoLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ImageModal } from "@/components/image-modal";
import { resolveAssetPath } from "@/lib/utils";

interface ApartmentPageClientProps {
  apartment: 105 | 106;
  title: string;
  subtitle: string;
  floorPlanSrc: string;
  floorPlanAlt: string;
  description: React.ReactNode;
  rooms: { href: string; label: string }[];
  otherAptHref: string;
  otherAptLabel: string;
}

export function ApartmentPageClient({
  apartment,
  title,
  subtitle,
  floorPlanSrc,
  floorPlanAlt,
  description,
  rooms,
  otherAptHref,
  otherAptLabel,
}: ApartmentPageClientProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const router = useRouter();

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndEvent = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;

    // Swiping left goes to the first room (e.g., Wohnzimmer)
    if (isLeftSwipe && rooms.length > 1) {
      router.push(rooms[1].href);
    }
  };

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndEvent}
    >
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-4">
        <div className="flex flex-wrap items-baseline gap-3 mb-2">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
            {title}
          </h1>
        </div>
        <p className="text-muted-foreground text-sm mb-8">{subtitle}</p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Floor plan */}
          <div 
            className="flex items-center justify-center cursor-zoom-in group relative"
            onClick={() => setModalOpen(true)}
          >
            <Image
              src={resolveAssetPath(floorPlanSrc)}
              alt={floorPlanAlt}
              width={220}
              height={300}
              className="w-full max-w-[220px] h-auto mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <span className="bg-black/50 text-white px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
                 Grundriss vergrößern
               </span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {description}

            <div className="pt-4">
              <Link
                href="/kontakt"
                className="inline-block bg-primary text-primary-foreground px-5 py-2.5 rounded text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Anfragen &amp; Preise
              </Link>
            </div>
          </div>
        </div>

        {/* Room nav */}
        <div className="mt-12">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
            Zimmer &amp; Räume
          </h2>
          <div className="flex flex-wrap gap-3">
            {rooms.map((room, index) => {
              const isActive = index === 0; // Overview is always index 0
              return (
                <Link
                  key={room.href}
                  href={room.href}
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
        </div>

        {/* Switch apartment */}
        <div className="mt-10 pt-8 border-t border-border flex justify-between items-center">
          <p className="text-sm text-muted-foreground">Auch interessant:</p>
          <Link
            href={otherAptHref}
            className="text-sm text-primary font-medium hover:underline"
          >
            {otherAptLabel} {" "} ansehen &rarr;
          </Link>
        </div>
      </section>

      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={[{ src: floorPlanSrc, alt: floorPlanAlt }]}
        currentIndex={0}
        onNext={() => {}}
        onPrev={() => {}}
      />
    </div>
  );
}

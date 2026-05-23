"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ImageModal } from "@/components/image-modal";
import nextConfig from "../next.config";

const basePath = nextConfig.basePath || "";

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
  const displaySrc = floorPlanSrc.startsWith('/') && !floorPlanSrc.startsWith(basePath) 
    ? `${basePath}${floorPlanSrc}` 
    : floorPlanSrc;

  return (
    <>
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
              src={displaySrc}
              alt={floorPlanAlt}
              width={260}
              height={340}
              className="w-full max-w-[260px] h-auto mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
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
            {rooms.map((room) => (
              <Link
                key={room.href}
                href={room.href}
                className="px-4 py-2 border border-border rounded text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {room.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Switch apartment */}
        <div className="mt-10 pt-8 border-t border-border flex justify-between items-center">
          <p className="text-sm text-muted-foreground">Auch interessant:</p>
          <Link
            href={otherAptHref}
            className="text-sm text-primary font-medium hover:underline"
          >
            {otherAptLabel} ansehen &rarr;
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
    </>
  );
}

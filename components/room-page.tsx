"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ImageModal } from "./image-modal";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fewoSlug = `fewo-${apartment}`;
  const fewoLabel = `Wohnung ${apartment}`;

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-4">
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
            <div 
              className="relative aspect-[4/3] rounded overflow-hidden shadow-md order-1 md:order-2 cursor-zoom-in group"
              onClick={() => openModal(0)}
            >
              <Image
                src={images[0].src.startsWith('/') ? `/ferienw-preview${images[0].src}` : images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
                  Vergrößern
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Additional images */}
        {images.length > 1 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
            {images.slice(1).map((img, i) => (
              <div 
                key={i} 
                className="relative aspect-[4/3] rounded overflow-hidden shadow-sm cursor-zoom-in group"
                onClick={() => openModal(i + 1)}
              >
                  <Image
                  src={img.src.startsWith('/') ? `/ferienw-preview${img.src}` : img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center text-white opacity-0 group-hover:opacity-100">
                   <div className="bg-black/40 p-2 rounded-full backdrop-blur-sm">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                   </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          images={images}
          currentIndex={currentIndex}
          onNext={nextImage}
          onPrev={prevImage}
        />

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

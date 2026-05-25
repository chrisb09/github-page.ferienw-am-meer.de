"use client";

import { useState } from "react";
import { ProgressiveImage } from "./progressive-image";
import { ImageModal } from "./image-modal";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryClientProps {
  images: GalleryImage[];
}

export function GalleryClient({ images }: GalleryClientProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative aspect-[3/4] md:aspect-square rounded overflow-hidden shadow-sm cursor-zoom-in group bg-muted"
            style={{ position: "relative" }}
            onClick={() => openModal(index)}
          >
            <ProgressiveImage
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center text-white opacity-0 group-hover:opacity-100">
               <div className="bg-black/40 p-2 rounded-full backdrop-blur-sm">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
               </div>
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        images={images}
        currentIndex={currentIndex}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}

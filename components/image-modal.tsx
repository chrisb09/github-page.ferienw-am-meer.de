"use client";

import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useCallback } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string }[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export function ImageModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrev,
}: ImageModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors z-[110]"
        aria-label="Schließen"
      >
        <X size={32} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 p-2 text-white/50 hover:text-white transition-colors z-[110] hidden md:block"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft size={48} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 p-2 text-white/50 hover:text-white transition-colors z-[110] hidden md:block"
            aria-label="Nächstes Bild"
          >
            <ChevronRight size={48} />
          </button>
        </>
      )}

      <div
        className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex].src.startsWith('/') ? `/ferienw-preview${images[currentIndex].src}` : images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
        
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-center">
          <p className="text-white text-sm md:text-base font-medium">
            {images[currentIndex].alt}
          </p>
          {images.length > 1 && (
            <p className="text-white/60 text-xs mt-1">
              Bild {currentIndex + 1} von {images.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

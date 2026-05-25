"use client";

import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useCallback, useState, useRef } from "react";
import { resolveAssetPath } from "@/lib/utils";

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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  const handleWheel = useCallback((e: WheelEvent) => {
    if (images.length <= 1) return;
    
    // We want to capture horizontal scrolling (two fingers left/right on trackpad)
    // Some trackpads might have smaller deltaX values, so we reduce the threshold
    const threshold = 10;
    const absX = Math.abs(e.deltaX);
    const absY = Math.abs(e.deltaY);

    // If the movement is predominantly horizontal
    if (absX > absY && absX > threshold) {
      // Prevent browser back/forward navigation
      e.preventDefault();

      // Ignore wheel events if we are in cooldown to prevent rapid skipping
      if (scrollTimeoutRef.current) return;

      if (e.deltaX > 0) {
        onNext();
      } else {
        onPrev();
      }
      
      // Start cooldown
      scrollTimeoutRef.current = setTimeout(() => {
        scrollTimeoutRef.current = null;
      }, 400); 
    }
  }, [images.length, onNext, onPrev]);

  useEffect(() => {
    const currentModal = modalRef.current;
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      if (currentModal) {
        currentModal.addEventListener("wheel", handleWheel, { passive: false });
      }
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
      if (currentModal) {
        currentModal.removeEventListener("wheel", handleWheel);
      }
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [isOpen, handleKeyDown, handleWheel]);

  const onTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation();
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && images.length > 1) {
      onNext();
    }
    if (isRightSwipe && images.length > 1) {
      onPrev();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
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
            className="absolute left-4 p-2 text-white/50 hover:text-white transition-colors z-[110]"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft size={48} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 p-2 text-white/50 hover:text-white transition-colors z-[110]"
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
            src={resolveAssetPath(images[currentIndex].src)}
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

"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { resolveAssetPath, getBlurData } from "@/lib/utils";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  style?: React.CSSProperties;
}

export function ProgressiveImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  priority,
  style,
}: ProgressiveImageProps) {
  const [currentStage, setCurrentStage] = useState<"blur" | "preview" | "full">("blur");
  const blurData = getBlurData(src);
  const fullImageRef = useRef<HTMLImageElement>(null);

  // Fallback for cached images: check if the image is already complete on mount
  useEffect(() => {
    if (fullImageRef.current?.complete) {
      setCurrentStage("full");
    }
  }, []);

  const handleFullLoad = () => {
    setCurrentStage("full");
  };

  const handlePreviewLoad = () => {
    if (currentStage === "blur") {
      setCurrentStage("preview");
    }
  };

  if (!blurData) {
    return (
      <Image
        src={resolveAssetPath(src)}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={className}
        priority={priority}
        style={style}
      />
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-muted" style={style}>
      {/* 1. The 10x10 Base64 Blur (Base layer) - Instant */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-2xl scale-110"
        style={{ 
          backgroundImage: `url(${blurData.base64})`,
          // Only show while the preview or full image is missing
          opacity: currentStage === "blur" ? 1 : 0,
          transition: "opacity 0.4s ease-out",
          visibility: currentStage === "full" ? "hidden" : "visible"
        }}
      />

      {/* 2. The Intermediate Preview (Middle layer) - Non-blurred for detail */}
      <Image
        src={resolveAssetPath(blurData.preview)}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        // Removed 'blur-sm' for a sharper low-res look.
        className={`${className} transition-opacity duration-500 ${
          currentStage === "preview" ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handlePreviewLoad}
        style={{ visibility: currentStage === "full" ? "hidden" : "visible" }}
        priority={priority}
        // @ts-ignore
        fetchPriority="high"
      />

      {/* 3. The Full Image (Top layer) - Hidden until 100% ready */}
      <Image
        ref={fullImageRef}
        src={resolveAssetPath(src)}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        // Ensuring opacity is 0 until 'full' state is reached to prevent top-to-bottom wipe
        className={`${className} transition-opacity duration-700 ${
          currentStage === "full" ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handleFullLoad}
        // @ts-ignore
        fetchPriority={priority ? "auto" : "low"}
      />
    </div>
  );
}

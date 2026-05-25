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
    <div className="relative w-full h-full overflow-hidden" style={style}>
      {/* 1. The 10x10 Base64 Blur (Base layer) */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-2xl scale-110"
        style={{ 
          backgroundImage: `url(${blurData.base64})`,
          visibility: currentStage === "full" ? "hidden" : "visible"
        }}
      />

      {/* 2. The Intermediate Preview (Middle layer) */}
      <Image
        src={resolveAssetPath(blurData.preview)}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={`${className} blur-sm scale-105 transition-opacity duration-500 ${
          currentStage === "preview" || currentStage === "blur" ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handlePreviewLoad}
        style={{ visibility: currentStage === "full" ? "hidden" : "visible" }}
      />

      {/* 3. The Full Image (Top layer) */}
      <Image
        ref={fullImageRef}
        src={resolveAssetPath(src)}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={`${className} transition-opacity duration-700 ${
          currentStage === "full" ? "opacity-100" : "opacity-0"
        }`}
        priority={priority}
        onLoad={handleFullLoad}
      />
    </div>
  );
}

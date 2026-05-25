"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
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

  // When the full image finishes loading, switch to 'full'
  const handleFullLoad = () => {
    setCurrentStage("full");
  };

  // If there's no blurData, just render a normal Image
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
      {/* 1. The Full Image (Invisible until loaded, or shown on top) */}
      <Image
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

      {/* 2. The Intermediate Preview (Shown until full image is ready) */}
      {currentStage !== "full" && (
        <Image
          src={resolveAssetPath(blurData.preview)}
          alt={alt}
          fill={fill}
          width={width}
          height={height}
          className={`${className} blur-sm scale-105 transition-opacity duration-500 ${
            currentStage === "preview" || currentStage === "blur" ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => currentStage === "blur" && setCurrentStage("preview")}
        />
      )}

      {/* 3. The 10x10 Base64 Blur (Always underneath as a safety net) */}
      {currentStage === "blur" && (
        <div
          className="absolute inset-0 bg-cover bg-center blur-2xl scale-110"
          style={{ backgroundImage: `url(${blurData.base64})` }}
        />
      )}
    </div>
  );
}

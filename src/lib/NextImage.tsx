"use client";
import React, { useState } from "react";
import Image from "next/image";
import NextImageProps from "@/types/lib/NextImage";

const NextImage: React.FC<NextImageProps> = ({
  src = "/assets/images/placeholderImage.webp",
  width,
  height,
  alt = "",
  priority = false,
  testid = "",
  fallbackSrc = "/assets/images/placeholderImage.webp",
  fill = false,
  decoding = "async",
  claz = "",
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [fallbackLoaded, setFallbackLoaded] = useState(false);

  const handleImageError = () => {
    if (!fallbackLoaded) {
      setImageSrc(fallbackSrc);
      setFallbackLoaded(true);
    }
  };

  if (fill) {
    return (
      <Image
        src={imageSrc}
        alt={alt}
        data-testid={testid}
        onError={handleImageError}
        fill
        sizes="100vw"
        decoding={decoding}
        fetchPriority={priority ? "high" : "low"}
        loading={priority ? "eager" : "lazy"} // {lazy} | {eager}
        className={claz}
      />
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      data-testid={testid}
      onError={handleImageError}
      sizes="100vw"
      decoding={decoding}
      fetchPriority={priority ? "high" : "low"}
      loading={priority ? "eager" : "lazy"} // {lazy}| {eager}
      className={claz}
    />
  );
};

export default NextImage;

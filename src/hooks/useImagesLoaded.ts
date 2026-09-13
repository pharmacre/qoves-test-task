"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useImagesLoaded(imageCount: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState<ReadonlySet<number>>(
    () => new Set(),
  );

  const markImageAsLoaded = useCallback((index: number) => {
    setLoadedImages((current) => {
      if (current.has(index)) return current;

      const next = new Set(current);
      next.add(index);
      return next;
    });
  }, []);

  useEffect(() => {
    const completedImages = Array.from(
      containerRef.current?.querySelectorAll("img") ?? [],
    ).reduce<number[]>((indexes, image, index) => {
      if (image.complete) indexes.push(index);
      return indexes;
    }, []);

    if (!completedImages.length) return;

    setLoadedImages((current) => {
      const next = new Set(current);
      completedImages.forEach((index) => next.add(index));
      return next.size === current.size ? current : next;
    });
  }, []);

  return {
    containerRef,
    imagesLoaded: loadedImages.size >= imageCount,
    markImageAsLoaded,
  };
}

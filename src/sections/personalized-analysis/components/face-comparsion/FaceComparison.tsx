"use client";

import portraitAfter from "@/assets/images/personalized-analysis/face_after.png";
import portraitBefore from "@/assets/images/personalized-analysis/face_before.png";
import { personalizedAnalysisContent as content } from "@/constants/personalized-analysis";
import { useImagesLoaded } from "@/hooks/useImagesLoaded";

import { AnimatedBorder } from "./components/animated-border/AnimatedBorder";
import { Flow } from "./components/flow/Flow";
import { PortraitCard } from "./components/portrait-card/PortraitCard";
import styles from "./FaceComparison.module.scss";

export function FaceComparison() {
  const { containerRef, imagesLoaded, markImageAsLoaded } = useImagesLoaded(2);

  return (
    <div className={styles.comparison} data-reveal aria-busy={!imagesLoaded}>
      <div
        ref={containerRef}
        className={`${styles.content} ${imagesLoaded ? "" : styles.hidden}`}
      >
        <PortraitCard
          image={portraitBefore}
          side="left"
          onLoad={() => markImageAsLoaded(0)}
          {...content.portraits.before}
        />
        <Flow />
        <PortraitCard
          image={portraitAfter}
          side="right"
          onLoad={() => markImageAsLoaded(1)}
          {...content.portraits.after}
        />
      </div>

      {imagesLoaded && <AnimatedBorder />}
    </div>
  );
}

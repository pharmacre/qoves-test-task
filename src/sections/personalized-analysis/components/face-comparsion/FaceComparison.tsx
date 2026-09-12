import portraitAfter from "@/assets/images/personalized-analysis/face_after.png";
import portraitBefore from "@/assets/images/personalized-analysis/face_before.png";
import { personalizedAnalysisContent as content } from "@/constants/personalized-analysis";

import { AnimatedBorder } from "./components/animated-border/AnimatedBorder";
import { Flow } from "./components/flow/Flow";
import { PortraitCard } from "./components/portrait-card/PortraitCard";
import styles from "./FaceComparison.module.scss";

export function FaceComparison() {
  return (
    <div className={styles.comparison} data-reveal>
      <PortraitCard image={portraitBefore} side="left" {...content.portraits.before} />
      <Flow />
      <PortraitCard image={portraitAfter} side="right" {...content.portraits.after} />
      <AnimatedBorder />
    </div>
  );
}

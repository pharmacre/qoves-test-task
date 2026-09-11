import Image from "next/image";

import face from "@/assets/images/personalized-aesthetics/face.png";
import { Eyebrow } from "@/components/eyebrow/Eyebrow";

import { AnalysisCharts } from "./components/AnalysisCharts";
import { ProgressiveBlur } from "./components/ProgressiveBlur";
import styles from "./PersonalizedAesthetics.module.scss";

export function PersonalizedAesthetics() {
  return (
    <section className={styles.section} aria-labelledby="aesthetics-title">
      <div className={styles.heading}>
        <Eyebrow className={styles.eyebrow}>Personalized aesthetics</Eyebrow>
        <h2 id="aesthetics-title">
          Your complete <span>facial analysis</span>
        </h2>
        <p>
          Every face is unique. We assess more than 100 unique facial markers to
          <br className={styles.lineBreak} /> give you a precise understanding of your aesthetics.
        </p>
      </div>
      <div className={styles.visual}>
        <AnalysisCharts />
        <Image
          className={styles.face}
          src={face}
          alt="Portrait illustrating a personalized facial analysis"
          sizes="(max-width: 767px) 90vw, 650px"
        />
      </div>
      <ProgressiveBlur side="left" />
      <ProgressiveBlur side="right" />
    </section>
  );
}

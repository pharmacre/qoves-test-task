import { personalizedAnalysisContent as content } from "@/constants/personalized-analysis";

import styles from "../PersonalizedAnalysis.module.scss";

export function Heading() {
  return (
    <div className={styles.heading}>
      <p className={styles.eyebrow} data-reveal>
        {content.eyebrow}
      </p>
      <h1 id="plan-title" className={styles.title} data-reveal>
        {content.title.main} <span>{content.title.accent}</span>
      </h1>
      <p className={styles.description} data-reveal>
        {content.description[0]}
        <br />
        {content.description[1]}
      </p>
    </div>
  );
}

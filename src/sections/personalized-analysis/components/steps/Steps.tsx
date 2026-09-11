import { personalizedAnalysisContent as content } from "@/constants/personalized-analysis";

import styles from "./Steps.module.scss";

export function Steps() {
  return (
    <ol className={styles.steps} aria-label={content.stepsLabel}>
      {content.steps.map((step, index) => (
        <li key={step[0]}>
          <div className={styles.stepCard}>
            <span className={styles.number}>{index + 1}</span>
            <span className={styles.stepLabel}>
              {step[0]}
              <br />
              {step[1]}
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
}

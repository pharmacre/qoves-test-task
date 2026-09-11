import { Eyebrow } from "@/components/eyebrow/Eyebrow";
import { personalizedAnalysisContent as content } from "@/constants/personalized-analysis";

import styles from "./Heading.module.scss";

export function Heading() {
  return (
    <div className={styles.heading}>
      <Eyebrow data-reveal>{content.eyebrow}</Eyebrow>
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

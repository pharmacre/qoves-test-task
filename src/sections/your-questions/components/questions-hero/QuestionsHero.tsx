import { Eyebrow } from "@/components/eyebrow/Eyebrow";
import { ChevronIcon } from "@/components/icons/ChevronIcon";

import { Insights } from "../insights/Insights";
import styles from "./QuestionsHero.module.scss";

export function QuestionsHero() {
  return (
    <div className={styles.firstPanel}>
      <Eyebrow className={styles.eyebrow}>Your questions</Eyebrow>

      <div className={styles.intro}>
        <Eyebrow className={styles.research}>Backed by 2000+ research papers</Eyebrow>
        <h2 id="your-questions-title">
          Will analyzing my face <span>Make me insecure?</span>
        </h2>
        <p className={`${styles.introCopy} ${styles.introCopyDesktop}`}>
          Most insecurity comes from uncertainty-not knowing if your concerns are real or imagined.
          When you&apos;re guessing about your appearance, your mind often makes things seem worse
          than they are.
        </p>
        <p className={`${styles.introCopy} ${styles.introCopyMobile}`}>
          Get your personalized facial analysis and transformation plan based on 2000+ academic
          studies.
        </p>
        <a className={styles.cta} href="#faq-title">
          <span>Start your glow-up</span>
          <span className={styles.ctaArrow}>
            <ChevronIcon aria-hidden="true" />
          </span>
        </a>
      </div>

      <Insights />
    </div>
  );
}

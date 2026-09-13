"use client";

import { MindsetPanel } from "./components/mindset-panel/MindsetPanel";
import { QuestionsHero } from "./components/questions-hero/QuestionsHero";
import { StickyVisual } from "./components/sticky-visual/StickyVisual";
import { useYourQuestionsScroll } from "./hooks/useYourQuestionsScroll";

import styles from "./YourQuestions.module.scss";

export function YourQuestions() {
  const { sectionRef, mindsetRef } = useYourQuestionsScroll();

  return (
    <section
      id="your-questions"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="your-questions-title"
    >
      <StickyVisual />

      <div className={styles.story}>
        <QuestionsHero />
        <MindsetPanel panelRef={mindsetRef} />
      </div>
    </section>
  );
}

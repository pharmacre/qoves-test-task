import { AnimatedCollapse } from "../animated-collapse/AnimatedCollapse";
import styles from "./FaqItem.module.scss";

type FaqItemProps = {
  answer: string;
  answerId: string;
  open: boolean;
  question: string;
  onToggle: () => void;
};

export function FaqItem({ answer, answerId, open, question, onToggle }: FaqItemProps) {
  return (
    <div className={`${styles.item} ${open ? styles.itemOpen : ""}`}>
      <button
        className={styles.question}
        type="button"
        aria-expanded={open}
        aria-controls={answerId}
        onClick={onToggle}
      >
        <span>{question}</span>
        <span className={`${styles.icon} ${open ? styles.minusIcon : ""}`} aria-hidden="true" />
      </button>

      <AnimatedCollapse open={open}>
        <div className={styles.answer} id={answerId}>
          <p>{answer}</p>
        </div>
      </AnimatedCollapse>
    </div>
  );
}

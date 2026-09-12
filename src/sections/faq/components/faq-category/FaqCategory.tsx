import { useState } from "react";

import type { FaqCategory as FaqCategoryData } from "@/constants/faq";

import { AnimatedCollapse } from "../animated-collapse/AnimatedCollapse";
import { FaqItem } from "../faq-item/FaqItem";
import styles from "./FaqCategory.module.scss";

type FaqCategoryProps = {
  category: FaqCategoryData;
  categoryIndex: number;
  open: boolean;
  onToggle: () => void;
};

export function FaqCategory({ category, categoryIndex, open, onToggle }: FaqCategoryProps) {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const categoryId = `faq-category-${categoryIndex}`;

  const toggleQuestion = (questionIndex: number) => {
    setOpenQuestion((current) => (current === questionIndex ? null : questionIndex));
  };

  return (
    <div className={`${styles.category} ${open ? styles.categoryOpen : ""}`}>
      <button
        className={styles.categoryButton}
        type="button"
        aria-expanded={open}
        aria-controls={categoryId}
        onClick={onToggle}
      >
        <span>{category.title}</span>
        <span className={`${styles.icon} ${open ? styles.closeIcon : ""}`} aria-hidden="true" />
      </button>

      <AnimatedCollapse open={open}>
        <div className={styles.categoryPanel} id={categoryId}>
          {category.items.map((item, questionIndex) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              answerId={`faq-answer-${categoryIndex}-${questionIndex}`}
              open={openQuestion === questionIndex}
              onToggle={() => toggleQuestion(questionIndex)}
            />
          ))}
        </div>
      </AnimatedCollapse>
    </div>
  );
}

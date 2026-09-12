"use client";

import { useState } from "react";

import { Eyebrow } from "@/components/eyebrow/Eyebrow";
import { faqCategories } from "@/constants/faq";

import { FaqCategory } from "./components/faq-category/FaqCategory";
import styles from "./Faq.module.scss";

export function Faq() {
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const toggleCategory = (categoryIndex: number) => {
    setOpenCategory((current) => (current === categoryIndex ? null : categoryIndex));
  };

  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <div className={styles.heading}>
        <Eyebrow>Your questions</Eyebrow>
        <h2 id="faq-title">
          Frequently asked <span>questions</span>
        </h2>
        <p>
          If you have any further questions, please use the chat box in the bottom right or contact
          us by email at hello@qoves.com
        </p>
      </div>

      <div className={styles.categories}>
        {faqCategories.map((category, categoryIndex) => (
          <FaqCategory
            key={category.title}
            category={category}
            categoryIndex={categoryIndex}
            open={openCategory === categoryIndex}
            onToggle={() => toggleCategory(categoryIndex)}
          />
        ))}
      </div>
    </section>
  );
}

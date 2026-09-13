import type { Ref } from "react";

import { considerations, principles } from "../../data";
import styles from "./MindsetPanel.module.scss";

type MindsetPanelProps = {
  panelRef: Ref<HTMLDivElement>;
};

export function MindsetPanel({ panelRef }: MindsetPanelProps) {
  return (
    <div ref={panelRef} className={styles.secondPanel}>
      <div className={styles.secondStage}>
        <div className={styles.mindsetTextLayer}>
          <div className={styles.mindsetHeading}>
            <MindsetContent />
          </div>
        </div>

        <div className={styles.mindsetBlurLayer} aria-hidden="true">
          <div className={styles.mindsetHeading}>
            <MindsetContent />
          </div>
        </div>

        <div className={styles.mindsetCards}>
          <ListCard
            className={styles.considerCard}
            title="Consider this..."
            items={considerations}
          />
          <ListCard
            className={styles.principlesCard}
            title="The key is approaching it intelligently"
            items={principles}
          />
        </div>
      </div>
    </div>
  );
}

type ListCardProps = {
  className: string;
  title: string;
  items: string[];
};

function ListCard({ className, title, items }: ListCardProps) {
  return (
    <article className={`${styles.listCard} ${className}`}>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function MindsetContent() {
  return (
    <>
      <h2>
        Is it vain to care <span>about your appearance?</span>
      </h2>
      <p>
        Many feel guilty about wanting to improve their looks, fearing it means they&apos;re shallow
        or insecure. But here&apos;s what research tells us : caring about appearance is natural.
        Like health, finances, and education, it&apos;s just another form of self-improvement.
      </p>
    </>
  );
}

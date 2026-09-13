import Image from "next/image";

import { insights } from "../../data";
import styles from "./Insights.module.scss";

export function Insights() {
  return (
    <div className={styles.insights}>
      {insights.map((item) => (
        <article className={styles.insightCard} key={item.title}>
          <Image className={styles.thumbnail} src={item.image} alt="" sizes="96px" />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}

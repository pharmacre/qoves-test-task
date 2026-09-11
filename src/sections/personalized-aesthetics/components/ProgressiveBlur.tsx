import styles from "./ProgressiveBlur.module.scss";

type ProgressiveBlurProps = {
  side: "left" | "right";
};

export function ProgressiveBlur({ side }: ProgressiveBlurProps) {
  return <div className={`${styles.blur} ${styles[side]}`} aria-hidden="true" />;
}

import { FlowMaskIcon } from "@/components/icons/FlowMaskIcon";

import styles from "./Flow.module.scss";

export function Flow() {
  return (
    <>
      <FlowMaskIcon className={styles.leftBarrier} aria-hidden="true" />
      <FlowMaskIcon className={styles.rightBarrier} aria-hidden="true" />
      <div className={styles.flow} aria-hidden="true" />
    </>
  );
}

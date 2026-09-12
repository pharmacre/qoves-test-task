import { GridRow } from "@/components/grid-row/GridRow";

import styles from "./Spacing.module.scss";

export function Spacing() {
  return (
    <div className={styles.desktopOnly}>
      <GridRow topLine bottomLine>
        <div className={styles.box} />
      </GridRow>
    </div>
  );
}

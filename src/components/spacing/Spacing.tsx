import { GridRow } from "@/components/grid-row/GridRow";

import styles from "./Spacing.module.scss";

export function Spacing() {
  return (
    <GridRow topLine bottomLine>
      <div className={styles.box} />
    </GridRow>
  );
}

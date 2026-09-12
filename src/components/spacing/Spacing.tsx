import { GridRow } from "@/components/grid-row/GridRow";

import styles from "./Spacing.module.scss";

type SpacingProps = Readonly<{
  desktopOnly?: boolean;
}>;

export function Spacing({ desktopOnly = false }: SpacingProps) {
  const spacing = (
    <GridRow topLine bottomLine>
      <div className={styles.box} />
    </GridRow>
  );

  return desktopOnly ? <div className={styles.desktopOnly}>{spacing}</div> : spacing;
}

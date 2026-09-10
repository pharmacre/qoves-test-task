import type { ReactNode } from "react";

import styles from "./GridRow.module.scss";

type GridRowProps = Readonly<{
  children: ReactNode;
  className?: string;
  topLine?: boolean;
  bottomLine?: boolean;
}>;

export function GridRow({
  children,
  className,
  topLine = false,
  bottomLine = false,
}: GridRowProps) {
  const rowClassName = [
    styles.row,
    topLine ? styles.topLine : "",
    bottomLine ? styles.bottomLine : "",
  ]
    .filter(Boolean)
    .join(" ");
  const canvasClassName = className ? `${styles.canvas} ${className}` : styles.canvas;

  return (
    <div className={rowClassName}>
      <div className={canvasClassName}>{children}</div>
    </div>
  );
}

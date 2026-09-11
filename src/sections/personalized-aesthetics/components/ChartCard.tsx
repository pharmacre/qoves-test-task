import type { HTMLAttributes, ReactNode } from "react";

import styles from "./ChartCard.module.scss";

export function ChartCard({
  className,
  label,
  children,
  caption,
  captionClassName,
  events,
}: {
  className: string;
  label: string;
  children: ReactNode;
  caption?: string;
  captionClassName?: string;
  events: HTMLAttributes<HTMLDivElement>;
}) {
  return (
    <div
      className={`${styles.card} ${className}`}
      role="group"
      aria-label={label}
      tabIndex={0}
      {...events}
    >
      {children}
      {caption && <p className={`${styles.caption} ${captionClassName ?? ""}`}>{caption}</p>}
    </div>
  );
}

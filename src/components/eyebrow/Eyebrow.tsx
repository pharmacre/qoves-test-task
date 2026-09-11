import type { ComponentPropsWithoutRef } from "react";

import styles from "./Eyebrow.module.scss";

export function Eyebrow({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={[styles.eyebrow, className].filter(Boolean).join(" ")} {...props} />;
}

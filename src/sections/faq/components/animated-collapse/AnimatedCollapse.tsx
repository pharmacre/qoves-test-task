import type { PropsWithChildren } from "react";

import { useCollapseAnimation } from "@/hooks/useCollapseAnimation";

import styles from "./AnimatedCollapse.module.scss";

type AnimatedCollapseProps = PropsWithChildren<{
  open: boolean;
}>;

export function AnimatedCollapse({ open, children }: AnimatedCollapseProps) {
  const panelRef = useCollapseAnimation(open);

  return (
    <div ref={panelRef} className={styles.collapse} aria-hidden={!open}>
      {children}
    </div>
  );
}

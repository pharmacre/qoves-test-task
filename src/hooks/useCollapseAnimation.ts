"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function useCollapseAnimation(open: boolean) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstRenderRef = useRef(true);

  useGSAP(
    () => {
      const panel = panelRef.current;
      if (!panel) return;

      if (firstRenderRef.current) {
        gsap.set(panel, { height: open ? "auto" : 0, opacity: open ? 1 : 0 });
        firstRenderRef.current = false;
        return;
      }

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.killTweensOf(panel);
      gsap.to(panel, {
        height: open ? "auto" : 0,
        opacity: open ? 1 : 0,
        duration: reduceMotion ? 0 : 0.45,
        ease: "power3.inOut",
        overwrite: true,
      });
    },
    { dependencies: [open] },
  );

  return panelRef;
}

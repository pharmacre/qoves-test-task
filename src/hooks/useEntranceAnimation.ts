"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { RefObject } from "react";

export function useEntranceAnimation(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from("[data-reveal]", {
        autoAlpha: 0,
        y: 24,
        duration: 0.9,
        stagger: 0.09,
        ease: "power3.out",
      });

      gsap.from("[data-flow-graphic]", {
        autoAlpha: 0,
        scale: 0.98,
        duration: 0.8,
        delay: 0.35,
        ease: "power3.out",
      });
    },
    { scope },
  );
}

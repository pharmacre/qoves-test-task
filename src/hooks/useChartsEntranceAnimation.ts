"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { RefObject } from "react";

export function useChartsEntranceAnimation(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const charts = gsap.utils.toArray<HTMLElement>("[data-analysis-chart]");

      if (!charts.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.set(charts, { autoAlpha: 0, filter: "blur(8px)", y: 24 });

      const chartsContainer = scope.current?.querySelector("[data-analysis-charts]");
      if (!chartsContainer) {
        gsap.set(charts, { clearProps: "opacity,visibility,filter,transform" });
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;

          observer.disconnect();
          gsap.to(charts, {
            autoAlpha: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "opacity,visibility,filter,transform",
          });
        },
        { threshold: 0.2 },
      );

      observer.observe(chartsContainer);

      return () => {
        observer.disconnect();
        gsap.killTweensOf(charts);
      };
    },
    { scope },
  );
}

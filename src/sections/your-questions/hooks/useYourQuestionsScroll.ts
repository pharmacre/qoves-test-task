"use client";

import { useEffect, useRef } from "react";

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

export function useYourQuestionsScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const mindsetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const bounds = section.getBoundingClientRect();
      const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = clamp(-bounds.top / distance);
      const compactVisualProgress = clamp(
        (-bounds.top - window.innerHeight * 0.72) / (window.innerHeight * 0.28),
      );
      const visualProgress = window.innerWidth < 1100 ? compactVisualProgress : progress;

      section.style.setProperty("--scroll-progress", progress.toFixed(4));
      section.style.setProperty("--visual-progress", visualProgress.toFixed(4));

      const mindset = mindsetRef.current;
      if (!mindset) return;

      const mindsetBounds = mindset.getBoundingClientRect();
      const mindsetDistance = Math.max(mindset.offsetHeight - window.innerHeight, 1);
      const mindsetPreRoll = window.innerHeight * 0.5;
      const mindsetProgress = clamp(
        (mindsetPreRoll - mindsetBounds.top) / (mindsetDistance + mindsetPreRoll),
      );
      const headingEnter = Math.min(mindsetProgress / 0.12, 1);
      const headingExit = 1 - clamp((mindsetProgress - 0.88) / 0.12);
      const cardsExit = 1 - clamp((mindsetProgress - 0.92) / 0.08);
      const leftCardProgress = clamp((mindsetProgress - 0.23) / 0.43);
      const rightCardProgress = clamp((mindsetProgress - 0.49) / 0.42);
      const cardTravel = window.innerHeight + 500;
      const headingOffset = (1 - headingEnter) * 28 - (1 - headingExit) * 28;

      section.style.setProperty("--mindset-heading-opacity", `${headingEnter * headingExit}`);
      section.style.setProperty("--mindset-heading-y", `${headingOffset}px`);
      section.style.setProperty("--mindset-cards-opacity", `${cardsExit}`);
      section.style.setProperty("--consider-card-y", `${-leftCardProgress * cardTravel}px`);
      section.style.setProperty("--principles-card-y", `${-rightCardProgress * cardTravel}px`);
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return { sectionRef, mindsetRef };
}

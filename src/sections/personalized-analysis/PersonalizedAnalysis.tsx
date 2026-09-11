"use client";

import { useRef } from "react";

import { GridRow } from "@/components/grid-row/GridRow";
import { useEntranceAnimation } from "@/hooks/useEntranceAnimation";

import { FaceComparison } from "./components/face-comparsion/FaceComparison";
import { Heading } from "./components/heading/Heading";
import { Steps } from "./components/steps/Steps";
import styles from "./PersonalizedAnalysis.module.scss";

export function PersonalizedAnalysis() {
  const sectionRef = useRef<HTMLElement>(null);

  useEntranceAnimation(sectionRef);

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="plan-title">
      <GridRow>
        <Heading />
      </GridRow>

      <GridRow topLine>
        <FaceComparison />
      </GridRow>

      <GridRow topLine>
        <Steps />
      </GridRow>
    </section>
  );
}

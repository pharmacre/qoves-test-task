"use client";

import { useState } from "react";
import { ResponsiveContainer, Scatter, ScatterChart, XAxis, YAxis } from "recharts";

import { useAnimatedValues } from "@/hooks/useAnimatedValues";

import { initialChartValues, random } from "@/utils/chartUtils";
import { ChartCard } from "../ChartCard";
import styles from "./BrowsChart.module.scss";

function BrowPoint({
  cx = 0,
  cy = 0,
  payload,
}: {
  cx?: number;
  cy?: number;
  payload?: { opacity: number; size: number };
}) {
  const size = payload?.size ?? 12;
  return (
    <rect
      className={styles.matrixPoint}
      x={cx - size / 2}
      y={cy - size / 2}
      width={size}
      height={size}
      rx={size / 5}
      fill="#eef7fa"
      opacity={payload?.opacity}
    />
  );
}

function BrowAxis({ vertical = false }: { vertical?: boolean }) {
  return (
    <svg
      className={vertical ? styles.verticalAxis : styles.horizontalAxis}
      viewBox="0 0 171 4"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 2H171"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="1 1.5"
      />
      {[0, 34, 103].map((x) => (
        <path key={x} d={`M${x} 0L${x + 4} 2L${x} 4Z`} fill="currentColor" />
      ))}
      {[68, 137, 171].map((x) => (
        <path key={x} d={`M${x} 0L${x - 4} 2L${x} 4Z`} fill="currentColor" />
      ))}
    </svg>
  );
}

export function BrowsChart() {
  const [matrixWidth, setMatrixWidth] = useState(0);
  const brows = useAnimatedValues(initialChartValues.brows, () => [random(1, 8), random(1, 8)]);
  const fullness = Array.from({ length: 100 }, (_, i) => ({
    size: matrixWidth * 0.0655,
    x: 3.275 + (i % 10) * 10.05 + (i % 10 >= 5 ? 3 : 0),
    y: 3.275 + Math.floor(i / 10) * 10.05 + (Math.floor(i / 10) >= 5 ? 3 : 0),
    opacity: Math.max(
      0.12,
      1 - Math.hypot((i % 10) - brows.values[0], Math.floor(i / 10) - brows.values[1]) / 3,
    ),
  }));
  return (
    <ChartCard
      events={brows.events}
      className={styles.fullness}
      label="Brow fullness: top 20 percent for natural fullness"
      caption="Brows fall in the top 20% for natural fullness."
      captionClassName={styles.caption}
    >
      <div className={styles.matrix}>
        <BrowAxis />
        <BrowAxis vertical />
        <span className={styles.topLabel}>Bold</span>
        <span className={styles.leftLabel}>Feminine</span>
        <span className={styles.rightLabel}>Masculine</span>
        <span className={styles.bottomLabel}>Subtle</span>
        <ResponsiveContainer width="100%" height="100%" onResize={(width) => setMatrixWidth(width)}>
          <ScatterChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <XAxis hide type="number" dataKey="x" domain={[0, 100]} />
            <YAxis hide type="number" dataKey="y" domain={[0, 100]} />
            <Scatter
              activeShape={false}
              data={fullness}
              isAnimationActive={false}
              shape={BrowPoint}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}

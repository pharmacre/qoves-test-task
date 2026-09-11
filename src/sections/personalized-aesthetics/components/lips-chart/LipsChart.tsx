"use client";

import { memo } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import { useAnimatedValues } from "@/hooks/useAnimatedValues";

import { initialChartValues, random } from "@/utils/chartUtils";
import { ChartCard } from "../ChartCard";
import styles from "./LipsChart.module.scss";

export function LipsChart() {
  const lips = useAnimatedValues(initialChartValues.lips, () => [random(1, 100)]);
  const lipValue = Math.round(lips.values[0]);
  return (
    <ChartCard
      events={lips.events}
      className={styles.lips}
      label={`Lip smoothness: ${lipValue} percent`}
    >
      <span className={styles.smallTitle}>Lip smoothness</span>
      <strong>{lipValue}%</strong>
      <div
        className={styles.lipIndicator}
        data-label-side={lips.values[0] < 20 ? "right" : "left"}
        style={{ left: `${2.4 + lips.values[0] * 0.952}%` }}
      >
        <span>
          {lipValue}% <em>(You)</em>
        </span>
      </div>
      <div className={styles.lipLabels}>
        <span>
          Rough <em>(0%)</em>
        </span>
        <span>
          Smooth <em>(100%)</em>
        </span>
      </div>
      <LipScale />
    </ChartCard>
  );
}

const LipScale = memo(function LipScale() {
  return (
    <div className={styles.lipPlot}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={[{ start: 4, value: 54, rest: 42 }]}
          barCategoryGap={0}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis hide type="number" domain={[0, 100]} />
          <YAxis hide type="category" />
          <Bar dataKey="start" stackId="lip" fill="#f1f6f7" isAnimationActive={false} />
          <Bar dataKey="value" stackId="lip" fill="#cddde3" isAnimationActive={false} />
          <Bar dataKey="rest" stackId="lip" fill="#aec2c9" isAnimationActive={false} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
});

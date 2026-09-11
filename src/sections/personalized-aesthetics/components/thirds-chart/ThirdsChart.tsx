"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import { useAnimatedValues } from "@/hooks/useAnimatedValues";

import { initialChartValues, random } from "@/utils/chartUtils";
import { ChartCard } from "../ChartCard";
import styles from "./ThirdsChart.module.scss";

function randomThirds() {
  const weights = Array.from({ length: 3 }, () => random(25, 75));
  const total = weights.reduce((sum, value) => sum + value, 0);
  const lower = Math.round((weights[0] / total) * 100);
  const middle = Math.round((weights[1] / total) * 100);
  return [lower, middle, 100 - lower - middle];
}

export function ThirdsChart() {
  const thirds = useAnimatedValues(initialChartValues.thirds, randomThirds);
  const thirdValues = [
    Math.round(thirds.values[0]),
    Math.round(thirds.values[1]),
    100 - Math.round(thirds.values[0]) - Math.round(thirds.values[1]),
  ];
  const columns = thirds.values.map((value) => `${value}fr`).join(" ");
  return (
    <ChartCard
      events={thirds.events}
      className={styles.thirds}
      label={`Facial thirds: ${thirdValues.map((value) => (value / 100).toFixed(2)).join(", ")}`}
    >
      <span className={styles.smallTitle}>Facial thirds</span>
      <div className={styles.thirdsBottom}>
        <div className={styles.thirdLabels} style={{ gridTemplateColumns: columns }}>
          {["Lower third [C]", "Middle third [B]", "Upper third [A]"].map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
        <div className={styles.thirdsPlot}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              barCategoryGap={0}
              data={[
                { lower: thirds.values[0], middle: thirds.values[1], upper: thirds.values[2] },
              ]}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <XAxis hide type="number" domain={[0, 100]} />
              <YAxis hide type="category" />
              {["lower", "middle", "upper"].map((key, i) => (
                <Bar
                  key={key}
                  dataKey={key}
                  stackId="thirds"
                  fill={["#5d767e", "#9aaeb5", "#cddde3"][i]}
                  isAnimationActive={false}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.values} style={{ gridTemplateColumns: columns }}>
          {thirdValues.map((value, index) => (
            <span key={index}>{(value / 100).toFixed(2)}</span>
          ))}
        </div>
      </div>
    </ChartCard>
  );
}

"use client";

import { useAnimatedValues } from "@/hooks/useAnimatedValues";
import { initialChartValues, random } from "@/utils/chartUtils";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ChartCard } from "../ChartCard";
import styles from "./SymmetryChart.module.scss";

export function SymmetryChart() {
  const symmetry = useAnimatedValues(initialChartValues.symmetry, () => [
    random(5, 95),
    random(5, 95),
    random(5, 95),
  ]);
  return (
    <ChartCard
      events={symmetry.events}
      className={styles.symmetry}
      label={`Facial symmetry: ideal ${Math.round(symmetry.values[0])}, you ${Math.round(symmetry.values[1])}, average ${Math.round(symmetry.values[2])}`}
    >
      <div className={styles.symmetryPlot}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={[
              { name: "top-space", value: 0 },
              { name: "Ideal", value: symmetry.values[0] },
              { name: "You", value: symmetry.values[1] },
              { name: "Average", value: symmetry.values[2] },
              { name: "bottom-space", value: 0 },
            ]}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              horizontal={false}
              stroke="#d3e0e4"
              strokeOpacity={0.45}
              strokeDasharray="0.5 1"
              strokeWidth={0.5}
              verticalValues={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            />
            <XAxis
              hide
              type="number"
              domain={[0, 100]}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            />
            <YAxis hide type="category" dataKey="name" />
            <Bar dataKey="value" barSize={2} isAnimationActive={false}>
              {["transparent", "#cddde3", "#9aaeb5", "#5d767e", "transparent"].map(
                (color, index) => (
                  <Cell key={index} fill={color} />
                ),
              )}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        {["Ideal", "You", "Average"].map((label, index) => (
          <div
            key={label}
            className={styles.symmetryMarker}
            style={{
              top: `${30 + index * 20}%`,
              left: `${symmetry.values[index]}%`,
              width: `${100 - symmetry.values[index]}%`,
            }}
          >
            <span
              className={styles.symmetryBadge}
              data-long={index === 2}
              style={{
                transform: symmetry.values[index] > 85 ? "translate(-100%, -50%)" : undefined,
              }}
            >
              <i style={{ backgroundColor: ["#cddde3", "#9aaeb5", "#5d767e"][index] }} />
              {label}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.axisLabels}>
        <span>Asymmetrical</span>
        <span>Symmetrical</span>
      </div>
    </ChartCard>
  );
}

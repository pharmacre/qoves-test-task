"use client";

import { useAnimatedValues } from "@/hooks/useAnimatedValues";
import { initialChartValues, random } from "@/utils/chartUtils";
import { memo } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ChartCard } from "../ChartCard";
import styles from "./PigmentChart.module.scss";

const pigment = [
  "#d4eaf5",
  "#d4eaf5",
  "#aad5da",
  "#aad5da",
  "#8facbf",
  "#709bbe",
  "#688eb3",
  "#adb596",
  "#7d9e98",
  "#4e696f",
  "#72756d",
  "#252d38",
  "#252d38",
  "#c6a261",
  "#a78647",
  "#948254",
  "#b9825f",
  "#ba956e",
  "#ac896c",
  "#634932",
  "#775837",
  "#905640",
  "#aa6044",
  "#824543",
  "#5d4b57",
  "#5e343d",
  "#483035",
  "#190d09",
];

export function PigmentChart() {
  const eyes = useAnimatedValues(initialChartValues.pigment, () => [random(0, pigment.length - 1)]);
  const eyeIndex = Math.round(eyes.values[0]);
  const eyeName =
    eyeIndex < 6
      ? "Blue"
      : eyeIndex < 12
        ? "Green"
        : eyeIndex < 17
          ? "Light brown"
          : eyeIndex < 21
            ? "Dark brown"
            : "Black";
  return (
    <ChartCard
      events={eyes.events}
      className={styles.pigment}
      label={`Eye pigmentation: ${eyeName}`}
      caption="You have a medium melanin concentration."
      captionClassName={styles.caption}
    >
      <PigmentScale />
      <div className={styles.pigmentLabels}>
        <span>Blue</span>
        <span>Green</span>
        <span>Brown</span>
        <span>Deep</span>
      </div>
      <div
        className={styles.eyeMarker}
        style={{ top: `${6 + (81.7 * (eyes.values[0] + 0.5)) / pigment.length}%` }}
      >
        <span>
          <i style={{ backgroundColor: pigment[eyeIndex] }} />
          {eyeName}
        </span>
        <span>YOU</span>
        <b className={styles.eyeSelection} />
      </div>
    </ChartCard>
  );
}

const PigmentScale = memo(function PigmentScale() {
  return (
    <div className={styles.pigmentPlot}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={[{ name: "eye", ...Object.fromEntries(pigment.map((_, i) => [`p${i}`, 1])) }]}
          barCategoryGap={0}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis hide dataKey="name" />
          <YAxis hide domain={[0, pigment.length]} />
          {[...pigment].reverse().map((color, i) => (
            <Bar
              key={i}
              dataKey={`p${i}`}
              name={`${i < 4 ? "Deep" : i < 14 ? "Brown" : i < 20 ? "Green" : "Blue"} · ${pigment.length - i}/${pigment.length}`}
              stackId="pigment"
              fill={color}
              isAnimationActive={false}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
});

"use client";

import { useId } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { useAnimatedValues } from "@/hooks/useAnimatedValues";

import { initialChartValues, random } from "@/utils/chartUtils";
import { ChartCard } from "../ChartCard";
import styles from "./DensityChart.module.scss";

function DensityMarker({
  cx = 0,
  cy = 0,
  fill = "#fff",
  rounded = false,
}: {
  cx?: number;
  cy?: number;
  fill?: string;
  rounded?: boolean;
}) {
  return (
    <rect x={cx - 1.6} y={cy - 1.6} width={3.2} height={3.2} rx={rounded ? 0.6 : 0} fill={fill} />
  );
}

export function DensityChart() {
  const clipId = useId();
  const curve = useAnimatedValues(initialChartValues.density, () => [
    random(0, 100),
    random(30, 90),
  ]);
  const density = Array.from({ length: 101 }, (_, x) => ({
    x,
    value: 0.05 + (curve.values[1] / 100) * Math.exp(-((x - 50) ** 2) / 550),
  }));
  return (
    <ChartCard
      events={curve.events}
      className={styles.density}
      label="Eyebrow density distribution: mid 40th percentile"
      caption="Your eyebrow density is in the mid 40th percentile"
    >
      <div className={styles.densityPlot}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={density} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <CartesianGrid
              stroke="#ffffff"
              strokeOpacity={0.12}
              horizontalValues={Array.from({ length: 8 }, (_, i) => i / 7)}
              verticalValues={Array.from({ length: 9 }, (_, i) => i * 12.5)}
            />
            <defs>
              <clipPath id={`${clipId}-clip`} clipPathUnits="objectBoundingBox">
                <rect
                  x={curve.values[0] / 100}
                  y={0}
                  width={1 - curve.values[0] / 100}
                  height={1}
                />
              </clipPath>
            </defs>
            <XAxis
              dataKey="x"
              type="number"
              domain={[0, 100]}
              interval={0}
              ticks={Array.from({ length: 9 }, (_, i) => i * 12.5)}
              hide
            />
            <ReferenceLine x={curve.values[0]} stroke="#aec2c9" strokeDasharray="3 3" />
            <YAxis
              hide
              domain={[0, 1]}
              interval={0}
              ticks={Array.from({ length: 8 }, (_, i) => i / 7)}
            />
            <Area
              activeDot={false}
              type="monotone"
              dataKey="value"
              stroke="#d7e1e3"
              strokeWidth={0.7}
              fill="#cbd9de"
              fillOpacity={0.08}
              isAnimationActive={false}
            />
            <Area
              type="monotone"
              dataKey="value"
              clipPath={`url(#${clipId}-clip)`}
              tooltipType="none"
              activeDot={false}
              stroke="#fff"
              strokeWidth={1}
              fill="#afc2c9"
              fillOpacity={0.5}
              isAnimationActive={false}
            />
            <ReferenceDot
              x={0}
              y={density[0].value}
              r={1.6}
              fill="#fff"
              stroke="none"
              ifOverflow="visible"
            />
            <ReferenceDot
              x={100}
              y={density[100].value}
              r={1.6}
              fill="#fff"
              stroke="none"
              ifOverflow="visible"
            />
            {[20, 50, 80].map((x) => (
              <ReferenceDot key={x} x={x} y={0} shape={<DensityMarker />} ifOverflow="visible" />
            ))}
            <ReferenceDot
              x={curve.values[0]}
              y={1}
              shape={<DensityMarker fill="#607e87" rounded />}
              ifOverflow="visible"
            />
            <ReferenceDot
              x={curve.values[0]}
              y={0}
              shape={<DensityMarker fill="#aec2c9" rounded />}
              ifOverflow="visible"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.axisLabels}>
        <span>Low density</span>
        <span>Medium density</span>
        <span>High density</span>
      </div>
    </ChartCard>
  );
}

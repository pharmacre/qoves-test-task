import styles from "../PersonalizedAesthetics.module.scss";
import { BrowsChart } from "./brows-chart/BrowsChart";
import { DensityChart } from "./density-chart/DensityChart";
import { LipsChart } from "./lips-chart/LipsChart";
import { PigmentChart } from "./pigment-chart/PigmentChart";
import { SymmetryChart } from "./symmetry-chart/SymmetryChart";
import { ThirdsChart } from "./thirds-chart/ThirdsChart";

export function AnalysisCharts() {
  return (
    <div className={styles.charts} data-analysis-charts>
      <BrowsChart />
      <DensityChart />
      <LipsChart />
      <PigmentChart />
      <ThirdsChart />
      <SymmetryChart />
    </div>
  );
}

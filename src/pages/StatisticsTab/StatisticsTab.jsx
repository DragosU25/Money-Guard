import React from "react";

import styles from "./StatisticsTab.module.css";
import StatisticsDashboard from "../../components/StatisticsDashboard/StatisticsDashboard";
import Chart from "../../components/Chart/Chart";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";

export default function StatisticsTab() {
  return (
    <div className={styles.statisticsContainer}>
      <div className={styles.statisticsTitleAndChartContainer}>
        <h1 className={styles.statisticsTitle}>Statistics</h1>
        <Chart />
      </div>
      <div className={styles.statisticsDashboardAndTableContainer}>
        <StatisticsDashboard />
        <StatisticsTable />
      </div>
    </div>
  );
}

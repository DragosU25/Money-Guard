import React from "react";

import StatisticsDashboard from "../../components/StatisticsDashboard/StatisticsDashboard";
import Chart from "../../components/Chart/Chart";
import StatisticsTable from "../../components/StatisticsTable/StatisticsTable";
import { useStatistics } from "../../hooks/useStatistics";

import Loader from "../../components/commonComponents/Loader/Loader";

import styles from "./StatisticsTab.module.css";

export default function StatisticsTab() {
  const { statisticsLoading } = useStatistics();

  return (
    <div className={styles.statisticsContainer}>
      {statisticsLoading && <Loader />}

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

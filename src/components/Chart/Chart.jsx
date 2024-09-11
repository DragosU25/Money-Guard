import React from "react";
// import { Doughnut } from "react-chartjs-2";
// import "chart.js/auto";
import { useStatistics } from "../../hooks/useStatistics";

import styles from "./Chart.module.css";

export default function Chart() {
  const { statisticsTransactions } = useStatistics();
  //   console.log(statisticsTransactions.periodTotal);

  return (
    <div className={styles.chartContainer}>
      <p className={styles.chartBalance}>
        <span>₴</span>
        {statisticsTransactions?.periodTotal
          ? Number(statisticsTransactions.periodTotal).toFixed(2)
          : Number(0).toFixed(2)}
      </p>
      {/* <Doughnut /> */}
    </div>
  );
}

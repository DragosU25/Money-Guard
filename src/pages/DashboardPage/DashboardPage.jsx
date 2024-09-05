import React from "react";
import styles from "./DashboardPage.module.css";
import Header from "../../components/Header/Header";

function DashboardPage() {
  return (
    <div className={styles.dashboardContainer}>
      <Header />
    </div>
  );
}

export default DashboardPage;

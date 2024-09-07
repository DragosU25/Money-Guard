import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./DashboardPage.module.css";

function DashboardPage() {
  return (
    <div className={styles.dashboardContainer}>
      <Outlet />
    </div>
  );
}

export default DashboardPage;

import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

import Loader from "../../components/commonComponents/Loader/Loader";

import styles from "./DashboardPage.module.css";

function DashboardPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Sidebar />
        <div className={styles.dashboardContainer}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
}

export default DashboardPage;

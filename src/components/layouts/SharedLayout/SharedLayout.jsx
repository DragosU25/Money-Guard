import React, { Suspense } from "react";
import Header from "../../../components/Header/Header";
import Loader from "../../commonComponents/Loader/Loader";
import DashboardPage from "../../../pages/DashboardPage/DashboardPage";
import Sidebar from "../../Sidebar/Sidebar";

import { useAuth } from "../../../hooks/useAuth";

import styles from "./SharedLayout.module.css";

function SharedLayout() {
  const { isLoggedIn } = useAuth();
  // console.log(isLoggedIn);

  return (
    <>
      {isLoggedIn && <Header />}
      {!isLoggedIn && (
        <main className={styles.main}>
          <Sidebar />
          {/* <Suspense fallback={<Loader />}> */}
          <DashboardPage />
          {/* </Suspense> */}
        </main>
      )}
    </>
  );
}

export default SharedLayout;

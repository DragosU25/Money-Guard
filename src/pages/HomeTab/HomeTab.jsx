import React from "react";
import Balance from "../../components/Balance/Balance";

import styles from "./HomeTab.module.css";
import TransactionsList from "../../components/TransactionsList/TransactionsList";

export default function HomeTab() {
  return (
    <div className={styles.homeTabContainer}>
      <div className={styles.balanceContainer}>
        <Balance />
      </div>
      <TransactionsList />
    </div>
  );
}

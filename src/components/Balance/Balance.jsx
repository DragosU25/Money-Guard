import React from "react";
import { useAuth } from "../../hooks/useAuth";

import styles from "./Balance.module.css";

export default function Balance() {
  const { balanceAuth } = useAuth();
  const balance = (Math.round(balanceAuth * 100) / 100).toFixed(2);

  return (
    <div className={styles.mainCont}>
      <p className={styles.balanceTitle}>Your balance</p>
      <div className={styles.sumContainer}>
        <span className={styles.sumContainer}>₴</span>
        {balance}
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";

import styles from "./Balance.module.css";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/operationsAuth";

export default function Balance() {
  const dispatch = useDispatch();
  const { balanceAuth } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const balance = balanceAuth;

  return (
    <div className={styles.mainCont}>
      <p className={styles.balanceTitle}>Your balance</p>
      <div className={styles.sumContainer}>
        <span className={styles.sumContainer}>₴</span>
        {balance ? (Math.round(balanceAuth * 100) / 100).toFixed(2) : 0.0}
      </div>
    </div>
  );
}

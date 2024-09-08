import React from "react";
import { Link } from "react-router-dom";

import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}>
      <h1>Sidebar</h1>
      <div className={styles.linksContainer}>
        <Link to={"/home"}>Home</Link>
        <Link to={"/statistics"}>Statistics</Link>
      </div>
    </aside>
  );
}

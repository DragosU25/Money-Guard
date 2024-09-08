import React from "react";
import LogoutButton from "../LogoutButton/LogoutButton";
import styles from "./Header.module.css";
import LogoContainer from "../LogoContainer/LogoContainer";

import { useAuth } from "../../hooks/useAuth";

function Header() {
  const { isLoggedIn, user } = useAuth();

  return (
    <header className={styles.header}>
      <LogoContainer className={styles.logoContainer} />
      {isLoggedIn && (
        <div className={styles.userContainer}>
          <p> {user.username}</p>
          <span>|</span>
          <div className={styles.logoutContainer}>
            <LogoutButton />
            <p className={styles.exit}>Exit</p>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

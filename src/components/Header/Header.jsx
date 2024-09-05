import React from "react";
import { useSelector } from "react-redux";
import LogoutButton from "../LogoutButton/LogoutButton";
import { selectIsLoggedIn, selectUser } from "../../services/auth";
import styles from "./Header.module.css";
import LogoContainer from "../LogoContainer/LogoContainer";

function Header() {
  const user = useSelector(selectUser);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={styles.container}>
      <header>
        <LogoContainer className={styles.logoContainer} />
        {isLoggedIn && (
          <div className={styles.userContainer}>
            <p> {user.username}</p>
            <span>|</span>
            <LogoutButton />
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;

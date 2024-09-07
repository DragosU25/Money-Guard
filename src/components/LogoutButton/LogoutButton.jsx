import React from "react";

import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operationsAuth";

import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./LogoutButon.module.css";

function LogoutButton() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <button onClick={handleLogout}>
      <FontAwesomeIcon icon={faRightFromBracket} className={styles.icon} />
    </button>
  );
}

export default LogoutButton;

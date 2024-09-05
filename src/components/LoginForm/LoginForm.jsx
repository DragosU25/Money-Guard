import React, { useState } from "react";
import { logIn } from "../../services/operations";
import { useDispatch } from "react-redux";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }))
      .unwrap()
      .then(() => {})
      .catch((error) => {
        setErrorMessage(
          error.message || "You have entered an invalid username or password."
        );
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputWrapper}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.inputIcon} />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          placeholder="E-mail"
          required
        />
      </div>
      <div className={styles.inputWrapper}>
        <FontAwesomeIcon icon={faLock} className={styles.inputIcon} />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" className={styles.button}>
        Log in
      </button>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      <Link to="/register" className={styles.navLink}>
        Register
      </Link>
    </form>
  );
}

export default LoginForm;

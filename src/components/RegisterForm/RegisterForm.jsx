import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../services/operations";
import styles from "./RegisterForm.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

function RegisterForm() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if passwords match
    if (password !== passwordConfirm) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    dispatch(register({ username, email, password }))
      .unwrap()
      .then(() => {
        // Clear inputs only if registration is successful
        setName("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");

        setErrorMessage("");
      })
      .catch((err) => {
        // Do not clear the inputs if there's an error
        setErrorMessage(err || "An unknown error occurred.");
      });
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;

    if (password.length > 7) strength += 1;
    if (password.length > 10) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    return strength;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(calculatePasswordStrength(newPassword));
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <div className={styles.inputWrapper}>
            <FontAwesomeIcon icon={faUser} className={styles.inputIcon} />
            <input
              className={styles.input}
              type="text"
              value={username}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>

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
              onChange={handlePasswordChange}
              className={styles.input}
              placeholder="Password"
              required
            />
          </div>

          <div className={styles.inputWrapper}>
            <FontAwesomeIcon icon={faLock} className={styles.inputIcon} />
            <input
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className={styles.input}
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className={styles.passwordStrengthBar}>
            <div
              className={styles.passwordStrengthIndicator}
              style={{
                width: `${(passwordStrength / 5) * 100}%`,
                backgroundColor:
                  passwordStrength < 3
                    ? "red"
                    : passwordStrength < 4
                    ? "orange"
                    : "green",
              }}
            ></div>
          </div>
        </div>

        <button className={styles.button} type="submit">
          Register
        </button>

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        <Link to="/login" className={styles.navLink}>
          Log in
        </Link>
      </form>
    </div>
  );
}

export default RegisterForm;

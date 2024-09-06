import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../services/operations";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import Input from "../commonComponents/Input/Input";
import Button from "../commonComponents/Button";
import useToggle from "../../hooks/useToggle";

import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

import styles from "./RegisterForm.module.css";

function RegisterForm() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const [type, setType] = useState("password");
  const [eyeVisible, toggleEyeVisible] = useToggle(true);
  const [closedEyeVisible, toggleClosedEyeVisible] = useToggle(false);

  const [confirmType, setConfirmType] = useState("password");
  const [confirmEyeVisible, toggleConfirmEyeVisible] = useToggle(true);
  const [confirmClosedEyeVisible, toggleConfirmClosedEyeVisible] =
    useToggle(false);

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
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputs}>
        <div className={styles.inputWrapper}>
          <FontAwesomeIcon icon={faUser} className={styles.inputIcon} />

          <Input
            autoComplete="on"
            paddingLeft="53.5px"
            width="100%"
            type="text"
            value={username}
            handleChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
            required={true}
          />
        </div>

        <div className={styles.inputWrapper}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.inputIcon} />

          <Input
            autoComplete="on"
            paddingLeft="53.5px"
            width="100%"
            type="email"
            value={email}
            handleChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="E-mail"
            required={true}
          />
        </div>

        <div className={styles.inputWrapper}>
          <FontAwesomeIcon icon={faLock} className={styles.inputIcon} />

          {eyeVisible && (
            <VscEye
              onClick={() => {
                toggleEyeVisible();
                toggleClosedEyeVisible();
                setType("text");
              }}
              size="24px"
              className={styles.eyeIcon}
            />
          )}

          {closedEyeVisible && (
            <VscEyeClosed
              onClick={() => {
                toggleEyeVisible();
                toggleClosedEyeVisible();
                setType("password");
              }}
              size="24px"
              className={styles.eyeIcon}
            />
          )}

          <Input
            autoComplete="on"
            paddingLeft="53.5px"
            width="100%"
            type={type}
            value={password}
            handleChange={handlePasswordChange}
            placeholder="Password"
            required={true}
          />
        </div>

        <div className={styles.inputWrapper}>
          <FontAwesomeIcon icon={faLock} className={styles.inputIcon} />

          {confirmEyeVisible && (
            <VscEye
              onClick={() => {
                toggleConfirmEyeVisible();
                toggleConfirmClosedEyeVisible();
                setConfirmType("text");
              }}
              size="24px"
              className={styles.eyeIcon}
            />
          )}

          {confirmClosedEyeVisible && (
            <VscEyeClosed
              onClick={() => {
                toggleConfirmEyeVisible();
                toggleConfirmClosedEyeVisible();
                setConfirmType("password");
              }}
              size="24px"
              className={styles.eyeIcon}
            />
          )}

          <Input
            autoComplete="on"
            paddingLeft="53.5px"
            width="100%"
            type={confirmType}
            value={passwordConfirm}
            handleChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder="Confirm Password"
            required={true}
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
            }}></div>
        </div>
      </div>

      <div className={styles.buttonsContainer}>
        <Button variant="colored" type="submit">
          Register
        </Button>

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        <Button type="button">
          <Link to="/login" className={styles.navLink}>
            Log in
          </Link>{" "}
        </Button>
      </div>
    </form>
  );
}

export default RegisterForm;

import React, { useState } from "react";
import { logIn } from "../../redux/auth/operationsAuth";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Input from "../commonComponents/Input/Input";
import Button from "../commonComponents/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import styles from "./LoginForm.module.css";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import useToggle from "../../hooks/useToggle";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const [type, setType] = useState("password");
  const [eyeVisible, toggleEyeVisible] = useToggle(true);
  const [closedEyeVisible, toggleClosedEyeVisible] = useToggle(false);

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
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
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
            handleChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            required={true}
          />
        </div>
        <div className={styles.buttonsContainer}>
          <Button variant="colored" type="submit">
            Log in
          </Button>

          {errorMessage && <p className={styles.error}>{errorMessage}</p>}

          <Button type="button">
            <Link to="/register" className={styles.navLink}>
              Register
            </Link>{" "}
          </Button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;

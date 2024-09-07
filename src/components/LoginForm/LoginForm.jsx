import React from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../services/operations";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import useFormValidation from "../../Hooks/useFormValidation";
import validateLogin from "../../Hooks/validateLogin";
import usePasswordVisibility from "../../Hooks/usePasswordVisibility";
import useFormTouched from "../../Hooks/useFormTouched";
import Button from "../commonComponents/Button/Button";

function LoginForm() {
  const { fields, setFields, errors, validateFields } = useFormValidation(
    {
      email: "",
      password: "",
    },
    validateLogin
  );
  const { passwordVisible, togglePasswordVisibility } = usePasswordVisibility();
  const { touched, handleBlur } = useFormTouched();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) return;

    try {
      await dispatch(logIn(fields)).unwrap();
      console.log("Login successful");
    } catch (error) {
      console.error("Login failed:", error);
      setFields((prevFields) => ({
        ...prevFields,
        errorMessage:
          error.message || "You have entered an invalid username or password.",
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.inputIcon} />
          <input
            type="email"
            value={fields.email}
            onChange={(e) => setFields({ ...fields, email: e.target.value })}
            onBlur={() => handleBlur("email")}
            className={styles.input}
            placeholder="E-mail"
            required
          />
        </div>
        {touched.email && !fields.email && (
          <p className={styles.inputError}>Required</p>
        )}
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <FontAwesomeIcon icon={faLock} className={styles.inputIcon} />
          <input
            type={passwordVisible ? "text" : "password"}
            value={fields.password}
            onChange={(e) => setFields({ ...fields, password: e.target.value })}
            onBlur={() => handleBlur("password")}
            className={styles.input}
            placeholder="Password"
            required
          />
          <FontAwesomeIcon
            icon={passwordVisible ? faEyeSlash : faEye}
            className={styles.togglePasswordIcon}
            onClick={togglePasswordVisibility}
          />
        </div>
        {touched.password && !fields.password && (
          <p className={styles.inputError}>Required</p>
        )}
      </div>
      {fields.errorMessage && (
        <p className={styles.error}>{fields.errorMessage}</p>
      )}
      <button type="submit" className={styles.button}>
        Log In
      </button>
      <Link to="/register" className={styles.navLink}>
        Register
      </Link>
    </form>
  );
}

export default LoginForm;

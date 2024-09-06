import React from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../services/operations";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import useFormValidation from "../../Hooks/useFormValidation";
import usePasswordVisibility from "../../Hooks/usePasswordVisibility";
import useFormTouched from "../../Hooks/useFormTouched";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function LoginForm() {
  const { fields, setFields, errors, validateFields } = useFormValidation({
    email: "",
    password: "",
  });
  const { passwordVisible, togglePasswordVisibility } = usePasswordVisibility();
  const { touched, handleBlur } = useFormTouched();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (!validateFields()) return;

    dispatch(logIn(fields))
      .unwrap()
      .then(() => {
        // Handle successful login
      })
      .catch((error) => {
        setFields((prevFields) => ({
          ...prevFields,
          errorMessage:
            error.message ||
            "You have entered an invalid username or password.",
        }));
      });
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
          {touched.email && errors.email === "" && (
            <p className={styles.inputError}>Required</p>
          )}
          {touched.email &&
            errors.email &&
            !/^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(fields.email) && (
              <p className={styles.inputError}>Enter a valid email</p>
            )}
        </div>
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
          {touched.password && errors.password === "" && (
            <p className={styles.inputError}>Required</p>
          )}
        </div>
      </div>
      {fields.errorMessage && (
        <p className={styles.error}>{fields.errorMessage}</p>
      )}
      <button type="submit" className={styles.button}>
        Log in
      </button>
      <Link to="/register" className={styles.navLink}>
        Register
      </Link>
    </form>
  );
}

export default LoginForm;

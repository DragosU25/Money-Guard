import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../services/operations";
import styles from "./RegisterForm.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import useFormValidation from "../../Hooks/useFormValidation";
import validateRegister from "../../Hooks/validateRegister";
import usePasswordVisibility from "../../Hooks/usePasswordVisibility";
import usePasswordStrength from "../../Hooks/usePasswordStrength";
import useFormTouched from "../../Hooks/useFormTouched";

function RegisterForm() {
  const { fields, setFields, errors, validateFields } = useFormValidation(
    {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validateRegister
  );

  const { passwordVisible, togglePasswordVisibility } = usePasswordVisibility();
  const dispatch = useDispatch();
  const { touched, handleBlur } = useFormTouched();
  const passwordStrength = usePasswordStrength(fields.password);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateFields()) return;

    const { passwordConfirm, ...fieldsWithoutPasswordConfirm } = fields;

    dispatch(register(fieldsWithoutPasswordConfirm))
      .unwrap()
      .then(() => {
        setFields({
          username: "",
          email: "",
          password: "",
          passwordConfirm: "",
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputs}>
        {/* Username Input */}
        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <FontAwesomeIcon icon={faUser} className={styles.inputIcon} />
            <input
              className={styles.input}
              type="text"
              value={fields.username}
              onChange={(e) =>
                setFields({ ...fields, username: e.target.value })
              }
              onBlur={() => handleBlur("username")}
              placeholder="Name"
              required
            />
          </div>
          {touched.username && !fields.username && (
            <p className={styles.inputError}>Required</p>
          )}
        </div>

        {/* Email Input */}
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
          {touched.email &&
            !/^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(fields.email) && (
              <p className={styles.inputError}>Enter a valid email</p>
            )}
        </div>

        {/* Password Input */}
        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <FontAwesomeIcon icon={faLock} className={styles.inputIcon} />
            <input
              type={passwordVisible ? "text" : "password"}
              value={fields.password}
              onChange={(e) =>
                setFields({ ...fields, password: e.target.value })
              }
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

        {/* Confirm Password Input */}
        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <FontAwesomeIcon icon={faLock} className={styles.inputIcon} />
            <input
              type={passwordVisible ? "text" : "password"}
              value={fields.passwordConfirm}
              onChange={(e) =>
                setFields({ ...fields, passwordConfirm: e.target.value })
              }
              onBlur={() => handleBlur("passwordConfirm")}
              className={styles.input}
              placeholder="Confirm password"
              required
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEyeSlash : faEye}
              className={styles.togglePasswordIcon}
              onClick={togglePasswordVisibility}
            />
          </div>
          {touched.passwordConfirm && !fields.passwordConfirm && (
            <p className={styles.inputError}>Required</p>
          )}
          {touched.passwordConfirm &&
            fields.password !== fields.passwordConfirm && (
              <p className={styles.inputError}>Passwords must match</p>
            )}
        </div>

        {/* Password Strength Indicator */}
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
      <button type="submit" className={styles.button}>
        Register
      </button>
      <Link to="/login" className={styles.navLink}>
        Log in
      </Link>
    </form>
  );
}

export default RegisterForm;

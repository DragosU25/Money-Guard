import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Input.module.css";

export default function Input({
  inputContainer,
  type,
  placeholder,
  required,
  variant = "",
  className,
  name,
  handleChange,
  width,
  value,
  paddingLeft,
  autoComplete,
}) {
  return (
    <div style={{ width: `${width}` }} className={styles.inputContainer}>
      <input
        autoComplete={autoComplete}
        style={{ paddingLeft: `${paddingLeft}` }}
        onChange={handleChange}
        name={name}
        className={clsx(
          styles.input,
          className,
          variant === "center" ? styles.inputCenter : styles.input
        )}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
      />
    </div>
  );
}

Input.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paddingLeft: PropTypes.string,
  autoComplete: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  name: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  handleChange: PropTypes.func,
  required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  placeholder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

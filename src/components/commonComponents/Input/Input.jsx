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
  children,
  width,
  isVisible,
  value,
}) {
  return (
    <div style={{ width: `${width}` }} className={inputContainer}>
      <input
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
      {isVisible && <p className={styles.inputInfo}>{children}</p>}
    </div>
  );
}

Input.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  handleChange: PropTypes.func,
  required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  placeholder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isVisible: PropTypes.bool,
};

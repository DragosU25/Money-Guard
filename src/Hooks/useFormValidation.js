import { useState } from "react";

const useFormValidation = (initialValues) => {
  const [fields, setFields] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    let isValid = true;
    let newErrors = {};

    // Validare simplă exemplu
    if (!fields.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(fields.email)) {
      newErrors.email = "Enter a valid email";
      isValid = false;
    }

    if (!fields.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return { fields, setFields, errors, validateFields };
};

export default useFormValidation;

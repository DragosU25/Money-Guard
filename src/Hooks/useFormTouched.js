import { useState } from "react";

const useFormTouched = () => {
  const [touched, setTouched] = useState({
    username: false,
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  return {
    touched,
    handleBlur,
  };
};

export default useFormTouched;

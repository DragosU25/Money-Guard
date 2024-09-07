const validateRegister = (fields) => {
  const newErrors = {};
  if (!fields.username) {
    newErrors.username = "Username is required";
  }
  if (!fields.email) {
    newErrors.email = "Email is required";
  }
  if (!fields.password) {
    newErrors.password = "Password is required";
  }
  if (!fields.passwordConfirm) {
    newErrors.passwordConfirm = "Password confirmation is required";
  } else if (fields.password !== fields.passwordConfirm) {
    newErrors.passwordConfirm = "Passwords do not match";
  }
  return newErrors;
};

export default validateRegister;

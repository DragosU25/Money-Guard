import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../../services/auth"; // Import selector

const PrivateRoute = ({ component, redirectTo }) => {
  const { isLoggedIn } = useSelector(selectAuth);

  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;

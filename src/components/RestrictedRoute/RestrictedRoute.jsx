import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../../services/auth"; // Import selector

const RestrictedRoute = ({ component, redirectTo }) => {
  const { isLoggedIn } = useSelector(selectAuth);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

export default RestrictedRoute;

import React from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import notFound from "../../assets/images/icons/browser-error-404-icon.svg";
import style from "./NotFoundPage.module.css";
import Button from "../../components/commonComponents/Button";

export default function NotFoundPage({ initPage }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Use the backLink or the initial page to navigate back
  const backLink = location.state?.from || `/${initPage}`;

  function handleRedirect() {
    // Navigate to the backLink with replace: true to avoid adding it to the history stack
    navigate(backLink, { replace: true });
  }

  return (
    <div className={style.notFoundContainer}>
      <img className={style.notFoundImg} src={notFound} alt="Not Found" />
      <p className={style.notFoundText}>The route does not exist!</p>
      <Button
        className={style.button}
        handleClick={handleRedirect}
        variant="colored"
      >
        &lt;&lt;&lt; Go back to main page
      </Button>
    </div>
  );
}

NotFoundPage.propTypes = {
  initPage: PropTypes.string,
};

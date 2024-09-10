import React from "react";
import PropTypes from "prop-types";

import notFound from "../../assets/images/icons/browser-error-404-icon.svg";

import { useLocation, useNavigate } from "react-router-dom";

import style from "./NotFoundPage.module.css";
import Button from "../../components/commonComponents/Button";

export default function NotFoundPage({ initPage }) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);

  const backLink = location.state?.from ?? `/${initPage}`;
  console.log(backLink);

  function handleRedirect() {
    navigate(`${backLink}`, { replace: true });
  }

  return (
    <div className={style.notFoundContainer}>
      <img className={style.notFoundImg} src={notFound} alt="Not Found" />
      <p className={style.notFoundText}>The route does not exist !</p>

      <Button
        className={style.button}
        handleClick={handleRedirect}
        variant="colored">
        &lt;&lt;&lt; Go back to main page
      </Button>
    </div>
  );
}

NotFoundPage.propTypes = {
  initPage: PropTypes.string,
};

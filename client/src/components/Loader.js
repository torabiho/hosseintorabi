import React from "react";
import PropTypes from "prop-types";
import { loadingStates } from "../constants";
import "./Loader.scss";

export const Loader = ({ loadingStatus }) => {
  return (
    <header id="home" className="header--loader">
      <div className="loader__container">
        {loadingStatus === loadingStates.LOADING ? (
          <>
            <svg className="loader__icon" viewBox="25 25 50 50">
              <circle
                className="loader__path"
                cx="50"
                cy="50"
                r="20"
                fill="none"
                strokeWidth="2"
              />
            </svg>
            <h1 className="loader__text">Loading ...</h1>
          </>
        ) : (
          <h1 className="loader__text">
            Sorry! <br /> The content cannot be loaded. <br /> Please try again
            later{" "}
          </h1>
        )}
      </div>
    </header>
  );
};

Loader.propTypes = {
  loadingStatus: PropTypes.oneOf([
    loadingStates.LOADING,
    loadingStates.LOADED,
    loadingStates.ERROR,
  ]),
};

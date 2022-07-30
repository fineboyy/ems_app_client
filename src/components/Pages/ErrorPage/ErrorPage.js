import React from "react";

import "./ErrorPage.css";
export const ErrorPage = () => {

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="ErrorPage">
        <div className="error-text">
          <h1>Oops! Something went wrong.</h1>
          <p>We are currently unable to display this page</p>

          <button onClick={reloadPage}>Try Again</button>
        </div>
    </div>
  );
};

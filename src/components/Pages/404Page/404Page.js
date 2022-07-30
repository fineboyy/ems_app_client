import React from "react";
import { useNavigate } from "react-router-dom";

import "./404Page.css";
export const NotFoundPage = () => {
    document.title = "404 Page Not Found"
  const navigate = useNavigate();

  return (

      <div className="NotFoundPage">
        <div className="error-text">
          <span className="material-symbols-sharp frown-icon">
            sentiment_dissatisfied
          </span>
          <h1>Awww, snap.</h1>
          <p>The page you requested for cannot be found</p>

          <button onClick={() => navigate("/")}>
            <span className="material-symbols-sharp">arrow_back</span>
            Back to Homepage
          </button>
        </div>
      </div>
  );
};

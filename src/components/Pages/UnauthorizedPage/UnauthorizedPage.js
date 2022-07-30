import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import TopBar from "../../TopBar/TopBar";

import "./UnauthorizedPage.css";
export const UnauthorizedPage = () => {
  const navigate = useNavigate();
  document.title = "503 Unauthorized"

  return (
    <div className="UnauthorizedPage container">
      <Sidebar />
      <main>
        <TopBar pageName={"Unauthorized"} />

        <div className="error-text">
          <span className="material-symbols-sharp frown-icon danger">
            block
          </span>
          <h1>Sorry, but no.</h1>
          <p>You are currently not authorized to view this page</p>

          <button onClick={() => navigate(-1)}>
            <span className="material-symbols-sharp">arrow_back</span>
            Go Back
          </button>
        </div>
      </main>
    </div>
  );
};
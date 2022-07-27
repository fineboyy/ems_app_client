import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import TopBar from "../../TopBar/TopBar";
import { useDispatch } from "react-redux";

import "./ErrorPage.css";
// import ActionTypes from "../../../redux/constants";
export const ErrorPage = () => {
  const dispatch = useDispatch();

  const reloadPage = () => {
    // dispatch({ type: ActionTypes.NETWORK_ERROR, payload: {} });
    window.location.reload();
  };

  return (
    <div className="ErrorPage container">
      <Sidebar />
      <main>
        <TopBar  pageName={"Error"}  />

        <div className="error-text">
          <h1>Oops! Something went wrong.</h1>
          <p>We are currently unable to display this page</p>

          <button onClick={reloadPage}>Try Again</button>
        </div>
      </main>
    </div>
  );
};

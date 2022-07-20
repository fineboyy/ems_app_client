import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import TopBar from "../../TopBar/TopBar";
import { useDispatch } from "react-redux";

import "./ErrorPage.css";
import ActionTypes from "../../../redux/constants";
export const ErrorPage = ({ sidebarVisible, setSidebarVisible }) => {
    const dispatch = useDispatch()
  return (
    <div className="ErrorPage container">
      <Sidebar
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
      />
      <main>
        <TopBar
          sidebarVisible={sidebarVisible}
          setSidebarVisible={setSidebarVisible}
          pageName={"Error"}
        />


       <div style={{marginTop: "10rem", textAlign: "center"}}>
       <h1>Oops! Something went wrong.</h1>
        <p>We are currently unable to display this page</p>

        <button onClick={() => {dispatch({type: ActionTypes.NETWORK_ERROR, payload : {}})}}>Try Again</button>
       </div>



      </main>
    </div>
  );
};
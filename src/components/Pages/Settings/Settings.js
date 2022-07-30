import React from "react";

import "./Settings.css";
import { Outlet } from "react-router-dom";
import { UserProfile } from "./UserProfile/UserProfile";
export const Settings = ({ sidebarVisible, setSidebarVisible }) => {
  document.title = "Settings - Div.Co Human Resource Management Software"
  return (
    <div className="Settings">

        <section className="settings-container">
          <UserProfile />
          <Outlet />          
        </section>
    </div>
  );
};

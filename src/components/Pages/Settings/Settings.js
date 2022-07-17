import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import TopBar from "../../TopBar/TopBar";

import "./Settings.css";
import { Outlet } from "react-router-dom";
import { UserProfile } from "./UserProfile/UserProfile";
export const Settings = ({ sidebarVisible, setSidebarVisible }) => {
  document.title = "Settings - Div.Co Human Resource Management Software"
  return (
    <div className="Settings container">
      <Sidebar
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
      />
      <main>
        <TopBar
          sidebarVisible={sidebarVisible}
          setSidebarVisible={setSidebarVisible}
          pageName={"Settings"}
        />

        <section className="settings-container">

          <UserProfile />
          

          <Outlet />

          
        </section>
      </main>
    </div>
  );
};

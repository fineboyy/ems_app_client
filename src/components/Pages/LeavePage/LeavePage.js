import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import TopBar from "../../TopBar/TopBar";
import { InfoCards } from "./InfoCards/InfoCards";

import "./LeavePage.css";
import { LeaveTable } from "./LeaveTable/LeaveTable";
import { LeaveTypes } from "./LeaveTypes/LeaveTypes";
export const LeavePage = ({ sidebarVisible, setSidebarVisible }) => {

  document.title = "Leave Management - Div.Co Human Resource Management System"

  return (
    <div className="LeavePage container">
      <Sidebar
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
      />
      <main>
        <TopBar
          sidebarVisible={sidebarVisible}
          setSidebarVisible={setSidebarVisible}
          pageName={"Leave Management"}
        />

        <InfoCards />

        <LeaveTypes />

        <LeaveTable tableHeader="Unresolved Leave Applications" />
        <LeaveTable tableHeader="Leave Records List" />
        
      </main>
    </div>
  );
};

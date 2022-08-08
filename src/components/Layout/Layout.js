import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";


import './Layout.css'
const Layout = () => {
  return (
    <div className="container">
      <Sidebar />

      <div className="main-wrapper">
        <main>
          <TopBar pageName={"dashboard"} />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

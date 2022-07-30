import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

export const Modal = () => {
  return (
    <div className="MainModal container">
      <Sidebar />

      <div className="main-wrapper">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

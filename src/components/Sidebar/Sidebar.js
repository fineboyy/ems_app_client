import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../index.css";
import "./Sidebar.css";

const Sidebar = ({ sidebarVisible, setSidebarVisible }) => {
  return (
    <aside className={sidebarVisible ? "Sidebar translate-sidebar" : "Sidebar"}>
      <div className="sidebar-top">
        <span className="material-symbols-sharp logo">hdr_weak</span>
        <h2>
          Div.Co <br /> EMS{" "}
        </h2>
        <span
          className="material-symbols-sharp close-btn"
          onClick={() => setSidebarVisible(false)}
        >
          {" "}
          close{" "}
        </span>
      </div>

      <div className="sidebar">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <span className="material-symbols-sharp"> format_list_bulleted </span>
          <p>Dashboard</p>
        </NavLink>
        <NavLink
          to="/employees"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <span className="material-symbols-sharp"> group </span>
          <p>Employees</p>
        </NavLink>
        <NavLink
          to="/departments"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <span className="material-symbols-sharp"> domain </span>
          <p>Departments</p>
        </NavLink>
        <NavLink
          to="/employees/new"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <span className="material-symbols-sharp"> add_circle </span>
          <p>Add New</p>
        </NavLink>
        <div>
          <Link to="#" className="nav-item">
            <span className="material-symbols-sharp"> help </span>
            <p>Help</p>
          </Link>
          <Link to="#" className="nav-item">
            <span className="material-symbols-sharp"> settings </span>
            <p>Settings</p>
          </Link>
          <Link to="/login" className="nav-item">
            <span className="material-symbols-sharp"> logout </span>
            <p>Logout</p>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

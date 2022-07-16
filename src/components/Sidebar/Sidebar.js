import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../index.css";
import "./Sidebar.css";

const Sidebar = ({ sidebarVisible, setSidebarVisible }) => {

  useEffect(() => {
    if(sidebarVisible) {
      setSidebarVisible(false)

    }
  }, [])

  return (
    <aside className={sidebarVisible ? "Sidebar translate-sidebar" : "Sidebar"}>
      <div className="sidebar-top">
        <span className="material-symbols-sharp logo">hdr_weak</span>
        <h2>
          Div.Co <br /> HRMS{" "}
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
          to="/leave-management"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <span className="material-symbols-sharp"> work_history </span>
          <p>Leave Management</p>
        </NavLink>
        <div>
          <Link to="/help" className="nav-item">
            <span className="material-symbols-sharp"> help </span>
            <p>Help</p>
          </Link>
          {/*  */}

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }

          >
            <span className="material-symbols-sharp"> settings </span>
            <p>Settings</p>
          </NavLink>

          {/*  */}
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

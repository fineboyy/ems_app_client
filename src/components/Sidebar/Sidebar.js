import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../index.css";
import "./Sidebar.css";

import { setSidebarVisible } from "../../features/sidebarVisibility/sidebarVisibilitySlice";
import { logOut as clearCredentials } from "../../features/auth/authSlice"
import { useSignOutMutation } from "../../features/auth/authApiSlice";
import Loader from "../Loader/Loader";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ signOut, { isLoading } ] = useSignOutMutation()
  const sidebarVisible = useSelector((state) => state.sidebarVisibility);

  useEffect(() => {
    dispatch(setSidebarVisible(false))
  }, [dispatch])
    
  const logOutUser = async () => {
    try {
      await signOut()
      dispatch(clearCredentials())
      navigate('/login')
      
    } catch (error) {
      console.log("Error", error);
    }
  }
  let className = sidebarVisible ? "Sidebar translate-sidebar" : "Sidebar ";

  if(isLoading) return <Loader />
  
  return (
    <aside className={className}>
      <div className="sidebar-top">
        <span className="material-symbols-sharp logo">hdr_weak</span>
        <h2>
          Div.Co <br /> HRMS{" "}
        </h2>
        <span
          className="material-symbols-sharp close-btn"
          onClick={() => dispatch(setSidebarVisible(false))}
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
          onClick={() => dispatch(setSidebarVisible(false))}
        >
          <span className="material-symbols-sharp"> dashboard </span>
          <p>Dashboard</p>
        </NavLink>
        <NavLink
          to="/employees"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
          onClick={() => dispatch(setSidebarVisible(false))}
        >
          <span className="material-symbols-sharp"> group </span>
          <p>Employees</p>
        </NavLink>
        <NavLink
          to="/departments"
          className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
        onClick={() => dispatch(setSidebarVisible(false))}
        >
          <span className="material-symbols-sharp"> domain </span>
          <p>Departments</p>
        </NavLink>
        <NavLink
          to="/leave-management"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
          onClick={() => dispatch(setSidebarVisible(false))}
          >
          <span className="material-symbols-sharp"> work_history </span>
          <p>Leave Management</p>
        </NavLink>

        <div>
          <Link to="/help" className="nav-item" onClick={() => dispatch(setSidebarVisible(false))}>
            <span className="material-symbols-sharp"> help </span>
            <p>Help</p>
          </Link>
    

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            onClick={() => dispatch(setSidebarVisible(false))}
          >
            <span className="material-symbols-sharp"> settings </span>
            <p>Settings</p>
          </NavLink>

 
          <a onClick={logOutUser} className="nav-item">
            <span className="material-symbols-sharp"> logout </span>
            <p>Logout</p>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

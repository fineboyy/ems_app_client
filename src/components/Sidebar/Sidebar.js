import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import '../../index.css'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <aside>
        <div class="top">
          <h2>EMS APPLICATION</h2>
          <span class="material-symbols-sharp" onclick="toggleSidebar()"> close </span>
        </div>

        <div class="sidebar">
          <NavLink to="/dashboard" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
            <span class="material-symbols-sharp"> format_list_bulleted </span>
            <p>Dashboard</p>
          </NavLink>
          <NavLink to="/employees" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
            <span class="material-symbols-sharp"> group </span>
            <p>Employees</p>
          </NavLink>
          <NavLink to="/departments" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
            <span class="material-symbols-sharp"> domain </span>
            <p>Departments</p>
          </NavLink>
          <Link to="/" class="nav-item">
            <span class="material-symbols-sharp"> add_circle </span>
            <p>Add</p>
          </Link>
          <div>
            <Link to="#" class="nav-item">
              <span class="material-symbols-sharp"> help </span>
              <p>Help</p>
            </Link>
            <Link to="#" class="nav-item">
              <span class="material-symbols-sharp"> settings </span>
              <p>Settings</p>
            </Link>
            <Link to="/login" class="nav-item">
              <span class="material-symbols-sharp"> logout </span>
              <p>Logout</p>
            </Link>
          </div>
        </div>
      </aside>
    )
}

export default Sidebar;
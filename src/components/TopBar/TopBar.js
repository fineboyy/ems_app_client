import React from "react";


import './TopBar.css'

const TopBar = ({sidebarVisible, setSidebarVisible}) => {
    return (
        <nav className="Topbar">
          <div className="brand">
            <h1>Div.Co Tech LLC</h1>
          </div>

          <div className="right-side">
            <div className="menu" onClick={() => setSidebarVisible(!sidebarVisible)}>
              <span className="material-symbols-sharp" > menu </span>
            </div>
            <div className="search">
              <input type="text" placeholder="Search..." />
              <span className="material-symbols-sharp"> search </span>
            </div>

            <div className="icons">
              <span className="material-symbols-sharp"> notifications </span>
              <span className="material-symbols-sharp"> person </span>
            </div>
          </div>
        </nav>
    )
}

export default TopBar;
import React from "react";


import './TopBar.css'

const TopBar = () => {
    return (
        <nav class="Topbar">
          <div class="brand">
            <h1>Company's Name</h1>
          </div>

          <div class="right-side">
            <div class="menu" onclick="toggleSidebar()">
              <span class="material-symbols-sharp"> menu </span>
            </div>
            <div class="search">
              <input type="text" placeholder="Search..." />
              <span class="material-symbols-sharp"> search </span>
            </div>

            <div class="icons">
              <span class="material-symbols-sharp"> notifications </span>
              <span class="material-symbols-sharp"> person </span>
            </div>
          </div>
        </nav>
    )
}

export default TopBar;
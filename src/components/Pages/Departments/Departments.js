import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'

import TopBar from '../../TopBar/TopBar'

export const Departments = ({sidebarVisible, setSidebarVisible}) => {
    return (
        <div className="container">
        <Sidebar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}  />

      <main>
        <TopBar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />
        
      </main>
    </div>
    )
}
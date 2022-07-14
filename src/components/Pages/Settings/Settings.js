import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import TopBar from '../../TopBar/TopBar'

export  const Settings = ({sidebarVisible, setSidebarVisible}) => {
    return (
      <div className='LeavePage container'>
          <Sidebar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}  />
          <main>
              <TopBar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} pageName={"Settings"} />
          </main>
      </div>
    )
  }

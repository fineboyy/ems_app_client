import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import TopBar from '../../TopBar/TopBar'

export  const LeavePage = ({sidebarVisible, setSidebarVisible}) => {
  return (
    <div className='LeavePage container'>
        <Sidebar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}  />
        <main>
            <TopBar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} pageName={"Leave Management"} />
        </main>
    </div>
  )
}
import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import TopBar from './TopBar/TopBar'

const Layout = () => {
  return (
    <div className="NotFoundPage container">
    <Sidebar />
    <main>
      <TopBar pageName={"Layout"} />

    </main>
  </div>
  )
}

export default Layout
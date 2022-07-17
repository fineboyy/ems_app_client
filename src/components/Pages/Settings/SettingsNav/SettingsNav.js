import React from 'react'
import { Link } from 'react-router-dom'


import './Nav.css'
export const SettingsNav = () => {
  return (
    <nav className='SettingsNav'>
        <Link to={"../"}>
        <span className="material-symbols-sharp">arrow_back</span>
        </Link>
        <p>Settings/Something</p>
    </nav>
  )
}

import React from 'react'
import { useNavigate } from 'react-router-dom'


import './Nav.css'
export const SettingsNav = ({directories = ["Something"]}) => {
  const navigate = useNavigate()

  const generateBreadcrumbs = (directories) => directories.map((d) => `/${d}`).join('')
  return (
    <div className='SettingsNav'>
        <p className='btn' onClick={()=> navigate(-1) }>
        <span className="material-symbols-sharp">arrow_back</span>
        <b>Go Back</b>
        </p>
        <p>{"Settings" + generateBreadcrumbs(directories)}</p>
    </div>
  )
}

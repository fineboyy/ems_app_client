import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from './authSlice'

export const RequireAuth = () => {
    
    const location = useLocation()
    // const token = useSelector(selectCurrentToken())
    const token = useSelector((state) => state.auth.token)

  return (
    token ? <Outlet /> : <Navigate to="/login" state={{from: location}} replace />
  )
}
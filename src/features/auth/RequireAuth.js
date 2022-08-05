import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const RequireAuth = () => {
    const location = useLocation()
    const token = useSelector((state) => state.auth.token)

  return (
    token ? <Outlet /> : <Navigate to="/login" state={{from: location}} replace />
  )
}
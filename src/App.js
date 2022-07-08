import React, { useState } from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard } from './components/Pages/Dashboard/Dashboard';
import { Departments } from './components/Pages/Departments/Departments';
import EmployeeDetails from './components/Pages/EmployeeDetails/EmployeeDetails';
import { Employees } from './components/Pages/Employees/Employees';
import { Login } from './components/Pages/Login/Login';
import NewEmployeeForm from './components/Pages/NewEmployeeForm/NewEmployeeForm';

const App = () => {
    const [sidebarVisible, setSidebarVisible ] = useState(false)
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Navigate replace to={"/dashboard"} />} />
            <Route path='/dashboard' element={<Dashboard sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />} />
            <Route path='/employees' element={<Employees sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />} />
            <Route path='/employees/new' element={<NewEmployeeForm sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />} />
            <Route path='/employees/:id' element={<EmployeeDetails sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />} />
            <Route path='/departments' element={<Departments sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />} />
            <Route path='*' element={<Navigate replace to={"/dashboard"} />} />
        </Routes>
    )
}

export default App;
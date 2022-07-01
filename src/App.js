import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard } from './components/Pages/Dashboard/Dashboard';
import { Departments } from './components/Pages/Departments/Departments';
import EmployeeDetails from './components/Pages/EmployeeDetails/EmployeeDetails';
import { Employees } from './components/Pages/Employees/Employees';
import { Login } from './components/Pages/Login/Login';
import NewEmployeeForm from './components/Pages/NewEmployeeForm/NewEmployeeForm';

const App = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Navigate replace to={"/dashboard"} />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/employees' element={<Employees />} />
            <Route path='/employees/new' element={<NewEmployeeForm />} />
            <Route path='/employees/:id' element={<EmployeeDetails />} />
            <Route path='/departments' element={<Departments />} />
            <Route path='*' element={<Navigate replace to={"/dashboard"} />} />
        </Routes>
    )
}

export default App;
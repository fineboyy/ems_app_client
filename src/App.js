import React, {useState} from 'react'
import {Routes, Route } from 'react-router-dom'
import { Dashboard } from './components/Pages/Dashboard/Dashboard';
import { Departments } from './components/Pages/Departments/Departments';
import { Employees } from './components/Pages/Employees/Employees';
import { Login } from './components/Pages/Login/Login';

const App = () => {

    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/employees' element={<Employees />} />
            <Route path='/departments' element={<Departments />} />
        </Routes>
    )


}

export default App;
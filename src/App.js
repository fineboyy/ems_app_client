import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./components/Pages/Dashboard/Dashboard";
import { Departments } from "./components/Pages/Departments/Departments";
import EmployeeDetails from "./components/Pages/EmployeeDetails/EmployeeDetails";
import { Employees } from "./components/Pages/Employees/Employees";
import { Login } from "./components/Pages/Login/Login";
import { LeavePage } from "./components/Pages/LeavePage/LeavePage";

import NewEmployeeForm from "./components/Pages/NewEmployeeForm/NewEmployeeForm";
import { Settings } from "./components/Pages/Settings/Settings";
import { SettingsList } from "./components/Pages/Settings/SettingsList/SettingsList";
import { PermissionsList } from "./components/Pages/Settings/PermissionsList/PermissionsList";
import { Notifications } from "./components/Pages/Settings/Notifications/Notifications";
import { UsersList } from "./components/Pages/Settings/UsersList/UsersList";
import { UserDetails } from "./components/Pages/Settings/UserDetails/UserDetails";
import { EditPermissions } from "./components/Pages/Settings/PermissionsList/EditPermissions/EditPermissions";


const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const returnApp = () => {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate replace to={"/dashboard"} />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              sidebarVisible={sidebarVisible}
              setSidebarVisible={setSidebarVisible}
            />
          }
        />
        <Route
          path="/employees"
          element={
            <Employees
              sidebarVisible={sidebarVisible}
              setSidebarVisible={setSidebarVisible}
            />
          }
        />
        <Route
          path="/employees/new"
          element={
            <NewEmployeeForm
              sidebarVisible={sidebarVisible}
              setSidebarVisible={setSidebarVisible}
            />
          }
        />
        <Route
          path="/employees/:id"
          element={
            <EmployeeDetails
              sidebarVisible={sidebarVisible}
              setSidebarVisible={setSidebarVisible}
            />
          }
        />
        <Route
          path="/departments"
          element={
            <Departments
              sidebarVisible={sidebarVisible}
              setSidebarVisible={setSidebarVisible}
            />
          }
        />
        <Route
          path="/leave-management"
          element={
            <LeavePage
              sidebarVisible={sidebarVisible}
              setSidebarVisible={setSidebarVisible}
            />
          }
        />
        <Route
          path="/settings"
          element={
            <Settings
              sidebarVisible={sidebarVisible}
              setSidebarVisible={setSidebarVisible}
            />
          }
        >
          <Route path="" element={<SettingsList />} />
          <Route path="user" element={<UserDetails />} />
          <Route path="permissions" element={<PermissionsList />} />
          <Route path="permissions/:slug/edit" element={<EditPermissions />} />
          <Route path="users" element={<UsersList />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="*" element={<Navigate replace to={""} />} />
        </Route>
        <Route path="*" element={<Navigate replace to={"/dashboard"} />} />
      </Routes>
    );
  };

  return returnApp();
};

export default App;

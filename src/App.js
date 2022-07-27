import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./components/Pages/Dashboard/Dashboard";
import { Departments } from "./components/Pages/Departments/Departments";
import EmployeeDetails from "./components/Pages/EmployeeDetails/EmployeeDetails";
import { Employees } from "./components/Pages/Employees/Employees";
import { Login } from "./components/Pages/Login/Login";
import { LeavePage } from "./components/Pages/LeavePage/LeavePage";

import AddNewEmployee from "./components/Pages/AddNewEmployee/AddNewEmployee";
import { Settings } from "./components/Pages/Settings/Settings";
import { SettingsList } from "./components/Pages/Settings/SettingsList/SettingsList";
import { PermissionsList } from "./components/Pages/Settings/PermissionsList/PermissionsList";
import { Notifications } from "./components/Pages/Settings/Notifications/Notifications";
import { UsersList } from "./components/Pages/Settings/UsersList/UsersList";
import { UserDetails } from "./components/Pages/Settings/UserDetails/UserDetails";
import { EditPermissions } from "./components/Pages/Settings/PermissionsList/EditPermissions/EditPermissions";
import { RequireAuth } from "./features/auth/RequireAuth";
import { RequireRefresh } from "./features/auth/RequireRefresh";

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const returnApp = () => {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<RequireRefresh />}>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Navigate replace to={"/dashboard"} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/employees/new" element={<AddNewEmployee />} />
            <Route path="/employees/:id" element={<EmployeeDetails />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/leave-management" element={<LeavePage />} />
            <Route path="/settings" element={<Settings />}>
              <Route path="" element={<SettingsList />} />
              <Route path="user" element={<UserDetails />} />
              <Route path="permissions" element={<PermissionsList />} />
              <Route
                path="permissions/:slug/edit"
                element={<EditPermissions />}
              />
              <Route path="users" element={<UsersList />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="*" element={<Navigate replace to={""} />} />
            </Route>
            <Route path="*" element={<Navigate replace to={"/dashboard"} />} />
          </Route>
        </Route>
      </Routes>
    );
  };

  return returnApp();
};

export default App;

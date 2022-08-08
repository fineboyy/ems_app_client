import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./components/Pages/Dashboard/Dashboard";
import { Departments } from "./components/Pages/Departments/Departments";
import EmployeeDetails from "./components/Pages/EmployeeDetails/EmployeeDetails";
import { Employees } from "./components/Pages/Employees/Employees";
import { Login } from "./components/Pages/Login/Login";
import { LeavePage } from "./components/Pages/LeavePage/LeavePage";
import { NotFoundPage } from "./components/Pages/404Page/404Page";

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
import { UnauthorizedPage } from "./components/Pages/UnauthorizedPage/UnauthorizedPage";
import { SingleDepartment } from "./components/Pages/SingleDepartment/SingleDepartment";
import { AddNewLeave } from "./components/Pages/AddNewLeave/AddNewLeave";
import Layout from "./components/Layout/Layout";
import { Modal } from "./components/Modal/Modal";

const App = () => {
  const returnApp = () => {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<RequireRefresh />}>
          <Route element={<RequireAuth />}>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={<Navigate replace to={"/dashboard"} />}
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/departments/:id" element={<SingleDepartment />} />
              <Route path="/leave-management" element={<LeavePage />} />
              <Route path="/leave-management/new" element={<AddNewLeave />} />
              <Route path="/employees/new" element={<AddNewEmployee />} />

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
              </Route>
              <Route path="/404" element={<NotFoundPage />} />
              <Route path="/unauthorized" element={<UnauthorizedPage />} />
            </Route>
            <Route element={<Modal />}>
              <Route path="/employees/:id" element={<EmployeeDetails />} />
            </Route>
            <Route path="*" element={<Navigate replace to={"/404"} />} />
          </Route>
        </Route>
      </Routes>
    );
  };

  return returnApp();
};

export default App;

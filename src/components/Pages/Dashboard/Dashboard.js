import React from "react";
import { Link } from "react-router-dom";
import { ErrorPage } from "../ErrorPage/ErrorPage";

// REDUX
import { useGetAllEmployeesQuery } from "../../../app/api/apiSlice";
import { useGetAllDepartmentsQuery } from "../../../app/api/apiSlice";

// CSS
import "../../../index.css";
import "./Dashboard.css";
import profile_img from "../../../images/default-img.jpg";
import { DepartmentsTable } from "./DepartmentsTable/DepartmentsTable";
import Loader from "../../Loader/Loader";

export const Dashboard = ({ sidebarVisible, setSidebarVisible }) => {
  document.title = "Dashboard | Div.co Human Resource Management System";

  const {
    data: employees,
    isLoading,
    isError,
    isSuccess,
  } = useGetAllEmployeesQuery();
  const {
    data: departments,
    isLoading: isDepartmentsLoading,
    isError: isDepartmentsError,
    isSuccess: isDepartmentsSuccess,
  } = useGetAllDepartmentsQuery();

  let content;

  function returnDashboard() {
    return (
      <div className="Dashboard">
        <RecentlyAddedEmployees
          recentlyAddedEmployees={employees.slice().reverse().slice(0, 4)}
        />

        <DepartmentsTable departments={departments} />
      </div>
    );
  }

  const returnErrorPage = () => {
    return <ErrorPage />;
  };

  if (isLoading && isDepartmentsLoading) {
    content = <Loader />;
  } else if (isLoading || isDepartmentsLoading) {
    content = <Loader />;
  } else if (isSuccess && isDepartmentsSuccess) {
    content = returnDashboard();
  } else if (isError && isDepartmentsError) {
    content = returnErrorPage();
  } else if (isError) {
    content = returnErrorPage();
  }

  return content;
};

export const RecentlyAddedEmployees = ({ recentlyAddedEmployees }) => {
  return (
    <div className="recent-employees">
      <h2>Recently Added Employees</h2>

      <div className="employees">
        {recentlyAddedEmployees.map((employee) => (
          <div className="employee" key={employee._id}>
            <div className="profile-photo">
              <img src={employee.photo ? employee.photo : profile_img} alt="" />
            </div>
            <h2>{employee.full_name}</h2>
            <p>{employee.job_title}</p>
            <Link to={`/employees/${employee._id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

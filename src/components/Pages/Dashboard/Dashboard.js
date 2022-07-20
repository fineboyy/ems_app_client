import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ErrorPage } from "../ErrorPage/ErrorPage";

// REDUX
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllEmployees } from "../../../redux/actions/employees";
import { getAllDepartments } from "../../../redux/actions/departments";

// COMPONENTS
import Sidebar from "../../Sidebar/Sidebar";
import TopBar from "../../TopBar/TopBar";
import FullScreenLoader from "../../Loader/FullScreenLoader/FullScreenLoader";

// CSS
import "../../../index.css";
import "./Dashboard.css";
import profile_img from "../../../images/default-img.jpg";
import { DepartmentsTable } from "./DepartmentsTable/DepartmentsTable";

export const Dashboard = ({ sidebarVisible, setSidebarVisible }) => {
  document.title = "Dashboard | Div.co Human Resource Management System";
  const employees = useSelector((state) => state.employees);
  const departments = useSelector((state) => state.departments);
  const dispatch = useDispatch();
  const networkError = useSelector((state) => state.networkError);

  useEffect(() => {
    // if (!(departments.length && employees.length)) {
      dispatch(getAllEmployees());
      dispatch(getAllDepartments());
    // }
  }, [dispatch]);

  function returnDashboard() {
    return (
      <div className="Dashboard container">
        <Sidebar
          sidebarVisible={sidebarVisible}
          setSidebarVisible={setSidebarVisible}
        />
        <main>
          <TopBar
            sidebarVisible={sidebarVisible}
            setSidebarVisible={setSidebarVisible}
            pageName={"dashboard"}
          />

          <RecentlyAddedEmployees
            recentlyAddedEmployees={employees.slice().reverse().slice(0, 4)}
          />

          <DepartmentsTable departments={departments} />
        </main>
      </div>
    );
  }

  const returnErrorPage = () => {
    return (
      <ErrorPage
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
      />
    );
  };

  if(Object.keys(networkError).length) return  returnErrorPage()

  return !(employees.length && departments.length) ? (
    <FullScreenLoader />
  ) : (
    returnDashboard()
  );
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

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// REDUX
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllEmployees } from "../../../actions/employees";
import { getAllDepartments } from "../../../actions/departments";

// COMPONENTS
import Sidebar from "../../Sidebar/Sidebar";
import TopBar from "../../TopBar/TopBar";
import FullScreenLoader from "../../Loader/FullScreenLoader/FullScreenLoader";

// CSS
import "../../../index.css";
import "./Dashboard.css";
import profile_img from "../../../images/default-img.jpg";

export const Dashboard = ({sidebarVisible, setSidebarVisible}) => {
  document.title = "Dashboard | Div.co Employee Management System";
  const employees = useSelector((state) => state.employees);
  const departments = useSelector((state) => state.departments);
  const isLoading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  if (employees.length && departments.length) dispatch({ type: "HIDE_LOADER" });

  useEffect(() => {
    dispatch({ type: "SHOW_LOADER" });
    if (!departments.length) {
      dispatch(getAllEmployees());
      dispatch(getAllDepartments());
    }
  }, [dispatch, departments]);


  function returnDashboard() {
    return (
      <div className="Dashboard container">
      <Sidebar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}  />
      <main>
        <TopBar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />

        <div className="recent-employees">
          <h2>Recently Added Employees</h2>

          <div className="employees">
            {employees
              .slice()
              .reverse()
              .slice(0, 4)
              .map((employee) => (
                <div className="employee" key={employee._id}>
                  <div className="profile-photo">
                    <img
                      src={employee.photo ? employee.photo : profile_img}
                      alt=""
                    />
                  </div>
                  <h2>{employee.full_name}</h2>
                  <p>{employee.job_title}</p>
                  <Link to={`/employees/${employee._id}`}>View Details</Link>
                </div>
              ))}
          </div>
        </div>

        {/* <!-- END OF RECENT EMPLOYEES --> */}

        <div className="departments">
          <h2>Departments</h2>

          <table>
            <thead>
              <tr>
                <th>Department Name</th>
                <th>Employees</th>
                <th>Description</th>
                <th>More</th>
              </tr>
            </thead>
            <tbody>
              {departments.slice(0, 5).map((department) => (
                <tr key={`${department._id}-dept`}>
                  <td>{department.name}</td>
                  <td className="avatar-group">
                    {department.members.slice(0, 5).map((member) => (
                      <Link
                        to={`/employees/${member._id}`}
                        className="avatar"
                        key={member._id + "member"}
                      >
                        <img
                          src={member.photo ? member.photo : profile_img}
                          alt=""
                        />
                      </Link>
                    ))}
                    <div className="hidden-avatars">
                      {department.members.length > 5
                        ? `+${department.members.length - 5}`
                        : ""}
                    </div>
                  </td>
                  <td>This is the sales department</td>
                  <td>
                    <Link
                      to={`/departments/${department.name}`}
                      className="more-details"
                    >
                      Details...
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="view-more">
            <Link to={"/departments"} className="text-muted">
              View All
            </Link>
          </div>
        </div>
      </main>
    </div>
    )
  }

  return isLoading ? <FullScreenLoader /> : returnDashboard();
};

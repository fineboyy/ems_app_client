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

// CSS
import "../../../index.css";
import "./Dashboard.css";
import profile_img from "../../../images/default-img.jpg";

export const Dashboard = () => {
  document.title = "Dashboard | Div.co Employee Management System"
  const employees = useSelector((state) => state.employees );
  const departments = useSelector(  (state) => state.departments )
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDepartments());
    dispatch(getAllEmployees());
  }, [dispatch]);
  return (
    <div className="Dashboard container">
      <Sidebar />
      <main>
        <TopBar />

        <div className="recent-employees">
          <h2>Recently Viewed Employees</h2>

          <div className="employees">
            {employees.slice(0, 4).map((employee) => (
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
              {departments.map((department) => (
                <tr key={`${department._id}-dept`}>
                  <td>{department.name}</td>
                  <td className="avatar-group">
                    {department.members.slice(0,5).map((member) => (
                      <Link to={`/employees/${member._id}`} className="avatar" key={member._id + "member"}>
                        <img
                          src={member.photo ? member.photo : profile_img}
                          alt=""
                        />
                      </Link>
                    ))}
                    <div className="hidden-avatars">+10</div>
                  </td>
                  <td>This is the sales department</td>
                  <td>
                    <Link to={`/departments/${department.name}`} className="more-details">
                      Details...
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

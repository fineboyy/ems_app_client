import React, { useEffect } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import TopBar from "../../TopBar/TopBar";
import { getAllEmployees } from '../../../actions/employees'
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import profile_img from "../../../images/default-img.jpg";
import "./Employees.css";
export const Employees = () => {
  const employees = useSelector((state) => state.employees);

  const femaleEmployeeNumber = employees.filter((f) => f.gender === 'female').length
  const maleEmployeeNumber = employees.length - femaleEmployeeNumber
  const dispatch = useDispatch()

  useEffect(() => {
    document.title = "Employees | Div.co Employee Management System"
    dispatch(getAllEmployees())
  }, [dispatch])
  return (
    <div className="container">
      <Sidebar />

      <main>
        <TopBar />
        <div className="insights">
          <div className="card">
            <span className="material-symbols-sharp"> badge </span>
            <div className="right-side">
              <p>Total Employees</p>
              <h1>{employees.length}</h1>
              <progress id="whatever" value={Math.floor(employees.length / employees.length * 10) || 0} min="0" max="10"></progress>
            </div>
          </div>
          <div className="card">
            <span className="material-symbols-sharp"> person_2 </span>
            <div className="right-side">
              <p>Total Females</p>
              <h1>{femaleEmployeeNumber}</h1>
              <progress id="whatever" value={Math.floor( femaleEmployeeNumber / employees.length * 10) || 0} min="0" max="10"></progress>
            </div>
          </div>
          <div className="card">
            <span className="material-symbols-sharp"> person </span>
            <div className="right-side">
              <p>Total Males</p>
              <h1>{maleEmployeeNumber}</h1>
              <progress id="whatever" value={Math.floor( maleEmployeeNumber / employees.length * 10) || 0} min="0" max="10"></progress>
            </div>
          </div>
        </div>

        <div className="employee-container">
          <div className="top-buttons">
            <div className="button">
              <span className="material-symbols-sharp"> add_circle </span>
              <p>Add Employee</p>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Contact Details</th>
                <th>Department</th>
                <th>More...</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee._id + "anything"}>
                  <td className="details-group">
                    <div className="avatar">
                      <img src={employee.photo ? employee.photo : profile_img } alt="" />
                    </div>
                    <div className="text-details">
                      <p className="name">{employee.full_name}</p>
                      <p className="title primary"> {employee.job_title} </p>
                    </div>
                  </td>
                  <td>
                    <div className="contact-item">
                      <span className="material-symbols-sharp text-muted">
                        mail
                      </span>
                      <p>{ employee.email || "unknown" }</p>
                    </div>
                    <div className="contact-item text-muted">
                      <span className="material-symbols-sharp"> phone </span>
                      <p>{ employee.phone_number || "unknown" }</p>
                    </div>
                  </td>
                  <td> {employee.department.name} </td>
                  <td>
                    <small>
                      <Link to="/employees/:id" className="more-details">
                        View Details
                      </Link>
                    </small>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <div className="employee-details-view">

          <div className="top">
            <div className="left-side">
              <span className="material-symbols-sharp">
                arrow_back_ios
              </span>
              <span className="material-symbols-sharp">
                arrow_forward_ios
              </span>
            </div>
            <div className="right-side">
              <span className="material-symbols-sharp">
                delete
              </span>
              <span className="material-symbols-sharp">
                edit
              </span>
              <span className="material-symbols-sharp">
                fullscreen
              </span>

            </div>
          </div>

          <div className="description">
            <div className="avatar">
              <img src="./images/profile-2.jpg" alt="" />
            </div>

          </div>

        </div> */}
      </main>
    </div>
  );
};

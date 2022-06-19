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

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllEmployees())
  }, [dispatch])
  return (
    <div class="container">
      <Sidebar />

      <main>
        <TopBar />
        <div class="insights">
          <div class="card">
            <span class="material-symbols-sharp"> badge </span>
            <div class="right-side">
              <p>Total Employees</p>
              <h1>550</h1>
              <progress id="whatever" value="10.0" min="0" max="10"></progress>
            </div>
          </div>
          <div class="card">
            <span class="material-symbols-sharp"> person_2 </span>
            <div class="right-side">
              <p>Total Females</p>
              <h1>350</h1>
              <progress id="whatever" value="5.5" min="0" max="10"></progress>
            </div>
          </div>
          <div class="card">
            <span class="material-symbols-sharp"> person </span>
            <div class="right-side">
              <p>Total Males</p>
              <h1>250</h1>
              <progress id="whatever" value="4.5" min="0" max="10"></progress>
            </div>
          </div>
        </div>

        <div class="employee-container">
          <div class="top-buttons">
            <div class="button">
              <span class="material-symbols-sharp"> add_circle </span>
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
                  <td class="details-group">
                    <div class="avatar">
                      <img src={employee.photo ? employee.photo : profile_img } alt="" />
                    </div>
                    <div class="text-details">
                      <p class="name">{employee.name}</p>
                      <p class="title primary"> {employee.job_title} </p>
                    </div>
                  </td>
                  <td>
                    <div class="contact-item">
                      <span class="material-symbols-sharp text-muted">
                        {" "}
                        mail{" "}
                      </span>
                      <p>maqweku@gmail.com</p>
                    </div>
                    <div class="contact-item text-muted">
                      <span class="material-symbols-sharp"> phone </span>
                      <p>+233558410792</p>
                    </div>
                  </td>
                  <td> {employee.department} </td>
                  <td>
                    <small>
                      <Link to="/employees/:id" class="more-details">
                        View Details
                      </Link>
                    </small>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <div class="employee-details-view">

          <div class="top">
            <div class="left-side">
              <span class="material-symbols-sharp">
                arrow_back_ios
              </span>
              <span class="material-symbols-sharp">
                arrow_forward_ios
              </span>
            </div>
            <div class="right-side">
              <span class="material-symbols-sharp">
                delete
              </span>
              <span class="material-symbols-sharp">
                edit
              </span>
              <span class="material-symbols-sharp">
                fullscreen
              </span>

            </div>
          </div>

          <div class="description">
            <div class="avatar">
              <img src="./images/profile-2.jpg" alt="" />
            </div>

          </div>

        </div> */}
      </main>
    </div>
  );
};

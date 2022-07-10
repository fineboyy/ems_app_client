import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import TopBar from "../../TopBar/TopBar";
import { getAllEmployees } from "../../../actions/employees";
import { Link } from "react-router-dom";

import Loader from "../../Loader/Loader";

import { useSelector, useDispatch } from "react-redux";
import profile_img from "../../../images/default-img.jpg";

import "./Employees.css";
import SingleEmployeeModal from "./SingleEmployeeModal/SingleEmployeeModal";
export const Employees = ({ sidebarVisible, setSidebarVisible }) => {
  const employees = useSelector((state) => state.employees);

  const [currentlyActiveEmployee, setCurrentlyActiveEmployee] = useState(null);
  const femaleEmployeeNumber = employees.filter(
    (f) => f.gender === "female"
  ).length;
  const maleEmployeeNumber = employees.length - femaleEmployeeNumber;

  let startNumber = 0;
  let endNumber = employees.length > 5 ? 5 : employees.length;

  let isLoading = true;

  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "Employees | Div.co Employee Management System";
    dispatch(getAllEmployees());
  }, [dispatch]);

  const changeCurrentlyActiveEmploye = (direction) => {
    if (!currentlyActiveEmployee) return;

    let newIdx = employees.indexOf(currentlyActiveEmployee);

    if (newIdx === -1) return;

    if (newIdx === employees.length - 1) newIdx = 0;
    if (newIdx === 0 && direction === -1) newIdx = employees.length - 1;

    let newActiveEmployee = employees[newIdx + direction];

    setCurrentlyActiveEmployee(newActiveEmployee);
  };

  if (employees.length) isLoading = false;
  if (isLoading) return <Loader />;
  return (
    <div className="Employees container">
      <Sidebar
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
      />

      <main>
        <TopBar
          sidebarVisible={sidebarVisible}
          setSidebarVisible={setSidebarVisible}
        />
        <div className="insights">
          <div className="card">
            <span className="material-symbols-sharp"> badge </span>
            <div className="right-side">
              <p>Total Employees</p>
              <h1>{employees.length}</h1>
              <progress
                id="whatever"
                value={
                  Math.floor((employees.length / employees.length) * 10) || 0
                }
                min="0"
                max="10"
              ></progress>
            </div>
          </div>
          <div className="card">
            <span className="material-symbols-sharp"> person_2 </span>
            <div className="right-side">
              <p>Total Females</p>
              <h1>{femaleEmployeeNumber}</h1>
              <progress
                id="whatever"
                value={
                  Math.floor((femaleEmployeeNumber / employees.length) * 10) ||
                  0
                }
                min="0"
                max="10"
              ></progress>
            </div>
          </div>
          <div className="card">
            <span className="material-symbols-sharp"> person </span>
            <div className="right-side">
              <p>Total Males</p>
              <h1>{maleEmployeeNumber}</h1>
              <progress
                id="whatever"
                value={
                  Math.floor((maleEmployeeNumber / employees.length) * 10) || 0
                }
                min="0"
                max="10"
              ></progress>
            </div>
          </div>
        </div>

        <div className="employee-container">
          <div className="top-buttons">
            <Link to={"/employees/new"} className="button">
              <span className="material-symbols-sharp"> add_circle </span>
              <p>Add Employee</p>
            </Link>
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
              {employees.slice(startNumber, endNumber).map((employee) => (
                <tr
                  key={employee._id + "anything"}
                  onClick={() => {
                    setCurrentlyActiveEmployee(employee);
                  }}
                >
                  <td className="details-group">
                    <div className="avatar">
                      <img
                        src={employee.photo ? employee.photo : profile_img}
                        alt=""
                      />
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
                      <p>{employee.email || "unknown"}</p>
                    </div>
                    <div className="contact-item text-muted">
                      <span className="material-symbols-sharp"> phone </span>
                      <p>{employee.phone_number || "unknown"}</p>
                    </div>
                  </td>
                  <td> {employee.department.name} </td>
                  <td>
                    <small>
                      <Link
                        to={`/employees/${employee._id}`}
                        className="more-details"
                      >
                        Full Details
                      </Link>
                    </small>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {employees.length > endNumber ? (
            <div className="num-controls">
              <div className="max-views">
                <p>
                  View <span className="range-num">5</span> per page
                </p>
              </div>
              <div className="controls">
                <p className="text-muted">
                  <span className="material-symbols-sharp">chevron_left</span>
                  Prev
                </p>
                <p className="active">1</p>
                <p>2</p>
                <p>...</p>
                <p>36</p>
                <p>
                  Next
                  <span className="material-symbols-sharp">chevron_right</span>
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        {currentlyActiveEmployee ? (
          <SingleEmployeeModal
            employee={currentlyActiveEmployee}
            setCurrentlyActiveEmployee={setCurrentlyActiveEmployee}
            toggleCurrentEmployee={changeCurrentlyActiveEmploye}
          />
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

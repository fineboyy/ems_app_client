import React from 'react'
import { Link } from "react-router-dom";


import './EmployeesTable.css'
const EmployeesTable = ({ employees, startNumber, endNumber, setCurrentlyActiveEmployee, profile_img }) => {
  return (
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
  )
}

export default EmployeesTable
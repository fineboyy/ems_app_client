import React from "react";
import { Link } from "react-router-dom";

import "./SingleEmployeeModal.css";
import profile_img from "../../../../images/default-img.jpg";
import Table from "../../EmployeeDetails/Table/Table";

const SingleEmployeeModal = ({ employee, setCurrentlyActiveEmployee, toggleCurrentEmployee }) => {
  return (
    <div
      className={
        "SingleEmployeeModal translate-employee-details " +
        (!employee ? "translate-out" : "")
      }
    >
      <div className="top">
        <div className="left-side">
          <span className="material-symbols-sharp" onClick={()=> toggleCurrentEmployee(-1)}>arrow_back_ios</span>
          <span className="material-symbols-sharp" onClick={()=> toggleCurrentEmployee(1)} >arrow_forward_ios</span>
        </div>
        <div className="right-side">
          <span
            className="material-symbols-sharp"
            onClick={() => setCurrentlyActiveEmployee(null)}
          >
            close
          </span>
        </div>
      </div>

      <div className="summary">
        <div className="profile-photo">
          <img src={employee.photo ? employee.photo : profile_img} alt="" />
        </div>
        <div className="summary-text">
          <div className="details">
            <h2>{employee.full_name ? employee.full_name : "Unknown"}</h2>
            <p className="blue">
              {employee.job_title ? employee.job_title : "Unknown"}
            </p>
          </div>
          <div className="more">
            <div className="detail">
              <p className="text-muted">Department</p>
              <p className="text-muted">Email</p>
              <p className="text-muted">Contact</p>
            </div>
            <div className="detail blue">
              <p>
                {employee.department ? employee.department.name : "Unassigned"}
              </p>
              <p>{employee.email ? employee.email : "Unknown"}</p>
              <p>{employee.phone_number ? employee.phone_number : "Unknown"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-buttons">
        <Link to={"/employees/" + employee._id} className="button">
          <p>View Full Details</p>
        </Link>
      </div>

      <Table employee={employee} infoGroup="personal" />
    </div>
  );
};

export default SingleEmployeeModal;

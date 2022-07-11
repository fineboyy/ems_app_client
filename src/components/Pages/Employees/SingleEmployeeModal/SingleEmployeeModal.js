import React from "react";
import { Link } from "react-router-dom";

import "./SingleEmployeeModal.css";
import profile_img from "../../../../images/default-img.jpg";
import Table from "../../EmployeeDetails/Table/Table";
import Jumbotron from "../../EmployeeDetails/Jumbotron/Jumbotron";

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

      <Jumbotron employee={employee} />

      <div className="top-buttons">
        <Link to={"/employees/" + employee._id} className="button">
          <p>View Full Info.</p>
        </Link>
      </div>

      <Table employee={employee} infoGroup="personal" />
    </div>
  );
};

export default SingleEmployeeModal;

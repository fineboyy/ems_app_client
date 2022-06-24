import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";

//COMPONENTS
import Sidebar from "../../Sidebar/Sidebar";
import "./EmployeeDetails.css";

import profile_img from "../../../images/default-img.jpg";
const EmployeeDetails = () => {
  const {id} = useParams()
  const employee = useSelector((state) => state.employees.find((e) => e._id === id ))
  useEffect(() => {
    document.title = `${employee.full_name} | Div.co Employee Management System`;
  });
  return (
    <div className="EmployeeDetails container">
      <Sidebar />

      <main>
        <div className="top">
          <span className="material-symbols-sharp">delete</span>
          <span className="material-symbols-sharp">edit</span>
        </div>

        <div className="summary">
          <div className="profile-photo">
            <img src={employee.photo ? employee.photo : profile_img } alt="" />
          </div>
          <div className="summary-text">
            <div className="details">
            <h2>{employee.full_name ? employee.full_name : "Unknown"}</h2>
            <p className="blue">{employee.job_title ? employee.job_title : "Unknown"}</p>
            </div>
            <div className="more">
              <div className="detail">
                <p className="text-muted">Department</p>
                <p className="text-muted">Email</p>
                <p className="text-muted">Contact</p>
              </div>
              <div className="detail blue">
                <p>{employee.department.name ? employee.department.name : "Unknown"}</p>
                <p>{employee.email ? employee.email : "Unknown"}</p>
                <p>{employee.phone_number ? employee.phone_number : "Unknown"}</p>
              </div>
            </div>
          </div>
        </div>

        <nav className="menus">
            <h3 className="text-muted active">PERSONAL</h3>
            <h3 className="text-muted">EDUCATION</h3>
            <h3 className="text-muted">CAREER</h3>
        </nav>

        <div className="personal-info">
            <div className="header">
                <p>Personal Information</p>
            </div>

            <div className="body">
                <div>
                    <div className="info-group">
                        <p className="text-muted">Full Name</p>
                        <p className="">{employee.full_name ? employee.full_name : "Unknown"}</p>
                    </div>
                    <div className="info-group">
                        <p  className="text-muted">Gender</p>
                        <p>{employee.gender ? employee.gender : "Unknown"}</p>
                    </div>
                    <div className="info-group">
                        <p  className="text-muted">Address</p>
                        <p>{employee.address ? employee.address : "Unknown"}</p>
                    </div>
                    <div className="info-group">
                        <p  className="text-muted">Marital Status</p>
                        <p>{employee.marital_status ? employee.marital_status : "Unknown"}</p>
                    </div>
                </div>
                <div>
                    <div className="info-group">
                        <p className="text-muted">Nationality</p>
                        <p className="">{employee.nationality ? employee.nationality : "Unknown"}</p>
                    </div>
                    <div className="info-group">
                        <p  className="text-muted">Education</p>
                        <p>Bsc. Business Information Technology</p>
                    </div>
                    <div className="info-group">
                        <p  className="text-muted">Emergency Contact</p>
                        <p> {employee.emergency_contact ? employee.emergency_contact : "Unknown"} </p>
                    </div>
                    <div className="info-group">
                        <p  className="text-muted">Next of Kin</p>
                        <p>{employee.next_of_kin ? employee.next_of_kin : "Unknown"} </p>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default EmployeeDetails;

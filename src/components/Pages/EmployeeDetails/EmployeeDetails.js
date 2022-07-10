import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

//ACTIONS
import { getAllEmployees } from "../../../actions/employees";

//COMPONENTS
import Sidebar from "../../Sidebar/Sidebar";
import "./EmployeeDetails.css";

import profile_img from "../../../images/default-img.jpg";
import Table from "./Table/Table";
const EmployeeDetails = ({sidebarVisible, setSidebarVisible}) => {
  const dispatch = useDispatch();

  const [ infoGroup , setInfoGroup ] = useState("personal")

  
  useEffect(() => {
    dispatch(getAllEmployees());
    document.title = `${employee.full_name} | Div.co Employee Management System`;
  });
  const { id } = useParams();
  
  const employee = useSelector((state) =>
    state.employees.find((e) => e._id === id)
  );
  if(!employee) {
    return(
      <div className="EmployeeDetails container">
        <Sidebar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}  />
        <main style={{display: "flex", justifyContent: "center",}}>
          <h1 style={{marginTop: "5rem", fontSize: "4rem"}}>Employee Not Found</h1>
        </main>
      </div>
    )
  }

  return (
    <div className="EmployeeDetails container">
      <Sidebar sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}  />

      <main>
        <div className="top">
         <div className="left-side">
         <span className="material-symbols-sharp menu" onClick={() => setSidebarVisible(true) }>menu</span>
          <Link to={"/employees"}>
          <span className="material-symbols-sharp arrow-back">arrow_back</span>
          </Link>
         </div>
         <div className="right-side">
         <span className="material-symbols-sharp">delete</span>
          <span className="material-symbols-sharp">edit</span>
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
                  {employee.department
                    ? employee.department.name
                    : "Unassigned"}
                </p>
                <p>{employee.email ? employee.email : "Unknown"}</p>
                <p>
                  {employee.phone_number ? employee.phone_number : "Unknown"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <nav className="menus">
          <h3 className={ infoGroup === "personal" ? "text-muted active" : "text-muted"} onClick={() => setInfoGroup("personal")}>PERSONAL</h3>
          <h3 className={ infoGroup === "education" ? "text-muted active" : "text-muted"} onClick={() => setInfoGroup("education")} >EDUCATION</h3>
          <h3 className={ infoGroup === "career" ? "text-muted active" : "text-muted"} onClick={() => setInfoGroup("career")} >CAREER</h3>
        </nav>

        <Table employee={employee} infoGroup={infoGroup} />
      </main>
    </div>
  );
};

export default EmployeeDetails;

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
import Jumbotron from "./Jumbotron/Jumbotron";
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

        <Jumbotron employee={employee} profile_img={profile_img} />

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

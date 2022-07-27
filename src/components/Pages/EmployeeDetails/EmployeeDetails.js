import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

//ACTIONS
import { useGetOneEmployeeQuery } from "../../../app/api/apiSlice";
import { setSidebarVisible } from "../../../features/sidebarVisibility/sidebarVisibilitySlice";

//COMPONENTS
import Sidebar from "../../Sidebar/Sidebar";
import "./EmployeeDetails.css";

import profile_img from "../../../images/default-img.jpg";
import Table from "./Table/Table";
import Jumbotron from "./Jumbotron/Jumbotron";
import Loader from "../../Loader/Loader";
import { ErrorPage } from "../ErrorPage/ErrorPage";
const EmployeeDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [infoGroup, setInfoGroup] = useState("personal");

  const { id } = useParams();
  const {
    data: employee,
    isLoading,
    isSuccess,
    isError,
  } = useGetOneEmployeeQuery(id);

  useEffect(() => {
    document.title = `${
      employee?.full_name || "Employee"
    } | Div.co Human Resource Management System`;
  });

  let content;
  const returnContent = () => {
    return (
      <div className="EmployeeDetails container">
        <Sidebar />

        <main>
          <div className="top">
            <div className="left-side">
              <span
                className="material-symbols-sharp menu"
                onClick={() => dispatch(setSidebarVisible(true))}
              >
                menu
              </span>
              <p onClick={() => navigate(-1)}>
                <span className="material-symbols-sharp arrow-back">
                  arrow_back
                </span>
              </p>
            </div>
            <div className="right-side">
              <span className="material-symbols-sharp">delete</span>
              <span className="material-symbols-sharp">edit</span>
            </div>
          </div>

          <Jumbotron employee={employee} profile_img={profile_img} />

          {employee?.leave_applications?.length ? <h1>T</h1> : ""}

          <nav className="menus">
            <h3
              className={
                infoGroup === "personal" ? "text-muted active" : "text-muted"
              }
              onClick={() => setInfoGroup("personal")}
            >
              PERSONAL
            </h3>
            <h3
              className={
                infoGroup === "education" ? "text-muted active" : "text-muted"
              }
              onClick={() => setInfoGroup("education")}
            >
              EDUCATION
            </h3>
            <h3
              className={
                infoGroup === "career" ? "text-muted active" : "text-muted"
              }
              onClick={() => setInfoGroup("career")}
            >
              CAREER
            </h3>
          </nav>

          <Table employee={employee} infoGroup={infoGroup} />
        </main>
      </div>
    );
  };

  if (isLoading) {
    content = <Loader />;
  } else if (!Object.keys(employee).length) {
    content = (
      <div className="EmployeeDetails container">
        <Sidebar />
        <main style={{ display: "flex", justifyContent: "center" }}>
          <h2
            style={{ marginTop: "5rem", fontSize: "4rem", textAlign: "center" }}
          >
            Employee Not Found
          </h2>
        </main>
      </div>
    );
  }  else if (isSuccess) {
    content = returnContent();
  } else if (isError) {
    content = <ErrorPage />;
  }
  return content;
};

export default EmployeeDetails;

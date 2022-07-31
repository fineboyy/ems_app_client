import React from "react";

import DepartmentCard from "./DepartmentCard/DepartmentCard";
import Loader from "../../Loader/Loader";

import { useGetAllDepartmentsQuery } from "../../../app/api/apiSlice";

import "./Departments.css";
import { ErrorPage } from "../ErrorPage/ErrorPage";

export const Departments = ({ sidebarVisible, setSidebarVisible }) => {
  document.title = "Departments | Div.co Human Resource Management System";

  const {
    data: departments,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllDepartmentsQuery();

  let content;

  const returnDeparments = () => {
    return (
      <div className="Departments">
        <div className="info-cards-wrapper">
          <div className="info-card">
            <div className="left">
              <div className="circle">
                <span className="material-symbols-sharp primary">
                  full_stacked_bar_chart
                </span>
              </div>
            </div>
            <div className="right">
              <h2>{departments.length}</h2>
              <p>Total Deparments</p>
            </div>
          </div>
          <div className="info-card">
            <div className="left">
              <div className="circle">
                <span className="material-symbols-sharp success">
                  leaderboard
                </span>
              </div>
            </div>
            <div className="right">
              <h2>9</h2>
              <p>Total Active</p>
            </div>
          </div>
          <div className="info-card">
            <div className="left">
              <div className="circle">
                <span className="material-symbols-sharp danger">
                  leaderboard
                </span>
              </div>
            </div>
            <div className="right">
              <h2>3</h2>
              <p>Total Inactive</p>
            </div>
          </div>
        </div>

        <div className="departments-list-wrapper">
          <div className="departments-list">
            <div className="button-wrapper">
              <h2>Departments List</h2>
              <div className="add-button">
                <span className="material-symbols-sharp">add_circle</span>
                Add Department
              </div>
            </div>

            {departments.map((department) => (
              <DepartmentCard department={department} />
            ))}
          </div>
          <div className="idk-yet"></div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    content = <Loader />;
  } else if (isSuccess) {
    content = returnDeparments();
  } else if (isError) {
    content = (
      <ErrorPage
      />
    );
  }

  return content;
};

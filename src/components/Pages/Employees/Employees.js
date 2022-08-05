import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//RTK
import { useGetAllEmployeesQuery } from "../../../app/api/apiSlice";

import Loader from "../../Loader/Loader";
import SingleEmployeeModal from "./SingleEmployeeModal/SingleEmployeeModal";
import EmployeesTable from "./EmployeesTable/EmployeesTable";
import EmployeesTableControls from "./EmployeesTableControls/EmployeesTableControls";
import { Insights } from "./Insights/Insights";
import { ErrorPage } from "../ErrorPage/ErrorPage";

//ASSETS & CSS
import profile_img from "../../../images/default-img.jpg";
import "./Employees.css";

export const Employees = () => {
  const {
    data: employees,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllEmployeesQuery();

  const [currentlyActiveEmployee, setCurrentlyActiveEmployee] = useState(null);

  //EMPLOYEE GENDERS
  const femaleEmployeeNumber = employees
    ? employees.filter((f) => f.gender === "female").length
    : 0;
  const maleEmployeeNumber = employees
    ? employees.length - femaleEmployeeNumber
    : 0;

  //EMPLOYEE LIST CONTROLS
  const [startNumber, setStartNumber] = useState(0);
  const [endNumber, setEndNumber] = useState(5);
  const [rangeNum, setRangeNum] = useState(endNumber);

  useEffect(() => {
    document.title = "Employees | Div.co Human Resource Management System";
  });

  const changeCurrentlyActiveEmploye = (direction) => {
    if (!currentlyActiveEmployee) return;
    let newIdx = employees.indexOf(currentlyActiveEmployee);
    if (newIdx === -1) return;
    if (newIdx === employees.length - 1) newIdx = 0;
    if (newIdx === 0 && direction === -1) newIdx = employees.length - 1;
    let newActiveEmployee = employees[newIdx + direction];
    setCurrentlyActiveEmployee(newActiveEmployee);
  };

  const changeCurrentEmployeeList = (direction) => {
    if (startNumber - rangeNum < 0) setStartNumber(0);

    if (startNumber === 0 && direction === -1) return;
    if (endNumber > employees.length && direction === 1) return;

    switch (direction) {
      case 1:
        setStartNumber(rangeNum + startNumber);
        setEndNumber((startNumber) => startNumber + rangeNum);
        return;

      case -1:
        setStartNumber(startNumber - rangeNum);
        setEndNumber((endNumber) => endNumber - rangeNum);
        return;

      default:
        return;
    }
  };

  const changeRange = (e) => {
    setStartNumber(0);
    setRangeNum(Number(e.target.value));
    setEndNumber(Number(e.target.value));
  };

  let content;

  const [query, setQuery] = useState("");

  const keys = ["full_name", "email", "job_title"];

  const search = (data) => {
    return data.filter((record) =>
      keys.some((key) =>
        record[key].toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  function returnContent() {
    return (
      <div className="Employees">
        <Insights
          femaleEmployeeNumber={femaleEmployeeNumber}
          maleEmployeeNumber={maleEmployeeNumber}
          employees={employees}
        />

        <div className="employee-container">
          <div className="top-buttons">
            <div className="SearchComponent">
              <input
                type="text"
                placeholder="Search Employee"
                onChange={(e) => setQuery(e.target.value)}
              />
              <span className="material-symbols-sharp"> search </span>
            </div>


            <Link to={"/employees/new"} className="button">
              <span className="material-symbols-sharp"> add_circle </span>
              <p>Add Employee</p>
            </Link>
          </div>

          <EmployeesTable
            startNumber={startNumber}
            endNumber={endNumber}
            employees={search(employees)}
            setCurrentlyActiveEmployee={setCurrentlyActiveEmployee}
            profile_img={profile_img}
          />

          <EmployeesTableControls
            rangeNum={rangeNum}
            changeRange={changeRange}
            changeCurrentEmployeeList={changeCurrentEmployeeList}
            startNumber={startNumber}
            endNumber={endNumber}
            employees={employees}
          />
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
      </div>
    );
  }

  if (isLoading) {
    content = <Loader />;
  } else if (isSuccess) {
    content = returnContent();
  } else if (isError) {
    content = <ErrorPage />;
  } else {
    content = <p>We don't know what to display</p>;
  }
  return content;
};

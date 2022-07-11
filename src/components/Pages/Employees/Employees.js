import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//COMPONENTS
import Sidebar from "../../Sidebar/Sidebar";
import TopBar from "../../TopBar/TopBar";
import { getAllEmployees } from "../../../actions/employees";
import Loader from "../../Loader/Loader";
import SingleEmployeeModal from "./SingleEmployeeModal/SingleEmployeeModal";

//ASSETS & CSS
import profile_img from "../../../images/default-img.jpg";
import "./Employees.css";
import EmployeesTable from "./EmployeesTable/EmployeesTable";
import EmployeesTableControls from "./EmployeesTableControls/EmployeesTableControls";

export const Employees = ({ sidebarVisible, setSidebarVisible }) => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);
  const [currentlyActiveEmployee, setCurrentlyActiveEmployee] = useState(null);

  //EMPLOYEE GENDERS
  const femaleEmployeeNumber = employees.filter(
    (f) => f.gender === "female"
  ).length;
  const maleEmployeeNumber = employees.length - femaleEmployeeNumber;

  //EMPLOYEE LIST CONTROLS
  const [startNumber, setStartNumber] = useState(0);
  const [endNumber, setEndNumber] = useState(5);
  const [rangeNum, setRangeNum] = useState(endNumber);

  let isLoading = true;
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

          <EmployeesTable
            startNumber={startNumber}
            endNumber={endNumber}
            employees={employees}
            setCurrentlyActiveEmployee={setCurrentlyActiveEmployee}
            profile_img={profile_img}
          />

          <EmployeesTableControls
            rangeNum={rangeNum}
            changeRange={changeRange}
            changeCurrentEmployeeList={changeCurrentEmployeeList}
            startNumber={startNumber}
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
      </main>
    </div>
  );
};

import React from "react";


import './Insights.css'
export const Insights = ({
  employees,
  femaleEmployeeNumber,
  maleEmployeeNumber,
  othersNumber
}) => {
  return (
    <div className="insights">
      <Card
        cardName={"Total Employees"}
        num1={employees.length}
        num2={employees.length}
        icon={"badge"}
      />
      <Card
        cardName={"Total Male"}
        num1={maleEmployeeNumber}
        num2={employees.length}
        icon={"person"}
      />
      <Card
        cardName={"Total Female"}
        num1={femaleEmployeeNumber}
        num2={employees.length}
        icon={"person_2"}
      />
      <Card
        cardName={"Other"}
        num1={othersNumber}
        num2={employees.length}
        icon={"agender"}
      />
    </div>
  );
};

export const Card = ({ cardName, num1, num2, icon }) => {
  return (
    <div className="card">
     <div className="top">
     <div className="left">
      <div className="icon-container">
        <span className="material-symbols-sharp"> {icon} </span>
      </div>
      </div>

      <div className="right-side">
        <p>{cardName}</p>
        <h1>{num1}</h1>
      </div>
     </div>


      <progress
          id="whatever"
          value={Math.floor((num1 / num2) * 10) || 0}
          min="0"
          max="10"
        ></progress>
    </div>
  );
};

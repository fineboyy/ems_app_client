import React from "react";

export const Insights = ({
  employees,
  femaleEmployeeNumber,
  maleEmployeeNumber,
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
        icon={"man"}
      />
      <Card
        cardName={"Total Female"}
        num1={femaleEmployeeNumber}
        num2={employees.length}
        icon={"woman"}
      />
    </div>
  );
};

export const Card = ({ cardName, num1, num2, icon }) => {
  return (
    <div className="card">
      <span className="material-symbols-sharp"> {icon} </span>
      <div className="right-side">
        <p>{cardName}</p>
        <h1>{num1}</h1>
        <progress
          id="whatever"
          value={Math.floor((num1 / num2) * 10) || 0}
          min="0"
          max="10"
        ></progress>
      </div>
    </div>
  );
};

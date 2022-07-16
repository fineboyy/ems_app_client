import React from "react";

import "./LeaveTable.css";
import { TableList } from "./TableList/TableList";
export const LeaveTable = ({tableHeader = "Some Table"}) => {
  return (
    <div className="LeaveTable">
      <p>
        <b className="primary">{tableHeader}</b>
      </p>

      <div className="filters">
        <div className="search-bar">
          <p>Search Employee</p>
          <div className="search">
            <input type="text" placeholder="Eg. Michael Amponsah" />
            <span className="material-symbols-sharp"> search </span>
          </div>
        </div>

        <div className="right-side">
            <div className="filter-option">
                <span className="material-symbols-sharp">sort</span>
                <p>Sort By</p>
                <span className="material-symbols-sharp">expand_more</span>
            </div>
            <div className="filter-option">
                <span className="material-symbols-sharp">calendar_month</span>
                <p>Daily</p>
                <span className="material-symbols-sharp">expand_more</span>
            </div>
        </div>
      </div>

      <TableList tableHeader={tableHeader} />
    </div>
  );
};

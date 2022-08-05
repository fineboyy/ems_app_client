import React, { useEffect, useState } from "react";
import moment from "moment";

import "./LeaveTable.css";
import { TableList } from "./TableList/TableList";

export const LeaveTable = ({ tableHeader = "Some Table", applications }) => {
  const [query, setQuery] = useState("");
  const [startDate, setStartDate] = useState(moment().startOf('month'));
  const [currentOperation, setCurrentOperation] = useState("")

  useEffect(() => {
    setCurrentOperation("filter-date")
  }, [])


  const beforeSetQuery = (query) => {
    setQuery(query)
    setCurrentOperation("search")
  }

  const filterData = (data) => {
    switch (currentOperation) {
      case "search":
        return search(data)

      case "filter-date":
        return filterByDate(data)
    
      default:
        return data;
    }
  }


  const handleChange = (param) => {
    if(param === "" ) return setStartDate(param)
    const filterStartDate = moment().startOf(param)
    console.log(filterStartDate)
    setStartDate(filterStartDate)
    setCurrentOperation("filter-date")
  }

  const search = (data) => {
    return data.filter((record) => {
      return record?.employee_name.toLowerCase().includes(query.toLowerCase())
    })
  }

  const filterByDate = (data) => {
    if (startDate === "") return data;
    return data.filter( (record) =>  moment(record.applied_date).isSameOrAfter(startDate) );
  };

  return (
    <div className="LeaveTable">
      <p>
        <b className="primary">{tableHeader}</b>
      </p>

      <div className="filters">
        <div className="search-bar">
          <p>Search Employee</p>
          <div className="SearchComponent">
            <input
              type="text"
              placeholder="Eg. Michael Amponsah"
              onChange={(e) => beforeSetQuery(e.target.value)}
            />
            <span className="material-symbols-sharp"> search </span>
          </div>
        </div>

        <div className="right-side">
          <div className="filter-option">
            <span className="material-symbols-sharp">calendar_month</span>

            <select
              name="date-filter"
              id="date-filter"
              onChange={(e) => handleChange(e.target.value)}
            >
              <option value="">All </option>
              <option value={"week"}>This Week</option>
              <option value={"month"} selected>This Month</option>
              <option value={"year"}>This Year</option>
            </select>
          </div>
        </div>
      </div>

      <TableList
        tableHeader={tableHeader}
        applications={filterData(applications)}
      />
    </div>
  );
};

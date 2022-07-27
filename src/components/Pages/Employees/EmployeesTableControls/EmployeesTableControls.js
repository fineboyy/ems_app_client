import React from "react";

const EmployeesTableControls = ({
  rangeNum,
  changeRange,
  changeCurrentEmployeeList,
  startNumber,
  endNumber,
  employees
}) => {
  return (
    <div className="num-controls">
      <div className="max-views">
        <p>
          View
          <span className="range-num">
            <input
              type="number"
              name="range_num"
              id="range_num"
              min={1}
              max={50}
              defaultValue={rangeNum}
              onChange={changeRange}
            />
          </span>{" "}
          per page
        </p>
      </div>
      <div className="controls">
        <p
          className={startNumber === 0 ? "text-muted" : ""}
          onClick={() => changeCurrentEmployeeList(-1)}
        >
          <span className="material-symbols-sharp">chevron_left</span>
          Prev
        </p>
        <span className="material-symbols-sharp text-muted">multiple_stop</span>
        <p className={endNumber >=  employees.length ? "text-muted" : ""} onClick={() => endNumber >= employees.length ? "" : changeCurrentEmployeeList(1)}>
          Next
          <span className="material-symbols-sharp">chevron_right</span>
        </p>
      </div>
    </div>
  );
};

export default EmployeesTableControls;

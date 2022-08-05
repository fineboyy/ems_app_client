import React from "react";

export const LeaveTypes = () => {
  return (
    <div className="leave-types-wrapper">
      <p>
        <b className="primary">Leave Types</b>
      </p>
      <div className="leave-types-list">
        <div className="leave-type">
          <span className="material-symbols-sharp leave-icon seablue">
            radio_button_checked
          </span>
          <p>Casual Leave</p>
        </div>
        <div className="leave-type">
          <span className="material-symbols-sharp leave-icon success">
            radio_button_checked
          </span>
          <p>Personal Work</p>
        </div>
        <div className="leave-type">
          <span className="material-symbols-sharp leave-icon blue-deeper">
            radio_button_checked
          </span>
          <p>Sick Leave</p>
        </div>
        <div className="leave-type">
          <span className="material-symbols-sharp leave-icon orange">
            radio_button_checked
          </span>
          <p>Maternity Leave</p>
        </div>

        <div className="button">
          <span className="material-symbols-sharp">add</span>
          <p>Add New Type</p>
        </div>
      </div>
      <span className="material-symbols-sharp more-icon">more_vert</span>
    </div>
  );
};

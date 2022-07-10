import React from "react";
import moment from "moment";

import './Table.css'
const Table = ({ employee, infoGroup }) => {
  const returnPersonalInfo = () => {
    return (
      <div className="Table">
        <div className="header">
          <p>Personal Information</p>
        </div>

        <div className="body">
          <div>
            <div className="info-group">
              <p className="text-muted">Full Name</p>
              <p className="">
                {employee.full_name ? employee.full_name : "Unknown"}
              </p>
            </div>
            <div className="info-group">
              <p className="text-muted">Gender</p>
              <p>{employee.gender ? employee.gender : "Unknown"}</p>
            </div>
            <div className="info-group">
              <p className="text-muted">Address</p>
              <p>{employee.address ? employee.address : "Unknown"}</p>
            </div>
            <div className="info-group">
              <p className="text-muted">Marital Status</p>
              <p>
                {employee.marital_status ? employee.marital_status : "Unknown"}
              </p>
            </div>
          </div>
          <div>
            <div className="info-group">
              <p className="text-muted">Nationality</p>
              <p className="">
                {employee.nationality ? employee.nationality : "Unknown"}
              </p>
            </div>
            <div className="info-group">
              <p className="text-muted">Date of Birth</p>
              <p>
                {employee.date_of_birth
                  ? moment(employee.date_of_birth).format("Do MMMM, YYYY")
                  : "Unknown"}
              </p>
            </div>
            <div className="info-group">
              <p className="text-muted">Age</p>
              <p>
                {employee.date_of_birth
                  ? moment().diff(employee.date_of_birth, "years")
                  : "Unknown"}
              </p>
            </div>
            <div className="info-group">
              <p className="text-muted">Emergency Contact</p>
              <p>
                {employee.emergency_contact
                  ? employee.emergency_contact
                  : "Unknown"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const returnCareerInfo = () => {
    return (
      <div className="Table">
        <div className="header">
          <p>Employment Information</p>
        </div>

        <div className="body">
          <div>
            <div className="info-group">
              <p className="text-muted">Employee ID(Temp)</p>
              <p className="">
                {employee._id ? employee._id : "Unknown ID"}
              </p>
            </div>
            <div className="info-group">
              <p className="text-muted">Job Title</p>
              <p className="">
                {employee.job_title ? employee.job_title : "Unknown"}
              </p>
            </div>
            <div className="info-group">
              <p className="text-muted">Department</p>
              <p>{employee.department.name ? employee.department.name : "Unassigned to any department"}</p>
            </div>
          </div>
          <div>
            <div className="info-group">
              <p className="text-muted">Employed on</p>
              <p className="">
                {employee.date_of_hire ? moment(employee.date_of_hire).format("Do MMMM, YYYY") : "Unknown Hiring Date"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const returnEducationalInfo = () => {
    return (
        <div className="Table">
          <div className="header">
            <p>Educational Information</p>
          </div>

          <div className="body">
            <div>
              <div className="info-group">
                <p className="text-muted">Schooled At</p>
                <p className="">
                  {employee.school_name ? employee.school_name : "Unknown"}
                </p>
              </div>
              <div className="info-group">
                <p className="text-muted">Certification</p>
                <p>{employee.degree ? employee.degree : "Unknown"}</p>
              </div>
              <div className="info-group">
                <p className="text-muted">From</p>
                <p>{employee.school_year_started ? moment(employee.school_year_started).format("YYYY") : "Unknown"}</p>
              </div>
            </div>
            <div>
              <div className="info-group">
                <p className="text-muted">Country Located</p>
                <p className="">
                  {employee.school_country ? employee.school_country : "Unknown"}
                </p>
              </div>
              <div className="info-group">
                <p className="text-muted">City/Town</p>
                <p>
                  {employee.school_location
                    ? employee.school_location
                    : "Unknown"}
                </p>
              </div>
              <div className="info-group">
                <p className="text-muted">To</p>
                <p> {employee.school_year_completed ? moment(employee.school_year_completed).format("YYYY") : "Unknown"}</p>
              </div>
            </div>
          </div>
    </div>
    )
  };
    switch(infoGroup) {
        case 'personal':
            return returnPersonalInfo();

        case 'education':
            return returnEducationalInfo();
        
        case 'career':
            return returnCareerInfo();
        
        default:
            returnPersonalInfo();

    }
};

export default Table;

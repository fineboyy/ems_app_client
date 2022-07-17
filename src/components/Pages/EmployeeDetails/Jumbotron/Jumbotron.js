import React from 'react'


import './Jumbotron.css'
import profile_img from '../../../../images/default-img.jpg'
const Jumbotron = ({ employee }) => {
  return (
    <div className="Jumbotron">
          <div className="profile-photo">
            <img src={employee.photo ? employee.photo : profile_img} alt="" />
          </div>
          <div className="summary-text">
            <div className="details">
              <h2>{employee.full_name ? employee.full_name : "Unknown"}</h2>
              <p className="blue">
                {employee.job_title ? employee.job_title : "Unknown"}
              </p>
            </div>
            <div className="more">
              <div className="detail">
                <p className="text-muted">Department</p>
                <p className="text-muted">Email</p>
                <p className="text-muted">Contact</p>
              </div>
              <div className="detail blue">
                <p>
                  {employee.department
                    ? employee.department.name
                    : "Unassigned"}
                </p>
                <p>{employee.email ? employee.email : "Unknown"}</p>
                <p>
                  {employee.phone_number ? employee.phone_number : "Unknown"}
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Jumbotron
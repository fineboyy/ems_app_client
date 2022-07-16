import React from 'react'
import { Link } from 'react-router-dom'


import './DepartmentsTable.css'
import profile_img from '../../../../images/default-img.jpg'
export const DepartmentsTable = ({departments}) => {
  return (
    <div className="DepartmentsTable">
            <h2>Departments</h2>

            <table>
              <thead>
                <tr>
                  <th>Department Name</th>
                  <th>Employees</th>
                  <th>Description</th>
                  <th>More</th>
                </tr>
              </thead>
              <tbody>
                {departments.slice(0, 5).map((department) => (
                  <tr key={`${department._id}-dept`}>
                    <td>{department.name}</td>
                    <td className="avatar-group">
                      {department.members.slice(0, 5).map((member) => (
                        <Link
                          to={`/employees/${member._id}`}
                          className="avatar"
                          key={member._id + "member"}
                        >
                          <img
                            src={member.photo ? member.photo : profile_img}
                            alt=""
                          />
                        </Link>
                      ))}
                      <div className="hidden-avatars">
                        {department.members.length > 5
                          ? `+${department.members.length - 5}`
                          : ""}
                      </div>
                    </td>
                    <td>This is the sales department</td>
                    <td>
                      <Link
                        to={`/departments/${department.name}`}
                        className="more-details"
                      >
                        Details...
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="view-more">
              <Link to={"/departments"} className="text-muted">
                View All
              </Link>
            </div>
          </div>
  )
}

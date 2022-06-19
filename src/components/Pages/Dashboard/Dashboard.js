import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// REDUX
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'
import { getAllEmployees } from '../../../actions/employees'

// COMPONENTS
import Sidebar from "../../Sidebar/Sidebar";
import TopBar from "../../TopBar/TopBar";

// CSS
import "../../../index.css";
import "./Dashboard.css";

import profile_img from '../../../images/default-img.jpg'



export const Dashboard = () => {
  const employees = useSelector( (state) => state.employees )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllEmployees())
  }, [dispatch])
  return (
    <div class="Dashboard container">
      <Sidebar />
      <main>
        <TopBar />

        <div class="recent-employees">
            <h2>Recently Viewed Employees</h2>

          <div class="employees">
            {employees.slice(0, 4).map((employee) => (
              <div class="employee" key={employee._id}>
              <div class="profile-photo">
                <img src={employee.photo ? employee.photo : profile_img } alt="" />
              </div>
              <h2>{employee.name}</h2>
              <p>{employee.job_title}</p>
              <Link to="/">View Details</Link>
            </div>
            ) )}
          </div>
        </div>

        {/* <!-- END OF RECENT EMPLOYEES --> */}

        <div class="departments">
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
              {employees.map((employee) => (
                <tr key={`${employee._id}-dept`}>
                <td>Sales Department</td>
                <td class="avatar-group">
                  <div class="avatar">
                    <img src={profile_img} alt="" />
                  </div>
                  <div class="avatar">
                    <img src={profile_img} alt="" />
                  </div>
                  <div class="avatar">
                    <img src={profile_img} alt="" />
                  </div>
                  <div class="avatar">
                    <img src={profile_img} alt="" />
                    <div class="hidden-avatars">+10</div>
                  </div>
                  <div class="avatar">
                    <img src={profile_img} alt="" />
                    <div class="hidden-avatars">+10</div>
                  </div>
                  <div class="hidden-avatars">+10</div>
                </td>
                <td>This is the sales department</td>
                <td>
                  <Link to="/" class="more-details">
                    Details...
                  </Link>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import TopBar from '../../TopBar/TopBar'

import './Employees.css'
export const Employees = () => {
    return (
        <div class="container">
        <Sidebar />

      <main>
        <TopBar />
        <div class="insights">
          <div class="card">
            <span class="material-symbols-sharp"> badge </span>
            <div class="right-side">
              <p>Total Employees</p>
              <h1>550</h1>
              <progress id="whatever" value="10.0" min="0" max="10"></progress>
            </div>
          </div>
          <div class="card">
            <span class="material-symbols-sharp"> person_2 </span>
            <div class="right-side">
              <p>Total Females</p>
              <h1>350</h1>
              <progress id="whatever" value="5.5" min="0" max="10"></progress>
            </div>
          </div>
          <div class="card">
            <span class="material-symbols-sharp"> person </span>
            <div class="right-side">
              <p>Total Males</p>
              <h1>250</h1>
              <progress id="whatever" value="4.5" min="0" max="10"></progress>
            </div>
          </div>
        </div>

        <div class="employee-container">
          <div class="top-buttons">
            <div class="button">
              <span class="material-symbols-sharp"> add_circle </span>
              <p>Add Employee</p>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Contact Details</th>
                <th>Department</th>
                <th>More...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="details-group">
                  <div class="avatar">
                    <img src="./images/profile-1.jpg" alt="" />
                  </div>
                  <div class="text-details">
                    <p class="name">Michael Amponsah</p>
                    <p class="title primary">Project Manager</p>
                  </div>
                </td>
                <td>
                  <div class="contact-item">
                    <span class="material-symbols-sharp text-muted"> mail </span>
                    <p>maqweku@gmail.com</p>
                  </div>
                  <div class="contact-item text-muted">
                    <span class="material-symbols-sharp"> phone </span>
                    <p>+233558410792</p>
                  </div>
                </td>
                <td>IT Department</td>
                <td>
                  <small  onclick="toggleEmployeeDetails()">
                    <a href="#" class="more-details">View Details</a>
                  </small>
                </td>
              </tr>
              {/* <!-- End of 1 Table Row --> */}
              <tr>
                <td class="details-group">
                  <div class="avatar">
                    <img src="./images/profile-2.jpg" alt="" />
                  </div>
                  <div class="text-details">
                    <p class="name">Coby James</p>
                    <p class="title primary">UI/UX Designer</p>
                  </div>
                </td>
                <td>
                  <div class="contact-item">
                    <span class="material-symbols-sharp text-muted"> mail </span>
                    <p>cobi.Jay@gmail.com</p>
                  </div>
                  <div class="contact-item text-muted">
                    <span class="material-symbols-sharp"> phone </span>
                    <p>+233501657251</p>
                  </div>
                </td>
                <td>IT Department</td>
                <td>
                  <small>
                    <a href="#" class="more-details">View Details</a>
                  </small>
                </td>
              </tr>
              {/* <!-- End of 1 Table Row --> */}
              <tr>
                <td class="details-group">
                  <div class="avatar">
                    <img src="./images/profile-3.jpg" alt="" />
                  </div>
                  <div class="text-details">
                    <p class="name">Mary Jane</p>
                    <p class="title primary">Public Relations</p>
                  </div>
                </td>
                <td>
                  <div class="contact-item">
                    <span class="material-symbols-sharp text-muted"> mail </span>
                    <p>maryjane256@outlook.com</p>
                  </div>
                  <div class="contact-item text-muted">
                    <span class="material-symbols-sharp"> phone </span>
                    <p>+233552150737</p>
                  </div>
                </td>
                <td>Communications Department</td>
                <td>
                  <small>
                    <a href="#" class="more-details">View Details</a>
                  </small>
                </td>
              </tr>
              {/* <!-- End of 1 Table Row --> */}
              <tr>
                <td class="details-group">
                  <div class="avatar">
                    <img src="./images/profile-4.jpg" alt="" />
                  </div>
                  <div class="text-details">
                    <p class="name">Ama Diane</p>
                    <p class="title primary">Accountant</p>
                  </div>
                </td>
                <td>
                  <div class="contact-item">
                    <span class="material-symbols-sharp text-muted"> mail </span>
                    <p>ama_ghana@gmail.com</p>
                  </div>
                  <div class="contact-item text-muted">
                    <span class="material-symbols-sharp"> phone </span>
                    <p>+2332893444</p>
                  </div>
                </td>
                <td>Sales Department</td>
                <td>
                  <small>
                    <a href="#" class="more-details">View Details</a>
                  </small>
                </td>
              </tr>
              {/* <!-- End of 1 Table Row --> */}
              <tr>
                <td class="details-group">
                  <div class="avatar">
                    <img src="./images/profile-1.jpg" alt="" />
                  </div>
                  <div class="text-details">
                    <p class="name">Emmanuel Sarfo Adwini</p>
                    <p class="title primary">Business Analyst</p>
                  </div>
                </td>
                <td>
                  <div class="contact-item">
                    <span class="material-symbols-sharp text-muted"> mail </span>
                    <p>adwinisarfo21@gmail.com</p>
                  </div>
                  <div class="contact-item text-muted">
                    <span class="material-symbols-sharp"> phone </span>
                    <p>+23320137315</p>
                  </div>
                </td>
                <td>R & D Department</td>
                <td>
                  <small>
                    <a href="#" class="more-details">View Details</a>
                  </small>
                </td>
              </tr>
              {/* <!-- End of 1 Table Row --> */}
              <tr>
                <td class="details-group">
                  <div class="avatar">
                    <img src="./images/profile-2.jpg" alt="" />
                  </div>
                  <div class="text-details">
                    <p class="name">Albert Nanor</p>
                    <p class="title primary">Chief Executive Officer</p>
                  </div>
                </td>
                <td>
                  <div class="contact-item">
                    <span class="material-symbols-sharp text-muted"> mail </span>
                    <p>albert_nanor04@gmail.com</p>
                  </div>
                  <div class="contact-item text-muted">
                    <span class="material-symbols-sharp"> phone </span>
                    <p>+233883126</p>
                  </div>
                </td>
                <td>Executive Management</td>
                <td>
                  <small>
                    <a href="#" class="more-details">View Details</a>
                  </small>
                </td>
              </tr>
              {/* <!-- End of 1 Table Row --> */}
            </tbody>
          </table>
        </div>

        {/* <div class="employee-details-view">

          <div class="top">
            <div class="left-side">
              <span class="material-symbols-sharp">
                arrow_back_ios
              </span>
              <span class="material-symbols-sharp">
                arrow_forward_ios
              </span>
            </div>
            <div class="right-side">
              <span class="material-symbols-sharp">
                delete
              </span>
              <span class="material-symbols-sharp">
                edit
              </span>
              <span class="material-symbols-sharp">
                fullscreen
              </span>

            </div>
          </div>

          <div class="description">
            <div class="avatar">
              <img src="./images/profile-2.jpg" alt="" />
            </div>

          </div>

        </div> */}
      </main>
    </div>
    )
}
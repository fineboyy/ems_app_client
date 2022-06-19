import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";

import "../../../index.css";
import "./Dashboard.css";
import TopBar from "../../TopBar/TopBar";

export const Dashboard = () => {
  return (
    <div class="Dashboard container">
      <Sidebar />
      <main>
        <TopBar />
        {/* <!-- END OF HEADER --> */}

        <div class="recent-employees">
          <h2>Recently Viewed Employees</h2>

          <div class="employees">
            <div class="employee">
              <div class="profile-photo">
                <img src="./images/profile-1.jpg" alt="" />
              </div>
              <h2>Jane Cooper</h2>
              <p>Sales Officer</p>
              <Link to="/">View Details</Link>
            </div>
            <div class="employee">
              <div class="profile-photo">
                <img src="./images/profile-2.jpg" alt="" />
              </div>
              <h2>Coby James</h2>
              <p>Chief Accountant</p>
              <a href="#">View Details</a>
            </div>
            <div class="employee">
              <div class="profile-photo">
                <img src="./images/profile-3.jpg" alt="" />
              </div>
              <h2>Derrick Jones</h2>
              <p>Operations Manager</p>
              <a href="#">View Details</a>
            </div>
            <div class="employee">
              <div class="profile-photo">
                <img src="./images/profile-4.jpg" alt="" />
              </div>
              <h2>Ama Diane</h2>
              <p>Treasurer</p>
              <a href="#">View Details</a>
            </div>
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
              <tr>
                <td>Sales Department</td>
                <td class="avatar-group">
                  <div class="avatar">
                    <img src="./images/profile-1.jpg" alt="" />
                  </div>
                  <div class="avatar">
                    <img src="./images/profile-2.jpg" alt="" />
                  </div>
                  <div class="avatar">
                    <img src="./images/profile-3.jpg" alt="" />
                  </div>
                  <div class="avatar">
                    <img src="./images/profile-4.jpg" alt="" />
                    <div class="hidden-avatars">+10</div>
                  </div>
                  <div class="avatar">
                    <img src="./images/profile-2.jpg" alt="" />
                    <div class="hidden-avatars">+10</div>
                  </div>
                  <div class="hidden-avatars">+10</div>
                </td>
                <td>This is the sales department</td>
                <td>
                  <a href="#" class="more-details">
                    Details...
                  </a>
                </td>
              </tr>
              <tr>
                <td>Marketing Department</td>
                <td class="avatar-group">
                  <div class="avatar">
                    <img src="./images/profile-1.jpg" alt="" />
                  </div>
                  <div class="avatar">
                    <img src="./images/profile-2.jpg" alt="" />
                  </div>
                  <div class="avatar">
                    <img src="./images/profile-3.jpg" alt="" />
                  </div>
                  <div class="avatar">
                    <img src="./images/profile-4.jpg" alt="" />
                    <div class="hidden-avatars">+10</div>
                  </div>
                  <div class="avatar">
                    <img src="./images/profile-2.jpg" alt="" />
                    <div class="hidden-avatars">+10</div>
                  </div>
                  <div class="hidden-avatars">+10</div>
                </td>
                <td>This is the sales department</td>
                <td>
                  <a href="#" class="more-details">
                    Details...
                  </a>
                </td>
              </tr>
              <tr>
                <td>Procurement Department</td>
                <td class="avatar-group">
                  <div class="avatar">
                    <img src="./images/profile-1.jpg" alt="" />
                  </div>
                  <div class="avatar">
                    <img src="./images/profile-2.jpg" alt="" />
                  </div>
                  <div class="avatar">
                    <img src="./images/profile-3.jpg" alt="" />
                  </div>
                  <div class="avatar">
                    <img src="./images/profile-4.jpg" alt="" />
                    <div class="hidden-avatars">+10</div>
                  </div>
                  <div class="avatar">
                    <img src="./images/profile-2.jpg" alt="" />
                    <div class="hidden-avatars">+10</div>
                  </div>
                  <div class="hidden-avatars">+10</div>
                </td>
                <td>This is the sales department</td>
                <td>
                  <a href="#" class="more-details">
                    Details...
                  </a>
                </td>
              </tr>
              <tr>
                <td>IT Department</td>
                <td class="avatar-group">
                  <div class="avatar">
                    <img src="./images/profile-1.jpg" alt="" />
                  </div>
                  <div class="avatar">
                    <img src="./images/profile-2.jpg" alt="" />
                  </div>
                  <div class="avatar">
                    <img src="./images/profile-3.jpg" alt="" />
                  </div>
                  <div class="avatar">
                    <img src="./images/profile-4.jpg" alt="" />
                    <div class="hidden-avatars">+10</div>
                  </div>
                  <div class="avatar">
                    <img src="./images/profile-2.jpg" alt="" />
                    <div class="hidden-avatars">+10</div>
                  </div>
                  <div class="hidden-avatars">+10</div>
                </td>
                <td>This is the sales department</td>
                <td>
                  <a href="#" class="more-details">
                    Details...
                  </a>
                </td>
              </tr>
              <tr>
                <td>R & D Department</td>
                <td class="avatar-group">
                  <div class="avatar">
                    <img src="./images/profile-1.jpg" alt="" />
                  </div>
                  <div class="avatar">
                    <img src="./images/profile-2.jpg" alt="" />
                  </div>
                  <div class="avatar">
                    <img src="./images/profile-3.jpg" alt="" />
                  </div>
                  <div class="avatar">
                    <img src="./images/profile-4.jpg" alt="" />
                    <div class="hidden-avatars">+10</div>
                  </div>
                  <div class="avatar">
                    <img src="./images/profile-2.jpg" alt="" />
                    <div class="hidden-avatars">+10</div>
                  </div>
                  <div class="hidden-avatars">+10</div>
                </td>
                <td>This is the sales department</td>
                <td>
                  <a href="#" class="more-details">
                    Details...
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

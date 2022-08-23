import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./AddNewUser.css";
import { SettingsNav } from "../../SettingsNav/SettingsNav";

import { useGetAllEmployeesQuery } from "../../../../../app/api/apiSlice";

import profile_img from "../../../../../images/default-img.jpg";

export const AddNewUser = () => {
  const {
    data: employees,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllEmployeesQuery();

  const [query, setQuery] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [currentLength, setCurrentLength] = useState(10);

  const toggleCurrentLength = () => {
    currentLength === 10
      ? setCurrentLength(employees.length)
      : setCurrentLength(10);
  };

  const keys = ["full_name", "job_title"];

  const search = (data) => {
    return data.filter((record) =>
      keys.some((key) =>
        record[key].toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="AddNewUser">
      {" "}
      <div className="PermissionsList">
        <SettingsNav directories={["Users", "New"]} />

        <section className="setting-wrapper">
          <p className="primary fw-500 mb1">All Employees</p>

          <table className="leaves-right-side">
            <tr>
              <td className="SearchComponent border-bottom">
                <input
                  type="text"
                  placeholder="Search Employee"
                  onChange={(e) => setQuery(e.target.value)}
                />
                <span className="material-symbols-sharp"> search </span>
              </td>
            </tr>


              {employees ? (
                search(employees)
                  .slice(0, currentLength)
                  .map((member) => (
                    <UserRow
                      member={member}
                      setSelectedEmployee={setSelectedEmployee}
                    />
                  ))
              ) : (
               <tr>
                 <td>
                  <h2 className="none-found">No Employees Here Yet</h2>
                </td>
               </tr>
              )}

              {employees.length > 10 ? (
                <tr>
                    <td>
                    <p className="cp" onClick={toggleCurrentLength}>
                  {employees.length > currentLength ? "View All" : "View Less"}
                </p>
                    </td>
                </tr>
              ) : (
                ""
              )}
          </table>
        </section>
      </div>
    </div>
  );
};

const UserRow = ({ member, setSelectedEmployee }) => {
  const navigate = useNavigate();
  return (
    <tr
      className="UserRow"
      key={member._id}
      onClick={() => setSelectedEmployee(member)}
    >
      <td>
      <div className="left">
        <div
          className="avatar"
          onClick={() => navigate(`/employees/${member._id}`)}
        >
          <img src={member.photo ? member.photo : profile_img} alt="" />
        </div>
        <div className="text">
          <p>{member.full_name}</p>
          <p className="primary">{member.department.name}</p>
        </div>
      </div>
      </td>

      <td>
      <div className="select-wrapper">
        <select name="" id="">
          <option value="0">Staff</option>
          <option value="0">Adminmistrator</option>
          <option value="0">HR Personnel</option>
          <option value="0">Executive Management</option>
        </select>
        <span className="material-symbols-sharp primary">expand_more</span>
      </div>
      </td>

     <td>
     <div className="d-flex g1">
        <p className="cp">Assign</p>
        {/* <span className="material-symbols-sharp primary">task_alt</span> */}
      </div>
     </td>


    </tr>
  );
};

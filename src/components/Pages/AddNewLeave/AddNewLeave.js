import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { ErrorPage } from "../ErrorPage/ErrorPage";

import "./AddNewLeave.css";
import profile_img from "../../../images/default-img.jpg";
import { useGetAllEmployeesQuery, useCreateLeaveMutation } from "../../../app/api/apiSlice";
import { GoBackButton } from "../SingleDepartment/SingleDepartment";

export const AddNewLeave = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: employees,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllEmployeesQuery(id);

  const [
    createLeave,
    { isLoading: isCreating },
  ] = useCreateLeaveMutation();

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [currentLength, setCurrentLength] = useState(10);
  const [leaveData, setLeaveData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleCurrentLength = () => {
    currentLength === 10
      ? setCurrentLength(employees.length)
      : setCurrentLength(10);
  };

  // SEARCH LOGIC, A LITTLE REPETITIVE I KNOW

  const [query, setQuery] = useState("");

  const keys = ["full_name", "job_title"];

  const search = (data) => {
    return data.filter((record) =>
      keys.some((key) =>
        record[key].toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleChange = (e) => {
    setLeaveData({
      ...leaveData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedEmployee || !leaveData)
      return alert("You must select an employee");

      const requestBody = { ...leaveData, employee: selectedEmployee._id }

    console.log(requestBody);
    try {
      const leaveFromDB = await createLeave(requestBody).unwrap();
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
    handleReset();
    setSelectedEmployee(null)
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setLeaveData(null);
  };

  const returnContent = () => {
    return (
      <div className="AddNewLeave">
        <GoBackButton />

        <div className="leaves-wrapper">
          <div className="leaves-left-side">
            <CreateLeaveCard
              selectedEmployee={selectedEmployee}
              setSelectedEmployee={setSelectedEmployee}
              handleChange={handleChange}
              handleReset={handleReset}
              handleSubmit={handleSubmit}
            />
          </div>
          <div className="leaves-right-side">
            <div className="SearchComponent border-bottom">
              <input
                type="text"
                placeholder="Search Employee"
                onChange={(e) => setQuery(e.target.value)}
              />
              <span className="material-symbols-sharp"> search </span>
            </div>

            {employees ? (
              search(employees)
                .slice(0, currentLength)
                .map((member) => (
                  <EmployeeRow
                    member={member}
                    setSelectedEmployee={setSelectedEmployee}
                  />
                ))
            ) : (
              <h2 className="none-found">No Employees Here Yet</h2>
            )}

            {employees.length > 10 ? (
              <p className="cp" onClick={toggleCurrentLength}>
                {employees.length > currentLength ? "View All" : "View Less"}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  };


  function returnModal() {
    return (
        <main className="CenteredModal">
          <div className="box">
            <h1>Leave Request Added!</h1>
            <div className="buttons">
              <button
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Done
              </button>
            </div>
          </div>
        </main>
    );
  }



  let content;
  if (isLoading) {
    content = <Loader />;

  } else if (isCreating) {
    content = <Loader />
  } else if (showModal) {
    content = returnModal()
  }else if (isSuccess) {
    content = returnContent();
  } else if (isError) {
    content = <ErrorPage />;
  } else if (!Object.keys(employees).length) {
    navigate("/404");
  }
  return content;
};

const CreateLeaveCard = ({
  selectedEmployee,
  setSelectedEmployee,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="CreateLeaveCard">
      <form className="inner" onSubmit={handleSubmit}>
        {selectedEmployee ? (
          <div className="profile border-bottom d-flex sb">
            <div className="left d-flex g1">
              <div className="avatar">
                <img
                  src={
                    selectedEmployee.photo
                      ? selectedEmployee.photo
                      : profile_img
                  }
                  alt=""
                />
              </div>

              <div className="text">
                <p>{selectedEmployee.full_name}</p>
                <p className="primary">{selectedEmployee.job_title}</p>
                <p>
                  <b>{selectedEmployee.department.name}</b>
                </p>
              </div>
            </div>

            <div className="right">
              <span
                className="material-symbols-sharp wiggle"
                onClick={() => setSelectedEmployee(null)}
              >
                close
              </span>
            </div>
          </div>
        ) : (
          <p className="primary border-bottom">Select an Employee</p>
        )}

        <div className=" border-bottom">
          <div className="entry">
            <label htmlFor="leave_type">
              <p>Leave type</p>
            </label>
            <select
              name="leave_type"
              id="leave_type"
              required
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Casual Leave">Casual Leave</option>
              <option value="Personal Work">Personal Work</option>
              <option value="Maternity Leave">Maternity Leave</option>
              <option value="Sick Leave">Sick Leave</option>
            </select>
          </div>

          <div className="entry">
            <label htmlFor="leave_status">
              <p>Leave Status</p>
            </label>
            <select name="leave_status" id="leave_type" onChange={handleChange}>
              <option value="">Select...</option>
              <option value="pending">pending</option>
              <option value="approved">approved</option>
              <option value="rejected">rejected</option>
            </select>
          </div>

          <div className="entry">
            <label htmlFor="leave_from">
              <p>Start Date</p>
            </label>
            <input
              type="date"
              name="leave_from"
              id="leave_from"
              onChange={handleChange}
              required
            />
          </div>
          <div className="entry">
            <label htmlFor="leave_to">
              <p>End Date</p>
            </label>
            <input
              type="date"
              name="leave_to"
              id="leave_to"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="entry border-bottom">
          <textarea
            name="reason"
            id="reason"
            cols="30"
            rows="10"
            placeholder={"Reason for leave (optional)..."}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="buttons">
          <button className="btn2">
            <p>Submit</p>
            <span className="material-symbols-sharp">send</span>
          </button>
        </div>
      </form>
    </div>
  );
};

const EmployeeRow = ({ member, setSelectedEmployee }) => {
  const navigate = useNavigate();
  return (
    <div
      className="EmployeeRow border-bottom"
      key={member._id}
      onClick={() => setSelectedEmployee(member)}
    >
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
          {member?.hod_of ? (
            <small className="hod-tag">
              <b className="blue-deeper">LEAD</b>
            </small>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="right">
        <span className="material-symbols-sharp primary">task_alt</span>
      </div>
    </div>
  );
};

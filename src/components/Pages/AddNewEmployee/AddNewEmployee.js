import React, { useEffect, useState, useRef } from "react";
import moment from "moment";
import FileBase64 from "react-file-base64";
import { useNavigate } from "react-router-dom";

//COMPONENTS

import Loader from "../../Loader/Loader";
import {ErrorPage} from '../../Pages/ErrorPage/ErrorPage'

//REDUX
import { useGetAllDepartmentsQuery } from "../../../app/api/apiSlice";
import { useCreateNewEmployeeMutation } from "../../../app/api/apiSlice";

import "./AddNewEmployee.css";
const AddNewEmployee = () => {
  const topSection = useRef(null);
  const navigate = useNavigate();

  const {
    data: departments,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllDepartmentsQuery();
  const [
    createEmployee,
    { isLoading: isCreating },
  ] = useCreateNewEmployeeMutation();

  useEffect(() => {
    document.title =
      "Create New Employee | Div.co Human Resource Management System";
  });
  const [newEmployee, setNewEmployee] = useState({
    first_name: "",
    last_name: "",
    full_name: "",
    email: "",
    date_of_birth: "",
    photo: "",
    gender: "",
    address: "",
    emergency_contact: "",
    marital_status: "",
    phone_number: "",
    department: "",
    job_title: "",
    nationality: "",
    degree: "",
    date_of_hire: "",
    school_country: "",
    school_city: "",
    school_year_started: "",
    school_year_completed: "",
  });

  const [newID, setNewID] = useState("404");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setNewEmployee({
      ...newEmployee,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleImageUpload = (imgUrl) => {
    setNewEmployee({
      ...newEmployee,
      photo: imgUrl,
    });
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setNewEmployee({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newEmployeeFromDB = await createEmployee(newEmployee).unwrap();
      setNewID(newEmployeeFromDB._id);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
    handleReset();
  };

  function returnModal() {
    return (
        <main className="Centered">
          <div className="box">
            <h1>Employee Successfully Created!</h1>
            <div className="buttons">
              <button onClick={() => navigate(`/employees/${newID}`)}>
                View Employee
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Back to Form
              </button>
            </div>
          </div>
        </main>
    );
  }

  function returnForm() {
    return (
      <div className="AddNewEmployee">

          <form className="form-area" ref={topSection} onSubmit={handleSubmit}>
            <div className="fields">
              <fieldset>
                <h2>Personal Information</h2>

                <div className="inputs">
                  <div className="input-field">
                    <label htmlFor="first_name">First Name</label>
                    <input
                      type="text"
                      placeholder="Eg. John"
                      name="first_name"
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                      type="text"
                      placeholder="Eg. Doe"
                      name="last_name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="inputs">
                  <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={handleChange} />
                  </div>
                  <div className="input-field">
                    <label htmlFor="phone_number">Phone No.</label>
                    <input
                      type="text"
                      placeholder=""
                      name="phone_number"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="inputs">
                  <div className="input-field">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      placeholder="Eg. 15 Obour Street. Apt. 5"
                      name="address"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="nationality">Nationality</label>
                    <input
                      type="text"
                      name="nationality"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="inputs">
                  <div className="input-field">
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="" onChange={handleChange}>
                      <option value="">Select...</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="input-field">
                    <label htmlFor="marital_status">Marital Status</label>
                    <select name="marital_status" onChange={handleChange}>
                      <option value="">Select...</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                    </select>
                  </div>
                </div>
                <div className="inputs">
                  <div className="input-field">
                    <label htmlFor="emergency_contact">Emergency Contact</label>
                    <input
                      type="text"
                      name="emergency_contact"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="date_of_birth">Date of Birth</label>
                    <input
                      type="date"
                      name="date_of_birth"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <h2>Employment</h2>

                <div className="inputs">
                  <div className="input-field">
                    <label htmlFor="job_title">Job Title</label>
                    <input
                      type="text"
                      placeholder="Eg. Accountant"
                      name="job_title"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="department">Department</label>
                    <select
                      name="department"
                      id=""
                      onChange={handleChange}
                      required
                    >
                      <option value=""> Select Department ...</option>
                      {departments.map((department) => (
                        <option key={department._id} value={department._id}>
                          {department.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="inputs">
                  <div className="input-field">
                    <label htmlFor="date_of_hire">Date of Hire</label>
                    <input
                      type="date"
                      name="date_of_hire"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-field hidden">
                    <label htmlFor=""></label>
                    <input type="text" />
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <h2>Education</h2>

                <div className="inputs">
                  <div className="input-field">
                    <label htmlFor="firstname">School</label>
                    <input
                      type="text"
                      placeholder="Eg. University of Ghana - Legon"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="firstname">Degree</label>
                    <input
                      type="text"
                      placeholder="Eg. Bsc. Accounting"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="inputs">
                  <div className="input-field">
                    <label htmlFor="school_country">School Country</label>
                    <input type="text" onChange={handleChange} />
                  </div>
                  <div className="input-field">
                    <label htmlFor="school_city">City/Town</label>
                    <input type="text" placeholder="" onChange={handleChange} />
                  </div>
                </div>
                <div className="inputs">
                  <div className="input-field">
                    <label htmlFor="school_year_started">Year Started</label>
                    <input
                      type="number"
                      min="1950"
                      max={moment().format("YYYY")}
                      defaultValue={"2015"}
                      name="school_year_started"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="school_year_completed">
                      Year Completed
                    </label>
                    <input
                      type="number"
                      min="1950"
                      max={moment().format("YYYY")}
                      defaultValue={"2018"}
                      name="school_year_completed"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="image-upload">
              <div className="image-box" style={{ position: "relative" }}>
                {newEmployee.photo && (
                  <img
                    src={newEmployee.photo}
                    alt=""
                    width={"100%"}
                    height="100%"
                    style={{ position: "absolute" }}
                  />
                )}
                <h2>Upload Image</h2>

                <label htmlFor="photo" className="custom-file-upload">
                  <span className="material-symbols-sharp">
                    add
                    <FileBase64
                      multiple={false}
                      onDone={({ base64 }) => {
                        handleImageUpload(base64);
                      }}
                    />
                  </span>
                </label>
              </div>
            </div>
            <div className="form-buttons">
              <input
                type="submit"
                className="form-button-submit"
                value={"Submit"}
              />
              <input
                type="reset"
                className="form-button-cancel"
                value={"Reset"}
                onClick={handleReset}
              />
            </div>
          </form>
      </div>
    );
  }

   let content

  if(isLoading) {
    content = <Loader />
  } else if (isCreating) {
    content = <Loader />
  } 
 else if(showModal) {
    content = returnModal();
  }else if(isSuccess) {
    content = returnForm()
  } else if (isError) {
    content = <ErrorPage />
  }

 
  return content
};

export default AddNewEmployee;

import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

//ACTIONS
import {
  useGetOneEmployeeQuery,
  useDeleteEmployeeMutation,
} from "../../../app/api/apiSlice";

//COMPONENTS
import { NotFoundPage } from "../404Page/404Page";
import "./EmployeeDetails.css";

import profile_img from "../../../images/default-img.jpg";
import Table from "./Table/Table";
import Jumbotron from "./Jumbotron/Jumbotron";
import Loader from "../../Loader/Loader";
import { ErrorPage } from "../ErrorPage/ErrorPage";
const EmployeeDetails = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const [infoGroup, setInfoGroup] = useState("personal");
  const [showModal, setShowModal] = useState(false);

  const { id } = useParams();
  const {
    data: employee,
    isLoading,
    isSuccess,
    isError,
  } = useGetOneEmployeeQuery(id);
  const [
    deleteEmployee,
    { isLoading: isDeleting, isSuccess: isDeleted, isError: deleteError },
  ] = useDeleteEmployeeMutation();

  useEffect(() => {
    document.title = `${
      employee?.full_name || "Employee"
    } | Div.co Human Resource Management System`;
  });

  let content;

  const deleteandResetModal = () => {
    setShowModal(false);
    deleteEmployee({
      id: employee._id,
      department_id: employee.department._id,
    });
  };

  //MODALS
  const showConfirmModal = () => {
    return (
      <main className="CenteredModal">
        <div className="box">
          <h1>Are you sure?</h1>
          <p>You are about to delete this employee</p>
          <div className="buttons">
            <button onClick={() => setShowModal(false)}>Cancel</button>
            <button onClick={deleteandResetModal} className="delete-btn">
              Delete
            </button>
          </div>
        </div>
      </main>
    );
  };
  const showDeletedModal = () => {
    return (
      <main className="CenteredModal">
        <div className="box">
          <h1>Employee sucessfully deleted.</h1>
          <div className="buttons">
            <button onClick={() => navigate("/employees")}>Done</button>
          </div>
        </div>
      </main>
    );
  };

  //ACTUAL PAGE content
  const returnContent = () => {
    return (
      <div className="EmployeeDetails">
        <div className="top">
          <div className="left-side">
            <div onClick={() => navigate(-1)} className="d-flex g1 cp">
              <span className="material-symbols-sharp arrow-back">
                arrow_back
              </span>

              <p>
                <b>Go Back</b>
              </p>
            </div>
          </div>
          <div className="right-side">
            <span
              className="material-symbols-sharp"
              onClick={() => setShowModal(true)}
            >
              delete
            </span>
            <span className="material-symbols-sharp">edit</span>
          </div>
        </div>

        <Jumbotron employee={employee} profile_img={profile_img} />

        {/* {employee?.leave_applications?.length ? <LeaveTab /> : ""} */}

        <Nav infoGroup={infoGroup} setInfoGroup={setInfoGroup} />

        <Table employee={employee} infoGroup={infoGroup} />
      </div>
    );
  };

  if (isDeleting) return <Loader />;
  if (showModal) return showConfirmModal();
  if (isDeleted) return showDeletedModal();

  if (isLoading) {
    content = <Loader />;
  } else if (employee === null || employee === undefined) {
    content = <NotFoundPage />;
  } else if (isSuccess) {
    content = returnContent();
  } else if (isError) {
    content = <ErrorPage />;
  } else if (deleteError) {
    content = <ErrorPage />;
  }
  return content;
};

//  EXTRACTED COMPONENTS

const Nav = ({ infoGroup, setInfoGroup }) => {
  return (
    <nav className="menus">
      <h3
        className={
          infoGroup === "personal" ? "text-muted active" : "text-muted"
        }
        onClick={() => setInfoGroup("personal")}
      >
        PERSONAL
      </h3>
      <h3
        className={
          infoGroup === "education" ? "text-muted active" : "text-muted"
        }
        onClick={() => setInfoGroup("education")}
      >
        EDUCATION
      </h3>
      <h3
        className={infoGroup === "career" ? "text-muted active" : "text-muted"}
        onClick={() => setInfoGroup("career")}
      >
        CAREER
      </h3>
    </nav>
  );
};

// const LeaveTab = () => {
//   return (
//     <div className="LeaveTab">
//       <header>
//         <p className="primary">This employee has applied for leave</p>
//       </header>

//       <div className="content">
//         <div className="left">
//           <div className="details">
//             <div className="detail">
//               <div className="key">Leave Type</div>
//               <div className="value">Personal Work</div>
//             </div>
//             <div className="detail">
//               <div className="key">Length</div>
//               <div className="value">3 Months</div>
//             </div>
//             <div className="detail">
//               <div className="key">From</div>
//               <div className="value">7th August, 2022</div>
//             </div>
//             <div className="detail">
//               <div className="key">To</div>
//               <div className="value">7th November, 2022</div>
//             </div>
//           </div>
//         </div>
//         <div className="right">
//           <button className="approve-btn">Approve</button>
//           <button className="reject-btn">Reject</button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default EmployeeDetails;

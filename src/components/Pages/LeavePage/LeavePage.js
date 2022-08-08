import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

//redux
// import { useDispatch, useSelector } from 'react-redux'
import { useGetAllLeaveApplicationsQuery } from "../../../app/api/apiSlice";
import Loader from "../../Loader/Loader";

///COMPONENTS
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { InfoCards } from "./InfoCards/InfoCards";

import "./LeavePage.css";
import { LeaveTable } from "./LeaveTable/LeaveTable";
import { LeaveTypes } from "./LeaveTypes/LeaveTypes";
export const LeavePage = () => {
  const {
    data: leave_applications,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllLeaveApplicationsQuery();

  const pendingLeaves = leave_applications?.filter(
    (leave) => leave.leave_status === "pending"
  );
  const rejectedLeaves = leave_applications?.filter(
    (leave) => leave.leave_status === "rejected"
  );
  const resolvedApplications = leave_applications?.filter(
    (leave) => leave.leave_status !== "pending"
  );
  const approvedLeaves = leave_applications?.filter(
    (leave) => leave.leave_status === "approved"
  );

  useEffect(() => {
    document.title =
      "Leave Management - Div.Co Human Resource Management System";
  });

  const filterByDate = (data) => {
    const startDate = moment().startOf("month");
    if (startDate === "") return data;
    return data.filter((record) =>
      moment(record.applied_date).isSameOrAfter(startDate)
    );
  };

  const returnContent = () => {
    return (
      <div className="LeavePage">
        <InfoCards
          total={filterByDate(leave_applications)}
          pending={filterByDate(pendingLeaves)}
          rejected={filterByDate(rejectedLeaves)}
          approved={filterByDate(approvedLeaves)}
        />

        <LeaveTypes />

        <div className="top-buttons">
          <p></p>
          <Link to={"new"} className="button">
            <span className="material-symbols-sharp"> add_circle </span>
            <p>Create New Leave</p>
          </Link>
        </div>

        <LeaveTable
          tableHeader="Unresolved Leave Applications"
          applications={pendingLeaves}
        />
        <LeaveTable
          tableHeader="Leave Records List"
          applications={resolvedApplications}
        />
      </div>
    );
  };

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (isError) {
    content = <ErrorPage />;
  } else if (isSuccess) {
    content = returnContent();
  }
  return content;
};

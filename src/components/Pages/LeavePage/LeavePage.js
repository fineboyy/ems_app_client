import React, {useEffect} from "react";

//redux
import { useDispatch, useSelector } from 'react-redux'
import { useGetAllLeaveApplicationsQuery } from "../../../app/api/apiSlice";
import Loader from "../../Loader/Loader";

///COMPONENTS
import Sidebar from "../../Sidebar/Sidebar";
import TopBar from "../../TopBar/TopBar";
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


  const dispatch = useDispatch()


  const pendingLeaves = leave_applications?.filter((leave) => leave.leave_status === "pending")
  const rejectedLeaves = leave_applications?.filter((leave) => leave.leave_status === "rejected")
  const resolvedApplications = leave_applications?.filter((leave) => leave.leave_status !== "pending")
  const approvedLeaves = leave_applications?.filter((leave) => leave.leave_status === "approved")


  useEffect(() => {
    document.title = "Leave Management - Div.Co Human Resource Management System"
  })

  const returnContent = () => {
    return (
      <div className="LeavePage container">
        <Sidebar  />
        <main>
          <TopBar pageName={"Leave Management"} />
  
          <InfoCards total = {leave_applications} pending = {pendingLeaves}  rejected ={rejectedLeaves} approved = {approvedLeaves} />
  
          <LeaveTypes />
  
          <LeaveTable tableHeader="Unresolved Leave Applications" applications = {pendingLeaves} />
          <LeaveTable tableHeader="Leave Records List" applications = {resolvedApplications} />
          
        </main>
      </div>
    );
  }

  let content 

  if(isLoading) {
    content = <Loader />
  } else if (isError) {
    content = <ErrorPage /> 
  } else if (isSuccess) {
    content = returnContent()
  }
  return content
};

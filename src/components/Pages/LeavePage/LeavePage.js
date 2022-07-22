import React, {useEffect} from "react";

//redux
import { useDispatch, useSelector } from 'react-redux'
import { getAllLeaveApplications } from "../../../redux/actions/leave-applications";

///COMPONENTS
import Sidebar from "../../Sidebar/Sidebar";
import TopBar from "../../TopBar/TopBar";
import { InfoCards } from "./InfoCards/InfoCards";

import "./LeavePage.css";
import { LeaveTable } from "./LeaveTable/LeaveTable";
import { LeaveTypes } from "./LeaveTypes/LeaveTypes";
export const LeavePage = ({ sidebarVisible, setSidebarVisible }) => {


  const dispatch = useDispatch()
  const leave_applications = useSelector((state) => state.leave_applications )


  const pendingLeaves = leave_applications.filter((leave) => leave.leave_status === "pending")
  const rejectedLeaves = leave_applications.filter((leave) => leave.leave_status === "rejected")
  const resolvedApplications = leave_applications.filter((leave) => leave.leave_status !== "pending")
  // const unResolvedApplications = leave_applications.filter((leave) => leave.leave_type === "pending")
  const approvedLeaves = leave_applications.filter((leave) => leave.leave_status === "approved")


  useEffect(() => {
      dispatch(getAllLeaveApplications())
  }, [dispatch])


  document.title = "Leave Management - Div.Co Human Resource Management System"

  return (
    <div className="LeavePage container">
      <Sidebar
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
      />
      <main>
        <TopBar
          sidebarVisible={sidebarVisible}
          setSidebarVisible={setSidebarVisible}
          pageName={"Leave Management"}
        />

        <InfoCards total = {leave_applications} pending = {pendingLeaves}  rejected ={rejectedLeaves} approved = {approvedLeaves} />

        <LeaveTypes />

        <LeaveTable tableHeader="Unresolved Leave Applications" applications = {pendingLeaves} />
        <LeaveTable tableHeader="Leave Records List" applications = {resolvedApplications} />
        
      </main>
    </div>
  );
};

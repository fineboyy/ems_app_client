import React from "react";

import "./TableList.css";
import profile_img from "../../../../../images/default-img.jpg";
export const TableList = ({ tableHeader }) => {
  const arr = ["approved", "approved", "pending", "rejected", "approved"];

  const unResolvedLeaveRequestsHeaders = [
    "Employee",
    "Department",
    "Leave Type",
    "Applied On",
    "Leave From",
    "Leave To",
    "No. of Days",
    "Actions",
  ];
  const leaveRecordHeaders = [
    "Employee",
    "Department",
    "Leave Type",
    "Applied On",
    "Leave From",
    "Leave To",
    "No. of Days",
    "Status",
  ];

  const headers = tableHeader === "Unresolved Leave Applications" ? unResolvedLeaveRequestsHeaders : leaveRecordHeaders
  return (
    <table className="TableList">
      <thead>
        <tr>
          {headers.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {arr.map((record) => (
          <TableRow record={record} tableHeader={tableHeader} />
        ))}
      </tbody>
    </table>
  );
};

const returnTag = (record) => {
  if(record === "approved") return (
    <div className="status status-approved">
  <small className="success-darker status-text">Approved</small>
  </div>
  )
if(record === "pending") return (
<div className="status status-pending">
<p className="warning status-text">Pending</p>
</div>
)
if(record === "rejected") return (
<div className="status status-rejected">
<p className="danger status-text">Rejected</p>
</div>
)
}

const TableRow = ({record, tableHeader}) => {
  return (
    <tr>
            <td className="profile">
              <div className="avatar">
                <img src={profile_img} alt="" />
              </div>
              <p>Michael Amponsah</p>
            </td>
            <td>
              <p>Engineering</p>
            </td>
            <td>
              <p>Casual Leave</p>
            </td>
            <td>
              <p>22-02-2022</p>
            </td>
            <td>
              <p>06-07-2022</p>
            </td>
            <td>
              <p>07-08-2023</p>
            </td>
            <td>
              <p>382 Days</p>
            </td>
            {tableHeader === "Unresolved Leave Applications" ? (
              <td className="actions">
                <span className="material-symbols-sharp success">
                  check_circle
                </span>
                <span className="material-symbols-sharp danger">cancel</span>
              </td>
            ) : (
              <td>
                { returnTag(record) }
              </td>
            )}
          </tr>
  )
}



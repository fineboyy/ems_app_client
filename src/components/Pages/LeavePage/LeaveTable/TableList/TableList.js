import React from "react";
import moment from "moment";

import "./TableList.css";
import profile_img from "../../../../../images/default-img.jpg";
import { Link } from "react-router-dom";
import { useResolveLeaveApplicationMutation } from "../../../../../app/api/apiSlice";
import { InlineLoader } from "../../../../Loader/InlineLoader/InlineLoader";
export const TableList = ({ tableHeader, applications }) => {

  const sortByDate = (data) => {
    return data.sort((a, b) => b.last_modified > a.last_modified ? 1 : -1 )
  }

  const unResolvedLeaveRequestsHeaders = [
    "Employee",
    "Department",
    "Leave Type",
    "Applied On",
    "Leave From",
    "Leave To",
    "Duration",
    "Actions",
  ];
  const leaveRecordHeaders = [
    "Employee",
    "Department",
    "Leave Type",
    "Applied On",
    "Leave From",
    "Leave To",
    "Duration",
    "Status",
  ];

  const headers =
    tableHeader === "Unresolved Leave Applications"
      ? unResolvedLeaveRequestsHeaders
      : leaveRecordHeaders;
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
        {sortByDate(applications).map((record) => (
          <TableRow record={record} tableHeader={tableHeader} />
        ))}
      </tbody>
    </table>
  );
};

const returnTag = (record) => {
  if (record === "approved")
    return (
      <div className="status status-approved">
        <small className="success-darker status-text">Approved</small>
      </div>
    );
  if (record === "pending")
    return (
      <div className="status status-pending">
        <p className="warning status-text">Pending</p>
      </div>
    );
  if (record === "rejected")
    return (
      <div className="status status-rejected">
        <p className="danger status-text">Rejected</p>
      </div>
    );
};

const TableRow = ({ record, tableHeader }) => {
  const [resolveLeaveApplication, { isLoading, isSuccess }] =
    useResolveLeaveApplicationMutation();

    if(isLoading) return (
      <tr>
        <td colSpan={8}><InlineLoader /></td>
      </tr>
    )
    if(isSuccess) return ""
  return (
    <tr>
      <td className="profile">
        <Link to={`/employees/${record.employee}`} className="avatar">
          <img
            src={record.employee_photo ? record.employee_photo : profile_img}
            alt=""
          />
        </Link>
        <p>{record.employee_name ? record.employee_name : "Unknown"}</p>
      </td>
      <td>
        <p>
          {record.employee_department_name
            ? record.employee_department_name
            : "Unknown"}
        </p>
      </td>
      <td>
        <p>{record.leave_type ? record.leave_type : "Unknown"}</p>
      </td>
      <td>
        <p>
          {record.applied_date
            ? moment(record.applied_date).format("DD-MM-YYYY")
            : "Unknown"}
        </p>
      </td>
      <td>
        <p>
          {record.leave_from
            ? moment(record.leave_from).format("DD-MM-YYYY")
            : "Unknown"}
        </p>
      </td>
      <td>
        <p>
          {record.leave_to
            ? moment(record.leave_to).format("DD-MM-YYYY")
            : "Unknown"}
        </p>
      </td>
      <td>
        <p>
          {record.leave_from && record.leave_to
            ? moment(record.leave_from).to(moment(record.leave_to), true)
            : "Unknown"}
        </p>
      </td>
      {tableHeader === "Unresolved Leave Applications" ? (
        <td className="actions">
          <span
            className="material-symbols-sharp success"
            onClick={() =>
              resolveLeaveApplication({
                leave_id: record._id,
                employee_id: record.employee,
                resolve: "approved",
              })
            }
          >
            check_circle
          </span>
          <span
            className="material-symbols-sharp danger"
            onClick={() =>
              resolveLeaveApplication({
                leave_id: record._id,
                employee_id: record.employee,
                resolve: "rejected",
              })
            }
          >
            cancel
          </span>
        </td>
      ) : (
        <td>{returnTag(record.leave_status)}</td>
      )}
    </tr>
  );
};

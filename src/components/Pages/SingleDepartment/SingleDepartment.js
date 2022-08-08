import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { ErrorPage } from "../ErrorPage/ErrorPage";

import "./SingleDepartment.css";
import profile_img from "../../../images/default-img.jpg";
import { useGetOneDepartmentQuery } from "../../../app/api/apiSlice";
export const SingleDepartment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: department,
    isLoading,
    isSuccess,
    isError,
  } = useGetOneDepartmentQuery(id);

  const returnContent = () => {
    return (
      <div className="SingleDepartment">
        <GoBackButton />

        <div className="department-wrapper">
          <div className="department-left-side">
            <SummaryCard department={department} />
          </div>
          <div className="department-right-side">
            <p className="blue-deeper border-bottom">Members</p>

            {department.members.length ? (
              department.members.map((member) => <MemberRow member={member} />)
            ) : (
              <h2 className="none-found">No Employees Here Yet</h2>
            )}
          </div>
        </div>
      </div>
    );
  };

  let content;
  if (isLoading) {
    content = <Loader />;
  } else if (isSuccess) {
    content = returnContent();
  } else if (isError) {
    content = <ErrorPage />;
  } else if (!Object.keys(department).length) {
    navigate("/404");
  }
  return content;
};

const SummaryCard = ({ department }) => {
  return (
    <div className="SummaryCard">
      <div className="inner">
        <div className="avatar">
          <p>{department.name ? department.name.substr(0, 1) : "U"}</p>
        </div>
        <div className="right">
          <h2 className="border-bottom">
            {department.name ? department.name : "Unknown"}
          </h2>

          <div className="other-details border-bottom">
            <div className="column">
              <div className="entry">
                <div className="key">
                  <p className="text-muted">Key</p>
                </div>
                <div className="value blue-deeper">
                  <p>
                    <b className="seablue">Some Value</b>
                  </p>
                </div>
              </div>
              <div className="entry">
                <div className="key">
                  <p className="text-muted">Key</p>
                </div>
                <div className="value blue-deeper">
                  <p>
                    <b className="seablue">Some Value</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="entry">
                <div className="key">
                  <p className="text-muted">Key</p>
                </div>
                <div className="value blue-deeper">
                  <p>
                    <b className="seablue">Some Value</b>
                  </p>
                </div>
              </div>
              <div className="entry">
                <div className="key">
                  <p className="text-muted">Key</p>
                </div>
                <div className="value blue-deeper">
                  <p>
                    <b className="seablue">Some Value</b>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="entry border-bottom">
            <div className="key">
              <p className="text-muted">Address</p>
            </div>
            <div className="value blue-deeper">
              <p>12 Hake Street, Community 5, Tema - Ghana</p>
            </div>
          </div>

          <div className="buttons">
            <button className="btn1">
              <span className="material-symbols-sharp">edit</span>
              <p>Edit</p>
            </button>
            <button className="btn2">
              <span className="material-symbols-sharp">delete</span>
              <p>Delete</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MemberRow = ({ member }) => {
  const navigate = useNavigate();
  return (
    <div className="MemberRow border-bottom" key={member._id}>
      <div className="left">
        <div
          className="avatar"
          onClick={() => navigate(`/employees/${member._id}`)}
        >
          <img src={member.photo ? member.photo : profile_img} alt="" />
        </div>
        <div className="text">
          <p>{member.full_name}</p>
          <p className="primary">
            {member.job_title ? member.job_title : "Unknown"}
          </p>
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
        <small>{member?.email ? member.email : ""}</small>
        <br />
        <small>{member?.phone_number ? member.phone_number : ""}</small>
      </div>
    </div>
  );
};

export const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="go-back" onClick={() => navigate(-1)}>
      <span className="material-symbols-sharp">arrow_back</span>
      <p><b>Go Back</b></p>
    </div>
  );
};

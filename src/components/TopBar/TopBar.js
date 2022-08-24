import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./TopBar.css";
import { setSidebarVisible } from "../../features/sidebarVisibility/sidebarVisibilitySlice";

import { logOut as clearCredentials } from "../../features/auth/authSlice";
import { useSignOutMutation } from "../../features/auth/authApiSlice";

import { useGetAllEmployeesQuery } from "../../app/api/apiSlice";

import Loader from "../Loader/Loader";

import temp_img from "../../images/profile-1.jpg";
import profile_img from "../../images/default-img.jpg";
import admin_img from "../../images/bulb.png";

const TopBar = ({ pageName }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sidebarVisible = useSelector((state) => state.sidebarVisibility);
  const [showBubble, setShowBubble] = useState(false);

  const [signOut, { isLoading }] = useSignOutMutation();
  const logOutUser = async () => {
    try {
      await signOut();
      dispatch(clearCredentials());
      navigate("/login");
    } catch (error) {
      console.log("Error", error);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <nav className="TopBar">
      {returnBrand(pageName)}

      <div className="menu-and-search">
        <div
          className="menu"
          onClick={() => dispatch(setSidebarVisible(!sidebarVisible.value))}
        >
          <span className="material-symbols-sharp"> menu </span>
        </div>
        <SearchBar />
      </div>

      <div className="icons">
        <div className="user-profile d-flex g05 aic">
          <div className="profile-text d-flex fdc aife">
            <p>Michael Amponsah</p>
            <p className="primary">Administrator</p>
          </div>

          <div className="avatar-wrapper">
            <div className="avatar" onMouseEnter={() => setShowBubble(true)}>
              <img src={temp_img} alt="" />
            </div>

            <div
              className={
                showBubble ? "options-bubble" : "options-bubble d-none"
              }
              onMouseLeave={() => setShowBubble(false)}
            >
              <div
                className="option d-flex"
                onClick={() => navigate("/settings")}
              >
                <span className="material-symbols-sharp">settings</span>
                <p>Settings</p>
              </div>
              <div className="option d-flex" onClick={logOutUser}>
                <span className="material-symbols-sharp">logout</span>
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const returnBrand = (pageName = "Some page") => {
  return (
    <div className="brand">
      <h1>Nyame Na Ay3 Enterprise</h1>
    </div>
  );
};

const SearchBar = () => {
  const { data: employees } = useGetAllEmployeesQuery();

  // SEARCH LOGIC (Probably repeating for the 50th time)
  const [query, setQuery] = useState("");

  const keys = ["full_name", "job_title"];

  const search = (data) => {
    return data.filter((record) =>
      keys.some((key) =>
        record[key].toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <span className="material-symbols-sharp"> search </span>

      {query.length ? (
        <div className="search-bubble">
          {search(employees).length ? (
            search(employees)
              .slice(0, 6)
              .map((result) => (
                <Link
                  to={`/employees/${result._id}`}
                  className="entry d-flex g2"
                >
                  <div className="avatar">
                    <img
                      src={result.photo ? result.photo : profile_img}
                      alt="search result"
                    />
                  </div>
                  <div className="entry-text">
                    <p>{result.full_name ? result.full_name : ""}</p>
                    <p className="primary">
                      {result.job_title ? result.job_title : ""}
                    </p>
                  </div>
                </Link>
              ))
          ) : (
            <p className="tac">No Results were found</p>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TopBar;

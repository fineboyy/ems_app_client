import React from "react";

import profile_img from "../../../../images/profile-2.jpg";
export const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-card">
        <div className="avatar">
          <img src={profile_img} alt="" />
        </div>
      </div>
      <div className="user-info">
        <p className="header">Your account info.</p>
        <div className="entry">
          <div className="field">
            <p>Name:</p>
          </div>
          <div className="value">
            <p>Michael Amponsah</p>
          </div>
        </div>
        <div className="entry">
          <div className="field">
            <p>Email Address:</p>
          </div>
          <div className="value">
            <p>maqweku@gmail.com</p>
          </div>
        </div>
        <div className="entry">
          <div className="field">
            <p>Role:</p>
          </div>
          <div className="value">
            <p>Administrator</p>
          </div>
        </div>
        <div className="entry">
          <div className="field">
            <p>Department:</p>
          </div>
          <div className="value">
            <p>Engineering</p>
          </div>
        </div>
      </div>
      {/* <div className="user-profile-buttons">
              <button>Logout</button>
              <button>Logout</button>
            </div>      */}
    </div>
  );
};

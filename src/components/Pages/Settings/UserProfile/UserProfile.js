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
          <span className="material-symbols-sharp blue-deeper">
              badge
            </span>
            <p>Name:</p>
          </div>
          <div className="value">
            <p>Michael Amponsah</p>
          </div>
        </div>
        <div className="entry">
          <div className="field">
            <span className="material-symbols-sharp blue-deeper">
              mail
            </span>
            <p>Email Address:</p>
          </div>
          <div className="value">
            <p>maqweku@gmail.com</p>
          </div>
        </div>
        <div className="entry">
          <div className="field">
          <span className="material-symbols-sharp blue-deeper">
              work
            </span>
            <p>Role:</p>
          </div>
          <div className="value">
            <p>Administrator</p>
          </div>
        </div>
        <div className="entry">
          <div className="field">
          <span className="material-symbols-sharp blue-deeper">
              corporate_fare
            </span>
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

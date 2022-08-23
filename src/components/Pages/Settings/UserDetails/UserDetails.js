import React from "react";
import { SettingsNav } from "../SettingsNav/SettingsNav";

import "./UserDetails.css";
export const UserDetails = () => {
  return (
    <div className="UserDetails">
      <SettingsNav directories={["Current User"]} />
      <div className="setting-wrapper">
        <div className="inner">
          <div className="details">
            <div className="data">
              <p className="field">Name</p>
              <p className="value">
                <b>Michael Amponsah</b>
              </p>
            </div>
            <div className="data">
              <p className="field">username</p>
              <p className="value">
                <b>maqweku@gmail.com</b>
              </p>
            </div>
            <div className="data">
              <p className="field">Role</p>
              <p className="value">
                <b>Administrator</b>
              </p>
            </div>
            <button className="changePasswordBtn">change password</button>
          </div>

          <div className="right-side">

            <form onSubmit={() => "abc"} className="changePasswordForm">
              <div className="fields">
                <span className="material-symbols-sharp lock-icon">
                  lock_reset
                </span>
                <div className="field">
                  <label htmlFor="old_password">
                    <p>Current Password</p>
                  </label>
                  <input type="password" name="old_password" />
                </div>
                <div className="field">
                  <label htmlFor="new_password">
                    <p>New Password</p>
                  </label>
                  <input type="password" name="new_password" />
                </div>
                <div className="field">
                  <label htmlFor="confirm_new_password">
                    <p>Confirm New Password</p>
                  </label>
                  <input type="password" name="confirm_new_password" />
                </div>
              </div>

              <div className="buttons">
                <button type="submit">Save</button>
                <button className="cancel-btn">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { SettingsNav } from "../SettingsNav/SettingsNav";

import "./PermissionsList.css";
export const PermissionsList = () => {
  const dummyRoles = [
    "Super Admin",
    "Admin",
    "HR Personnel",
    "Executive Management",
  ];
  return (
    <div className="PermissionsList">
      <SettingsNav directories={["Permissions"]} />

      <section className="setting-wrapper">
        <p className="primary fw-500">User Roles</p>

        <div className="top-btns">
          <div className="btn">
            <span className="material-symbols-sharp primary">add</span>
            <p>Add New Role</p>
          </div>
        </div>

        <div className="roles">
          <div className="role">
            <div className="side left">
              <div>
                <p>#</p>
              </div>
              <div>
                <p>Role</p>
              </div>
            </div>
            <div className="side right"></div>
          </div>
          {dummyRoles.map((role, i) => (
            <div className="role">
              <div className="side left">
                <div>
                  <p>{i + 1}</p>
                </div>
                <div>
                  <p>{role}</p>
                </div>
              </div>
              <div className="side right">
                {role === "Super Admin" ? (
                  <>
                  <span className="material-symbols-sharp text-muted not-allowed">
                    block
                  </span>
                  </>
                ) : (
                    <span className="material-symbols-sharp danger">
                      delete
                    </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

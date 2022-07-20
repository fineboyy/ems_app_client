import React from "react";
import { SettingsNav } from "../SettingsNav/SettingsNav";

export const UserDetails = () => {
  return (
    <div className="UserDetails">
      <SettingsNav directories={["Current User"]} />
      <div className="settings-wrapper"></div>
    </div>
  );
};

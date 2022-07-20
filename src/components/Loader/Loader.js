import React from "react";
import Sidebar from "../Sidebar/Sidebar";

import "./Loader.css";

export const Loader = () => {
  return (
    <div className="Loader container">
      <Sidebar />
      <main>
        <div class="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </main>
    </div>
  );
};

export default Loader;

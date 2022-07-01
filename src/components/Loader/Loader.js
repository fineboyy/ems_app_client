import React from "react";
import Sidebar from "../Sidebar/Sidebar";

import "./Loader.css";

const Loader = () => {
  return (
    <div className="Loader container">
      <Sidebar />
      <main>
        <div className="lds-ring">
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

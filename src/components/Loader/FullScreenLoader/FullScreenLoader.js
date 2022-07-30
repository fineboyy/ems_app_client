import React from "react";

import "./FullScreenLoader.css";

const FullScreenLoader = () => {
  return (
    <div className="FullScreenLoader">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* <h1>Initializing, Please Wait.</h1> */}
    </div>
  );
};

export default FullScreenLoader;

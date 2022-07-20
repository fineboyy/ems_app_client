import React from "react";

import "./FullScreenLoader.css";

const FullScreenLoader = () => {
  return (
    <div className="FullScreenLoader container">
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <h1>Initializing, Please Wait.</h1>
    </div>
  );
};

export default FullScreenLoader;

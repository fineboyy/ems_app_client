import React from "react";

import "./FullScreenLoader.css";

const FullScreenLoader = () => {
  return (
    <div className="FullScreenLoader container">

        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </div>
  );
};

export default FullScreenLoader;
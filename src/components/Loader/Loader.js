import React from "react";

import "./Loader.css";

export const Loader = () => {
  return (
      <main className="Loader">
        <div className="lds-spinner">
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
  );
};

export default Loader;

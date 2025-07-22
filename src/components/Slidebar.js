import React from "react";
import "./Slidebar.css";

function Slidebar() {
  return (
    <div className="slidebar-box">
      <div className="shape-container">
        <h1 className="shape title">Tools</h1>
        <div className="shape shape-circle"></div>
        <div className="shape shape-square"></div>
        <div className="shape shape-triangle"></div>
        <div className="shape shape-ellipse"></div>
        <div className="shape shape-parallelogram"></div>
      </div>
    </div>
  );
}

export default Slidebar;

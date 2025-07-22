import React from "react";
import "./counter.css";

function Counter({counts}) {
  return (
    <div className="counter-box">
      <div className="counter-shapes-row">
        <div className="counter-shape-item">
          <div className="shape shape-circle" />
          <span className="counter-number">{counts.circle}</span>
        </div>
        <div className="counter-shape-item">
          <div className="shape shape-triangle" />
          <span className="counter-number">{counts.triangle}</span>
        </div>
        <div className="counter-shape-item">
          <div className="shape shape-square" />
          <span className="counter-number">{counts.square}</span>
        </div>
        <div className="counter-shape-item">
          <div className="shape shape-parallelogram" />
          <span className="counter-number">{counts.parallelogram}</span>
        </div>
        <div className="counter-shape-item">
          <div className="shape shape-ellipse" />
          <span className="counter-number">{counts.ellipse}</span>
        </div>
      </div>
    </div>
  );
}

export default Counter;

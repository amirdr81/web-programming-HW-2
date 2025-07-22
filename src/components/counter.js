import React from "react";
import "./counter.css";

function Counter() {
  return (
    <div className="counter-box">
      <div className="counter-shapes-row">
        <div className="counter-shape-item">
          <div className="shape shape-circle" />
          <span className="counter-number">0</span>
        </div>
        <div className="counter-shape-item">
          <div className="shape shape-triangle" />
          <span className="counter-number">0</span>
        </div>
        <div className="counter-shape-item">
          <div className="shape shape-square" />
          <span className="counter-number">0</span>
        </div>
        <div className="counter-shape-item">
          <div className="shape shape-parallelogram" />
          <span className="counter-number">0</span>
        </div>
        <div className="counter-shape-item">
          <div className="shape shape-ellipse" />
          <span className="counter-number">0</span>
        </div>
      </div>
    </div>
  );
}

export default Counter;

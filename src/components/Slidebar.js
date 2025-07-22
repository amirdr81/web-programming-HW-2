import React from "react";
import "./Slidebar.css";

function Slidebar({onDragStart}) {
  return (
    <div className="slidebar-box">
      <div className="shape-container">
        <h1 className="title">Tools</h1>
        <div className="shape shape-circle" draggable onDragStart={(e) => onDragStart(e, 'circle')}></div>
        <div className="shape shape-square" draggable onDragStart={(e) => onDragStart(e, 'square')}></div>
        <div className="shape shape-triangle" draggable onDragStart={(e) => onDragStart(e, 'triangle')}></div>
        <div className="shape shape-ellipse" draggable onDragStart={(e) => onDragStart(e, 'ellipse')}></div>
        <div className="shape shape-parallelogram" draggable onDragStart={(e) => onDragStart(e, 'parallelogram')}></div>
      </div>
    </div>
  );
}

export default Slidebar;

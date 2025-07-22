import React from "react";
import "./canvas.css";

function Canvas({ shapes, onDropShape }) {
  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("type");
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (type) {
      onDropShape(type, x, y);
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div
      className="canvas-box"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {shapes.map((shape, i) => (
        <div
          key={i}
          className={`canvas-shape shape-${shape.type}`}
          style={{
            position: "absolute",
            left: shape.x,
            top: shape.y
          }}
        />
      ))}
    </div>
  );
}

export default Canvas;

import React, { useState } from "react";
import Header from "./components/Header";
import Slidebar from "./components/Slidebar";
import Canvas from "./components/canvas";
import Counter from "./components/counter";

function App() {
  const [shapes, setShapes] = useState([]);
  const [fileName, setFileName] = useState("Untitled");

  const shapeCounts = {
    circle: shapes.filter(s => s.type === 'circle').length,
    square: shapes.filter(s => s.type === 'square').length,
    triangle: shapes.filter(s => s.type === 'triangle').length,
    ellipse: shapes.filter(s => s.type === 'ellipse').length,
    parallelogram: shapes.filter(s => s.type === 'parallelogram').length,
  };

  const handleDragStart = (e, type) => {
    e.dataTransfer.setData("type", type);
  };

  const handleDropShape = (type, x, y) => {
    setShapes(
      [...shapes, { id: Date.now()+Math.random(), type, x, y }]
    );
  };

  const handleRemoveShape = (id) => {
    setShapes(shapes.filter(shape => shape.id !== id));
  };

  return (
    <div>
      <Header fileName={fileName} setFileName={setFileName}/>
      <Counter counts={shapeCounts}/>
      <Slidebar onDragStart={handleDragStart} />
      <Canvas
        onDropShape={handleDropShape}
        shapes={shapes}
        onRemoveShape={handleRemoveShape}
      />
    </div>
  );
}

export default App;

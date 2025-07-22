import React, { useState } from "react";
import Header from "./components/Header";
import Slidebar from "./components/Slidebar";
import Canvas from "./components/canvas";
import Counter from "./components/counter";

function App() {
  const [shapes, setShapes] = useState([]);

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
    setShapes((prev) => [...prev, { type, x, y }]);
  };

  return (
    <div>
      <Header />
      <Counter counts={shapeCounts}/>
      <Slidebar onDragStart={handleDragStart} />
      <Canvas
        onDropShape={handleDropShape}
        shapes={shapes}
      />
    </div>
  );
}

export default App;

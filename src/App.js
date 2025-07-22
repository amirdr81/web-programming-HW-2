import React, { useState } from "react";
import Header from "./components/Header";
import Slidebar from "./components/Slidebar";
import Canvas from "./components/canvas";
import Counter from "./components/counter";

function App() {
  const [shapes, setShapes] = useState([]);

  const handleDragStart = (e, type) => {
    e.dataTransfer.setData("type", type);
  };

  const handleDropShape = (type, x, y) => {
    setShapes((prev) => [...prev, { type, x, y }]);
  };

  return (
    <div>
      <Header />
      <Counter />
      <Slidebar onDragStart={handleDragStart} />
      <Canvas
        onDropShape={handleDropShape}
        shapes={shapes}
      />
    </div>
  );
}

export default App;

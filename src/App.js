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

  const exportShapesAsJson = () => {
    const jsonData = JSON.stringify(shapes, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    // ایجاد لینک برای دانلود
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
      <Header fileName={fileName} setFileName={setFileName} onExportShapes={exportShapesAsJson}/>
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

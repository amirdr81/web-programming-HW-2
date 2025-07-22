import React, { useState, useRef, useEffect } from "react";
import "./Header.css";

function Header({ fileName, setFileName, onExportShapes}) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleFinishEdit = () => {
    setFileName(fileName.trim() || "Untitled");
    setIsEditing(false);
  };

  return (
    <div className="header-box">
      <div className="header-title">
        {isEditing ? (
          <input
            ref={inputRef}
            className="file-name-input"
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            onBlur={handleFinishEdit}
            onKeyDown={e => e.key === 'Enter' && handleFinishEdit()}
          />
        ) : (
          <span
            className="header_title"
            onClick={() => setIsEditing(true)}
            title="برای ویرایش کلیک کنید"
          >
            {fileName}
          </span>
        )}
      </div>
      <div className="btn-group">
        <button className="btn" onClick={onExportShapes}>Export</button>
        <button className="btn">Import</button>
      </div>
    </div>
  );
}

export default Header;

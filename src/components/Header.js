import React, { useState, useRef, useEffect } from "react";
import "./Header.css";

function Header({ fileName, setFileName }) {
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
      <div className="file-name-header">
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            onBlur={handleFinishEdit}
            onKeyDown={e => e.key === 'Enter' && handleFinishEdit()}
          />
        ) : (
          <span
            className="header-file-name"
            onClick={() => setIsEditing(true)}
            title="برای ویرایش کلیک کنید"
          >
            {fileName}
          </span>
        )}
      </div>
      <div className="btn-group">
        <button className="btn">Export</button>
        <button className="btn">Import</button>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-box">
      <div className="header-title">Painting Title</div>
      <div className="btn-group">
        <button className="btn">Export</button>
        <button className="btn">Import</button>
      </div>
    </div>
  );
}

export default Header;

import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ADMIN</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <Link to="/login" className="link">
            <img
              src="https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-nen-dragon-ball-cho-dien-thoai.jpg"
              alt=""
              className="topAvata"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

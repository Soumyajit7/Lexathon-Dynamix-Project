import React from "react";
// import lex_logo from "./lex_logo.svg";

function Leftbar() {
  return (
    <>
      <div className="section2">
        <div className="das_items">
          <i className="fa-solid fa-bars nav_icon fa-lg"></i>
          <img
            src="https://lex.infosysapps.com/assets/instances/Lex/app_logos/lex-logo-transparent.svg"
            alt="lex_logo"
            height="53px"
            width="53px"
            className="lex_logo"
          />
        </div>
        <div className="das_items">
          <i className="fas fa-sharp fa-solid fa-house nav_icon fa-lg"></i>
          <span>Home</span>
        </div>
        <div className="das_items">
          <i className="fas fa-sharp fa-solid fa-bookmark nav_icon fa-lg"></i>
          <span>Knowledge Boards</span>
        </div>
        <div className="das_items">
          <i className="fas fa-sharp fa-solid fa-bullseye nav_icon fa-lg"></i>
          <span>Goals</span>
        </div>
        <div className="das_items">
          <i className="far fa-circle nav_icon fa-lg"></i>
          <span>Channels</span>
        </div>
        <div className="das_items">
          <i className="fa-solid fa-ellipsis nav_icon fa-lg"></i>
          <span>More</span>
        </div>

        <div className="das_items das_items_settings">
          <i className="fas fa-cog nav_icon fa-lg"></i>
          <span>Settings</span>
        </div>
        <div className="das_items ">
          <i className="fa-solid fa-list nav_icon fa-lg"></i>
          <span>Apps</span>
        </div>
        <div className="das_items ">
          <i className="fa-sharp fa-solid fa-circle-question nav_icon fa-lg"></i>
          <span>Help</span>
        </div>
      </div>
    </>
  );
}

export default Leftbar;

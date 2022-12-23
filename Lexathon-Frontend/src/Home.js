import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="heading">
          <h1>LEXATHON</h1>
          <div className="tooltip">
            <div className="informationDiv">
              <h3>TEAM DYNAMIX</h3>
              <i className="fa-solid fa-circle-info icons-fav"></i>
            </div>
            <span className="tooltiptext">
              <p>Soumyajit Pan</p>
              <p>Sindhusha Thota</p>
              <p>Madhusudan Shashikant Patil</p>
              <p>Sarella Hansa Mouna Ragamai</p>
            </span>
          </div>
        </div>

        <div className="navLinkContainer">
          <h3>Idea 1 : Download Certificate</h3>
          <nav>
            <NavLink className="navLink" target="_blank" to="/certificate">
              Click Here to View
            </NavLink>
          </nav>
        </div>

        <div className="navLinkContainer">
          <h3>
            Idea 2 : Automatically Trigger Notification for Certification Expiry
            to bag a Skill Tag
          </h3>
          <nav>
            <NavLink className="navLink" target="_blank" to="/certificate">
              Click Here to View
            </NavLink>
          </nav>
        </div>

        <div className="navLinkContainer">
          <h3>
            Idea 3 : Top Performers Rank and Percentile should be displayed in
            every Course/Certification
          </h3>
          <nav>
            <NavLink className="navLink" target="_blank" to="/course">
              Click Here to View
            </NavLink>
          </nav>
        </div>

        <div className="navLinkContainer">
          <h3>Idea 4 : Create an App named Practice Coding</h3>
          <nav>
            <NavLink className="navLink" target="_blank" to="/practice-coding">
              Click Here to View
            </NavLink>
          </nav>
        </div>

        <div className="navLinkContainer">
          <h3>
            Idea 5 : Create a tab in every certification to seek/suggest
            relevant materials
          </h3>
          <nav>
            <NavLink className="navLink" target="_blank" to="/course">
              Click Here to View
            </NavLink>
          </nav>
        </div>

        <div className="navLinkContainer">
          <h3>Idea 6 : Voice Search Engine in LEX Search Bar</h3>
          <nav>
            <NavLink className="navLink" target="_blank" to="/certificate">
              Click Here to View
            </NavLink>
          </nav>
        </div>

        <div className="navLinkContainer">
          <h3>Admin Panel</h3>
          <nav>
            <NavLink className="navLink" target="_blank" to="/admin">
              Admin
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

import React from "react";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import "../Course.css";
import "../Cohorts.css"
import { NavLink } from "react-router-dom";

export default function Course() {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <>
      <div className="container">
        <div className="leftbar">
          <Leftbar />
        </div>
        <div className="middlebar">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="course_bar">
            <div className="course_data">
              <div className="course_header">
                <img
                  className="course_Image"
                  src="https://images.onwingspan.com/content-store/Infosys/Infosys_Ltd/Public/lex_auth_012768134403358720195/artifacts/pexels-photo-373076.jpeg"
                  alt="Logo"
                />
                <div className="course_name_desc">
                  <h2 className="course_name">
                    Infosys Global Agile Certification
                  </h2>
                  <h3 className="course_desc">
                    This is a T300 Certification for JL5 and 6 for nurturing the
                    skills for Agile project execution in a distributed
                    environment at a project level. This is a scalable model to
                    create a large talent pool that understands Infosys Global
                    Agile and executes projects at higher maturity.{" "}
                  </h3>
                </div>
              </div>
              <p className="click_here">
                Click here to check your completion status for Certifications.
              </p>

              <div className="learning_progress">
                <h3>Learning Progress</h3>
                <p>
                  Content will be marked as complete once you pass this
                  assessment.
                </p>
              </div>

              <div className="course_tabs">
                <NavLink style={navLinkStyle} to="/course" className="tab">
                  Overview
                </NavLink>
                <NavLink
                  style={navLinkStyle}
                  to="/takeCetification"
                  className="tab"
                >
                  Take Certification
                </NavLink>
                <NavLink style={navLinkStyle} to="/cohorts" className="tab">
                  Cohorts
                </NavLink>
                <NavLink style={navLinkStyle} to="/" className="tab">
                  Discussions
                </NavLink>
                <NavLink style={navLinkStyle} to="/" className="tab">
                  Analytics
                </NavLink>
                <NavLink
                  style={navLinkStyle}
                  to="/SeekAndSeggesions"
                  className="tab"
                >
                  Seek & Suggesions
                </NavLink>
              </div>
              <div className="courseTab_data">
                <div className="learners performers">
                  <h3>Learners</h3>
                </div>
                <div className="performers topPerformers">
                  <h3>Top Performers</h3>
                  <div className="learnerCards">
                    learners card
                  </div>
                </div>
                <div className="performers">
                  <h3>Authors</h3>
                </div>
              </div>
            </div>

            {/* creator portion */}
            <div className="creator_data">
              <div className="author">
                <h3>Authors/Creators</h3>
                <p>sangita_prasad</p>
                <p>Suma Gururaja</p>
              </div>
              <div className="glance">
                <h3>At a glance</h3>
                <p>Certification</p>
                <p>1h</p>
                <p>Advanced Level</p>
                <p>MCQ</p>
                <p>60</p>
                <p>49.5K</p>
                <p>IAP</p>
                <p>EN</p>
                <p>
                  Agile, global agile, Infosys Global Agile, Infosys Global
                  Agile Certification, Agile Project Management
                </p>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{/* <div className="course_tabs">
  <div className={toggleState==="overview"?"tab active_tab":"tab"} onClick={()=>toggleTab("overview")}>Overview</div>
  <div className={toggleState==="takecertification"?"tab active_tab":"tab"}>Take Certification</div>
  <div className={toggleState==="cohorts"?"tab active_tab":"tab"} onClick={()=>toggleTab("cohorts")}>Cohorts</div>
  <div className={toggleState==="discussions"?"tab active_tab":"tab"}>Discussions</div>
  <div className={toggleState==="analytics"?"tab active_tab":"tab"}>Analytics</div>
  <div className={toggleState==="seek"?"tab active_tab":"tab"} onClick={()=>toggleTab("seek")}>Seek & Suggesions</div>
</div> */}
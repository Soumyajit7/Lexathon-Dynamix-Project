import React, { useState, useEffect } from "react";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import "../Course.css";
import "../Cohorts.css";
import "../Seek.css";
import { LearnerCard } from "./LearnerCard";
import learnersData from "./learnersData";
import axios from "axios";
import http from "../Http";

export default function Course() {
  const [toggleState, setToggleState] = useState("overview");
  const [seekState, setseekState] = useState("seekMaterial");
  const [playground, setPlayground] = useState([]);
  const [prerequisites, setPrerequisites] = useState([]);
  const [precontents, setPrecontents] = useState([]);

  const getSuggestPlayGround = async () => {
    try {
      const res = await axios.get(`${http}/getSuggestPlayGround`);
      setPlayground(res.data);
    } catch (er) {
      setPlayground(er.message);
    }
  };

  const getSuggestPrerequisites = async () => {
    try {
      const res = await axios.get(`${http}/getSuggestPrerequisites`);
      setPrerequisites(res.data);
    } catch (er) {
      setPrerequisites(er.message);
    }
  };

  const getSuggestPrecontents = async () => {
    try {
      const res = await axios.get(`${http}/getSuggestPrecontents`);
      setPrecontents(res.data);
    } catch (er) {
      setPrecontents(er.message);
    }
  };

  useEffect(() => {
    getSuggestPlayGround();
    getSuggestPrerequisites();
    getSuggestPrecontents();
  }, []);

  const toggleTab = (tab) => {
    setToggleState(tab);
  };

  const toggleSeekTab = (tab) => {
    setseekState(tab);
  };

  const [seekData, setSeekData] = useState({
    course: "",
    email: "",
    comments: "",
  });

  const inputEvent = (event) => {
    let { name, value } = event.target;
    setSeekData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
    // console.log(seekData);
  };

  const seekSubmit_Func = async (event) => {
    console.log("Button called");
    try {
      const res = await axios({
        method: "POST",
        url: `${http}/seekData`,
        headers: {
          "Content-Type": "application/json",
        },
        data: seekData,
      });
      console.log(res);
      alert("Submitted!");
    } catch (er) {
      alert(er.message);
    }
    event.preventDefault();
  };

  const suggestSubmit_Func = async (event) => {
    console.log("Button called");
    try {
      const res = await axios({
        method: "POST",
        url: `${http}/suggestData`,
        headers: {
          "Content-Type": "application/json",
        },
        data: seekData,
      });
      console.log(res);
      alert("Submitted!");
    } catch (er) {
      alert(er.message);
    }
    event.preventDefault();
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
                <div
                  className={
                    toggleState === "overview" ? "tab active_tab" : "tab"
                  }
                  onClick={() => toggleTab("overview")}
                >
                  Overview
                </div>
                <div
                  className={
                    toggleState === "takecertification"
                      ? "tab active_tab"
                      : "tab"
                  }
                >
                  Take Certification
                </div>
                <div
                  className={
                    toggleState === "cohorts" ? "tab active_tab" : "tab"
                  }
                  onClick={() => toggleTab("cohorts")}
                >
                  Cohorts
                </div>
                <div
                  className={
                    toggleState === "discussions" ? "tab active_tab" : "tab"
                  }
                >
                  Discussions
                </div>
                <div
                  className={
                    toggleState === "analytics" ? "tab active_tab" : "tab"
                  }
                >
                  Analytics
                </div>
                <div
                  className={toggleState === "seek" ? "tab active_tab" : "tab"}
                  onClick={() => toggleTab("seek")}
                >
                  Seek & Suggestion
                </div>
              </div>

              {/* overview content  */}
              <div
                className={
                  toggleState === "overview"
                    ? "courseTab_data active_content"
                    : "courseTab_data content"
                }
              >
                <h3>What you will learn</h3>
                <p>
                  Listed below are the learning objectives for Infosys Global
                  Agile certification: • To enable high mature Agile project
                  execution in a distributed environment, understand key
                  collaboration and communication techniques • To understand
                  different requirement and simple design techniques for Agile •
                  To provide insight to Continuous Integration, Testing and Test
                  Driven Development practices along with supporting tools • To
                  enable quantitative management of Agile project with proper
                  planning, estimation and risk management techniques
                </p>
                <h3 className={precontents.length?"":"displayNone"}>
                  Pre Contents
                </h3>
                {precontents.map((val) => {
                  return <p key={val.id}>{val.comments}</p>;
                })}

                <h3 className={playground.length?"":"displayNone"}>Playground Resources</h3>
                {playground.map((val) => {
                  return <p key={val.id}>{val.comments}</p>;
                })}

                <h3>Skills you will gain</h3>
                <span className="course_gain">Agile consulting</span>

                <h3 className={prerequisites.length?"":"displayNone"}>Prerequisites</h3>
                {prerequisites.map((val) => {
                  return <p key={val.id}>{val.comments}</p>;
                })}
              </div>

              {/* cohorts content  */}
              <div
                className={
                  toggleState === "cohorts"
                    ? "courseTab_data active_content"
                    : "courseTab_data content"
                }
              >
                <div className="learners performers">
                  <h3>Learners</h3>
                </div>
                <div className="performers topPerformers">
                  <h3>Top Performers</h3>
                  <div className="learnerCard_box">
                    {/* <LearnerCard/> */}
                    {learnersData.map((learner) => {
                      return (
                        <LearnerCard
                          key={learner.id}
                          learner_name={learner.learner_name}
                          result={learner.result}
                          rank={learner.rank}
                          id={learner.id}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="performers">
                  <h3>Authors</h3>
                </div>
              </div>

              {/* seek and suggesions content  */}
              <div
                className={
                  toggleState === "seek"
                    ? "courseTab_data active_content"
                    : "courseTab_data content"
                }
              >
                <div className="seek_bar">
                  <div
                    className={
                      seekState === "seekMaterial" ? "tab active_tab" : "tab"
                    }
                    onClick={() => toggleSeekTab("seekMaterial")}
                  >
                    Seek Material
                  </div>
                  <div
                    className={
                      seekState === "suggestMaterial" ? "tab active_tab" : "tab"
                    }
                    onClick={() => toggleSeekTab("suggestMaterial")}
                  >
                    Suggest Material
                  </div>
                </div>
                <div
                  className={
                    seekState === "seekMaterial"
                      ? "seekTab_data active_content"
                      : "seekTab_data content"
                  }
                >
                  {/* Seek form  */}
                  <form onSubmit={seekSubmit_Func}>
                    <div className="seek_material_form">
                      <label>
                        <p>Seek *</p>
                        <select
                          name="course"
                          id="course"
                          className="dropDown"
                          onChange={inputEvent}
                        >
                          <option value="Relevent Lex Course">
                            Relevent Lex Course
                          </option>
                          <option value="Prerequisites">Prerequisites</option>
                          <option value="Playground">Playground</option>
                          <option value="Precontents">Precontents</option>
                          <option value="Others">Others</option>
                        </select>
                      </label>

                      <label>
                        <p>To be approved by *</p>
                        <input
                          type="text"
                          placeholder="username@infosys.com"
                          onChange={inputEvent}
                          name="email"
                        />
                      </label>
                    </div>
                    <textarea
                      name="comments"
                      className="textarea"
                      onChange={inputEvent}
                    />
                    <button type="submit" className="submit_button">
                      Submit
                    </button>
                  </form>
                </div>
                <div
                  className={
                    seekState === "suggestMaterial"
                      ? "suggestTab_data active_content"
                      : "suggestTab_data content"
                  }
                >
                  {/* SuggestMaterial form  */}
                  <form onSubmit={suggestSubmit_Func}>
                    <div className="seek_material_form">
                      <label>
                        <p>Suggest *</p>
                        <select
                          name="course"
                          id="course"
                          className="dropDown"
                          onChange={inputEvent}
                        >
                          <option value="Relevent Lex Course">
                            Relevent Lex Course
                          </option>
                          <option value="Prerequisites">Prerequisites</option>
                          <option value="Playground">Playground</option>
                          <option value="Precontents">Precontents</option>
                          <option value="Others">Others</option>
                        </select>
                      </label>

                      <label>
                        <p>To be approved by *</p>
                        <input
                          type="text"
                          placeholder="username@infosys.com"
                          onChange={inputEvent}
                          name="email"
                        />
                      </label>
                    </div>
                    <textarea
                      name="comments"
                      className="textarea"
                      onChange={inputEvent}
                    />
                    <button type="submit" className="submit_button">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* createor data */}
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

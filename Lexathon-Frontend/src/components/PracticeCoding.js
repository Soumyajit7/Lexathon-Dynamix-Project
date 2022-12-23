import React, { useState } from "react";
import "../PracticeCoding.css";
import CodeMirror from "@uiw/react-codemirror";
import http from "../Http";
import axios from "axios";

const PracticeCoding = () => {
  const emptySpace = "";

  const [toggleState, setToggleState] = useState("description");
  const [code, setCode] = useState(emptySpace);
  const [testCaseResults, setTestCaseResults] = useState([]);

  const toggleTab = (tab) => {
    setToggleState(tab);
  };

  const checkCode = () => {
    axios
      .post(`${http}/python`, { code })
      .then(({ data }) => {
        setTestCaseResults(data.testCaseResults);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="pc_container">
        <div className="pc_navbar">
          <img
            src="https://lex.infosysapps.com/assets/instances/Lex/app_logos/lex-logo-transparent.svg"
            alt="lex_logo"
            height="45px"
            width="45px"
            className="pc_lex_logo"
          />
          <i className="fa-solid fa-user pcUserIcon"></i>
        </div>
        <div className="pc_qa_container">
          <div className="question_container">
            <div className="pc_tabs">
              <p
                className={
                  toggleState === "description" ? "pcTab activeTab" : "pcTab"
                }
                onClick={() => toggleTab("description")}
              >
                Description
              </p>
              <p
                className={
                  toggleState === "discussion" ? "pcTab activeTab" : "pcTab"
                }
                onClick={() => toggleTab("discussion")}
              >
                Discussion
              </p>
              <p
                className={
                  toggleState === "solution" ? "pcTab activeTab" : "pcTab"
                }
                onClick={() => toggleTab("solution")}
              >
                Solutions
              </p>
              <p
                className={
                  toggleState === "submission" ? "pcTab activeTab" : "pcTab"
                }
                onClick={() => toggleTab("submission")}
              >
                Submissions
              </p>
            </div>

            <div
              className={
                toggleState === "description"
                  ? "descriptionData active_content"
                  : "descriptionData content"
              }
            >
              <h3>1. Sum of Two Integers</h3>
              <br />
              <p>
                Given two integers a and b, return the sum of the two integers
                without using the operators + and -.
              </p>
              <br />
              <div className="exampleBox">
                <h4>Example 1: </h4>
                <p>Input: a = 1, b = 2</p>
                <p>Output: 3</p>
              </div>
              <br />
              <div className="exampleBox">
                <h4>Example 2: </h4>
                <p>Input: a = 2, b = 3</p>
                <p>Output: 5</p>
              </div>
              <br />
              <p>Time Complexity - O(1)</p>
            </div>

            <div
              className={
                toggleState === "discussion"
                  ? "discussionsData activeContent"
                  : "discussionsData content"
              }
            >
              <div className="disc_data">
                <h3>Soumyajit Pan</h3>
                <p>
                  I wonder what does it mean to rotate a vector for K greater
                  than the length of the word? can someone explain?
                </p>
                <div className="discData_reply">
                  <i className="fa-solid fa-reply pcIcon"></i>
                  <p>Reply</p>
                  <i className="fa-solid fa-message pcIcon"></i>
                  <p>Show 10 replies</p>
                </div>
              </div>

              <div className="disc_data">
                <h3>Sindhusha Totha</h3>
                <p>
                  Am I the only one who thinks this question is badly worded?
                  "Please note here we are talking about the node number and not
                  the value in the nodes.". This sentence doesn't make sense. It
                  would be better worded as "Please note here we are talking
                  about the node index and not the value in the nodes."
                </p>
                <div className="discData_reply">
                  <i className="fa-solid fa-reply pcIcon"></i>
                  <p>Reply</p>
                  <i className="fa-solid fa-message pcIcon"></i>
                  <p>Show 10 replies</p>
                </div>
              </div>

              <div className="disc_data">
                <h3>Madhisudan Patil</h3>
                <p>
                  If you'd like to share a detailed solution to the problem,
                  please create a new post in the discuss section and provide
                </p>
                <div className="discData_reply">
                  <i className="fa-solid fa-reply pcIcon"></i>
                  <p>Reply</p>
                  <i className="fa-solid fa-message pcIcon"></i>
                  <p>Show 10 replies</p>
                </div>
              </div>

              <div className="disc_data">
                <h3>Mouna Ragamai</h3>
                <p>
                  Hi I m having a hard time on what the question is asking. I
                  wish it was more clear. Would someone please help me
                  understand. I know how to draw the tree from the array. I just
                  can understand the question
                </p>
                <div className="discData_reply">
                  <i className="fa-solid fa-reply pcIcon"></i>
                  <p>Reply</p>
                  <i className="fa-solid fa-message pcIcon"></i>
                  <p>Show 10 replies</p>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === "solution"
                  ? "solutionsData active_content"
                  : "solutionsData content"
              }
            >
              <div className="solun_data">
                <h3>1-line using python</h3>
                <p>Soumyajit Pan</p>
                <div className="solunData_reply">
                  <i className="fa-solid fa-comment pcIcon"></i>
                  <p>100k</p>
                  <i className="fa-solid fa-eye pcIcon"></i>
                  <p>200k</p>
                </div>
              </div>

              <div className="solun_data">
                <h3>Java solution 34ms</h3>
                <p>Madhusudan Patil</p>
                <div className="solunData_reply">
                  <i className="fa-solid fa-comment pcIcon"></i>
                  <p>400k</p>
                  <i className="fa-solid fa-eye pcIcon"></i>
                  <p>500k</p>
                </div>
              </div>

              <div className="solun_data">
                <h3>Straightforward solution</h3>
                <p>Sindhusha Thota</p>
                <div className="solunData_reply">
                  <i className="fa-solid fa-comment pcIcon"></i>
                  <p>300k</p>
                  <i className="fa-solid fa-eye pcIcon"></i>
                  <p>600k</p>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === "submission"
                  ? "submissionsData active_content"
                  : "submissionsData content"
              }
            >
              <div className="submissionData">
                <p className="accepted">Accepted</p>
                <p className="accepted">Accepted</p>
                <p className="accepted">Accepted</p>
                <p className="error">Runtime Error</p>
                <p className="error">Runtime Error</p>
              </div>
            </div>
          </div>
          <div className="ans_container">
            <div className="langTab">
              <select name="lang" id="lang" className="lang pcTab">
                <option value="python">Python</option>
                <option value="c">C</option>
                <option value="cpp">C++</option>
                <option value="java">Java</option>
              </select>
            </div>
            <div className="coding">
              <CodeMirror
                value={code}
                options={{
                  theme: "dracula",
                  keyMap: "sublime",
                  mode: "python",
                }}
                onChange={(editor, data, value) => {
                  console.log(editor);
                  setCode(editor);
                }}
                className="theme"
              />
            </div>
            <div className="result">
              <button className="run">Submit</button>
              <button className="run" onClick={() => checkCode()}>
                Run
              </button>
              <h3>Result</h3>
              {testCaseResults.map((res, i) => {
                return (
                  <div key={i} className="testcases">
                    <p>
                      {res === "True"
                        ? `Testcase ${i + 1} ✅ Passed`
                        : `Testcase ${i + 1} ❌ Failed`}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PracticeCoding;

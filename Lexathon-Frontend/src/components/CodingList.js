import React from "react";
import "../codinglist.css";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const CodingList = () => {
  return (
    <>
      <div className="codingList_container">
        <div className="pc_leftbar">
          <Leftbar />
        </div>
        <div className="pc_navbar">
          <Navbar />

          <div className="qnList">
            <div className="questionContainer">
              <div className="topicTab">
                <p>Array(1242)</p>
                <p>String(585)</p>
                <p>Hash Table(430)</p>
                <p>Dynamic Programming(406)</p>
                <p>Math(389)</p>
                <p>Sorting(276)</p>
                <p>Greedy(270)</p>
              </div>
              <div className="dd_bar">
                <select name="dificulty" id="dificulty">
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div className="qn_data">
                <table className="bd-2">
                  <tr>
                    <th className="pd-10 bd-2">Title</th>
                    <th className="pd-10 bd-2">Dificulty</th>
                    <th className="pd-10 bd-2">Topic</th>
                  </tr>
                  <tr>
                    <td className="pd-10 bd-2">
                      <NavLink
                        className="qn_navLink"
                        target="_blank"
                        to="/practice-coding/question"
                      >
                        1. Sum of 2 integers
                      </NavLink>
                    </td>
                    <td className="pd-10 bd-2">Easy</td>
                    <td className="pd-10 bd-2">Math</td>
                  </tr>
                  <tr>
                    <td className="pd-10 bd-2">2. Odd Even Linked List</td>
                    <td className="pd-10 bd-2">Medium</td>
                    <td className="pd-10 bd-2">LinkedList</td>
                  </tr>
                  <tr>
                    <td className="pd-10 bd-2">3. Circular Sentence</td>
                    <td className="pd-10 bd-2">Hard</td>
                    <td className="pd-10 bd-2">String</td>
                  </tr>
                  <tr>
                    <td className="pd-10 bd-2">
                      4. Count Subarrays With Median K
                    </td>
                    <td className="pd-10 bd-2">Easy</td>
                    <td className="pd-10 bd-2">Array</td>
                  </tr>
                  <tr>
                    <td className="pd-10 bd-2">5. Find the Pivot Integer</td>
                    <td className="pd-10 bd-2">Medium</td>
                    <td className="pd-10 bd-2">Sorting</td>
                  </tr>
                  <tr>
                    <td className="pd-10 bd-2">
                      6. Minimum Penalty for a Shop
                    </td>
                    <td className="pd-10 bd-2">Easy</td>
                    <td className="pd-10 bd-2">Greedy</td>
                  </tr>
                  <tr>
                    <td className="pd-10 bd-2">7. Longest Common Prefix</td>
                    <td className="pd-10 bd-2">Easy</td>
                    <td className="pd-10 bd-2">String</td>
                  </tr>
                  <tr>
                    <td className="pd-10 bd-2">
                      8. Remove Nth Node From End of List
                    </td>
                    <td className="pd-10 bd-2">Medium</td>
                    <td className="pd-10 bd-2">LinkedList</td>
                  </tr>
                  <tr>
                    <td className="pd-10 bd-2">9. Valid Parentheses</td>
                    <td className="pd-10 bd-2">Easy</td>
                    <td className="pd-10 bd-2">String</td>
                  </tr>
                  <tr>
                    <td className="pd-10 bd-2">10. Sudoku Solver</td>
                    <td className="pd-10 bd-2">Hard</td>
                    <td className="pd-10 bd-2">DP</td>
                  </tr>
                  <tr>
                    <td className="pd-10 bd-2">12. Permutations</td>
                    <td className="pd-10 bd-2">Medium</td>
                    <td className="pd-10 bd-2">Recursion</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CodingList;

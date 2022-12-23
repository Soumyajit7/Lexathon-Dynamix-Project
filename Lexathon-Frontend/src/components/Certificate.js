import React from "react";
import Card from "./Card";
import Data from "./data";
import Footer from "./Footer";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";

function Certificate() {
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
          <div className="headertags">
            <div className="tags tag_my_certificate">My Certifications</div>
            <div className="tags">My Approvals</div>
            <div className="tags">My Requests</div>
          </div>
          <div className="cards">
            {Data.map((val) => {
              return (
                <Card
                  key={val.id}
                  coursetype={val.coursetype}
                  coursename={val.coursename}
                  examdate={val.examdate}
                  result_type={val.result_type}
                  result={val.result}
                />
              );
            })}
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default Certificate;

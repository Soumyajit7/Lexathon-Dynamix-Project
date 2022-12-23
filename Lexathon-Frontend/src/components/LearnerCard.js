import React from "react";

export const LearnerCard = (props) => {
  return (
    <>
      <div className="learnerCard">
        <div className="logo">
          <i className="fa-regular fa-user"></i>
          <p>{props.id}</p>
        </div>
        <div className="learner_data">
          <h3 className="learner_name">{props.learner_name}</h3>
          <h4 className="learner_status">Top Learner</h4>
          <i className="fa-regular fa-envelope icons"></i>
          <i className="fa-regular fa-message icons"></i>
        </div>
        <div className="learner_data">
          <h3>{props.result}</h3>
        </div>
      </div>
    </>
  );
};

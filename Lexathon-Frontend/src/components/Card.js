import React from "react";
import axios from "axios";
import FileDownload from "js-file-download";
import http from "../Http";

function Card(props) {
  const download_file = () => {
    try {
      axios({
        url: http,
        method: "GET",
        responseType: "blob",
      }).then((res) => {
        console.log(res);
        FileDownload(res.data, "Infosys Certified Python Associate.pdf");
      });
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <>
      <div className="card">
        <div className="card_header">
          <p>{props.coursetype}</p>
        </div>
        <div className="card_coursename">
          <p>{props.coursename}</p>
        </div>

        <div className="card_resultdetails">
          <div className="card_result">
            <p className="card_result_tags">EXAM DATE</p>
            <p className="card_result_values">{props.examdate}</p>
          </div>
          <div className="card_result">
            <p className="card_result_tags">RESULT TYPE</p>
            <p className="card_result_values">{props.result_type}</p>
          </div>
          <div className="card_result_exceptional">
            <p className="card_result_tags">RESULT</p>
            <p className="card_result_values">{props.result}</p>
          </div>
          <button className="download_button" onClick={download_file}>
            Download
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;

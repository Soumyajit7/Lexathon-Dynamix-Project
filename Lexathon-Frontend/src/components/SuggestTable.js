import React from "react";
import axios from "axios";
import http from "../Http";

const Table = (props) => {
  var suggestData = props.props;
  // console.log(suggestData)

  const approveBtn = async (id) => {
    if (
      window.confirm("Are you sure you want to Approve the suggested course?")
    ) {
      const response = await axios.post(`${http}/approve_suggest/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      alert(response.data.status);
      window.location.reload(false);
    }
  };

  const rejectBtn = async (id) => {
    if (window.confirm("Are you sure to reject and delete?")) {
      const response = await axios.post(`${http}/delete_suggest/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      alert(response.data.status);
      window.location.reload(false);
    }
  };

  return (
    <>
      <table className="table bd-2">
        <thead>
          <tr>
            <th className="pd-10 bd-2" scope="col">Course</th>
            <th className="pd-10 bd-2" scope="col">Email</th>
            <th className="pd-10 bd-2" scope="col">Suggest Data</th>
            <th className="pd-10 bd-2" scope="col">status</th>
            <th className="pd-10 bd-2" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {suggestData.map((data) => {
            console.log(data);
            const { id, course, email, comments, status } = data;
            return (
              <tr
                key={id}
                className={`${status === "pending" ? "" : "btn_approved"}`}
              >
                <td className="pd-10 bd-2">{course}</td>
                <td className="pd-10 bd-2">{email}</td>
                <td className="pd-10 bd-2">{comments}</td>
                <td className="pd-10 bd-2">{status}</td>
                <td className="pd-10 bd-2">
                  <button
                    className={` btn ${
                      status === "pending" ? "" : "btn_approved"
                    }`}
                    onClick={() => approveBtn(id)}
                  >
                    Approved?
                  </button>
                  <button className="btn" onClick={() => rejectBtn(id)}>
                    Reject?
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;

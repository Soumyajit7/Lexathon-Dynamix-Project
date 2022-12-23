import React from "react";
import axios from "axios";
import http from "../Http";

const Table = (props) => {
  var seekData = props.props;
  // console.log(seekData)

  const doneBtn = async (id) => {
    if (window.confirm("Seek job completed?")) {
      const response = await axios.post(
        `${http}/done_seek/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      alert(response.data.status);
      window.location.reload(false);
    }
  };

  const rejectSeek = async (id) => {
    if (window.confirm("Are you sure to reject and delete?")) {
      const response = await axios.post(
        `${http}/delete_seek/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
            <th className="pd-10 bd-2" scope="col">Seek Data</th>
            <th className="pd-10 bd-2" scope="col">status</th>
            <th className="pd-10 bd-2" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {seekData.map((data) => {
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
                    className={`btn ${
                      status === "pending" ? "" : "btn_approved"
                    }`}
                    onClick={() => doneBtn(id)}
                  >
                    Done?
                  </button>
                  <button className="btn" onClick={() => rejectSeek(id)}>
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

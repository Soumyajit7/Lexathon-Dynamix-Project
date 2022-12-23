import React, { useEffect, useState } from "react";
import SuggestTable from "./SuggestTable";
import SeekTable from "./SeekTable";
import "../Admin.css";
import axios from "axios";
import http from "../Http";

const Admin = () => {
  const [seekData, setSeekData] = useState([]);
  const [suggestData, setsuggestData] = useState([]);

  const getSeekData = async () => {
    try {
      const res = await axios.get(`${http}/getSeekData`);
      setSeekData(res.data);
    } catch (er) {
      setSeekData(er.message);
    }
  };

  const getSuggestData = async () => {
    try {
      const res = await axios.get(`${http}/getSuggestData`);
      setsuggestData(res.data);
    } catch (er) {
      setsuggestData(er.message);
    }
  };

  useEffect(() => {
    getSeekData();
    getSuggestData();
  }, []);

  //   console.log(seekData);
  return (
    <>
      <div className="adminContainer">
        <h1>Admin Panel</h1>
        <div className="adminPanel">
          <h4>Seek Data</h4>
          <SeekTable props={seekData} />
          <br />
          <br />
          <br />
          <h4>Suggest Data</h4>
          <SuggestTable props={suggestData} />
        </div>
      </div>
    </>
  );
};

export default Admin;

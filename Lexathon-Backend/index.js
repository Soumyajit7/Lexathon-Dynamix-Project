const express = require("express");
const path = require("path");
const cors = require("cors");
const mysql = require("mysql2");
const PythonShell = require("python-shell").PythonShell;
const fs = require("fs");

port = 5000 || process.env.port;

// const db = mysql.createPool({
//   host: "HOST_NAME",
//   user: "root",
//   password: "****************",
//   database: "DB_NAME",
// });

const db = mysql.createPool({
  host: "localhost", 
  user: "root",
  password: "***********",
  database: "DB_NAME",
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.get("/download", (req, res) => {
  res.download("./certificates/python.pdf");
});

// ---------------------  seek --------------------------

async function insertSeek_query(course, email, comments) {
  try {
    const sqlQuery = `insert into seek (course,email,comments,status) values(?,?,?,?)`;
    const [result, field] = await db
      .promise()
      .query(sqlQuery, [course, email, comments, "pending"]);
    return result;
  } catch (er) {
    return er;
  }
}

app.post("/seekData", async (req, res) => {
  const { course, email, comments } = req.body;
  var ans = await insertSeek_query(course, email, comments);
  console.log(ans);
  console.log(email, "seek data");
  return res.send(ans);
});

async function select_seek_data() {
  try {
    const sqlQuery = `select * from seek`;
    const [result, field] = await db.promise().query(sqlQuery);
    return result;
  } catch (e) {
    return e;
  }
}

app.get("/getSeekData", async (req, res) => {
  var ans = await select_seek_data();
  res.send(ans);
});

app.post("/done_seek/:id", (req, res) => {
  const { id } = req.params;
  const sqlQuery = `update seek set status='done' where id='${id}'`;
  try {
    db.query(sqlQuery, (error, result) => {
      if (error) {
        res.send(error);
      } else {
        console.log("Status is done Updated");
        res.send({ status: "Status is Updated" });
      }
    });
  } catch (e) {
    res.send(e);
  }
});

app.post("/delete_seek/:id", (req, res) => {
  const { id } = req.params;
  const sqlQuery = `delete from seek where id='${id}'`;
  try {
    db.query(sqlQuery, (error, result) => {
      if (error) {
        res.send(error);
      } else {
        console.log("Seek data is Deleted");
        res.send({ status: "Seek data is Deleted" });
      }
    });
  } catch (e) {
    res.send(e);
  }
});

// ------------------------- suggest ------------------------------

async function insertSuggest_query(course, email, comments) {
  try {
    const sqlQuery = `insert into suggest (course,email,comments,status) values(?,?,?,?)`;
    const [result, field] = await db
      .promise()
      .query(sqlQuery, [course, email, comments, "pending"]);
    return result;
  } catch (er) {
    return er;
  }
}

app.post("/suggestData", async (req, res) => {
  const { course, email, comments } = req.body;
  var ans = await insertSuggest_query(course, email, comments);
  console.log(ans);
  console.log(email, "suggest data");
  return res.send(ans);
});

async function select_suggest_data() {
  try {
    const sqlQuery = `select * from suggest`;
    const [result, field] = await db.promise().query(sqlQuery);
    return result;
  } catch (e) {
    return e;
  }
}
app.get("/getsuggestData", async (req, res) => {
  var ans = await select_suggest_data();
  res.send(ans);
});

async function select_getSuggestPlayGround_data() {
  try {
    const sqlQuery = `select id, comments from suggest where course='playground' and status='approved'`;
    const [result, field] = await db.promise().query(sqlQuery);
    return result;
  } catch (e) {
    return e;
  }
}
app.get("/getSuggestPlayGround", async (req, res) => {
  var ans = await select_getSuggestPlayGround_data();
  res.send(ans);
});

async function select_getSuggestPrerequisites_data() {
  try {
    const sqlQuery = `select id, comments from suggest where course='prerequisites' and status='approved'`;
    const [result, field] = await db.promise().query(sqlQuery);
    return result;
  } catch (e) {
    return e;
  }
}
app.get("/getSuggestPrerequisites", async (req, res) => {
  var ans = await select_getSuggestPrerequisites_data();
  res.send(ans);
});

async function select_getSuggestPrecontents_data() {
  try {
    const sqlQuery = `select id, comments from suggest where course='Precontents' and status='approved'`;
    const [result, field] = await db.promise().query(sqlQuery);
    return result;
  } catch (e) {
    return e;
  }
}
app.get("/getSuggestPrecontents", async (req, res) => {
  var ans = await select_getSuggestPrecontents_data();
  res.send(ans);
});

app.post("/approve_suggest/:id", (req, res) => {
  const { id } = req.params;
  const sqlQuery = `update suggest set status='approved' where id='${id}'`;
  try {
    db.query(sqlQuery, (error, result) => {
      if (error) {
        res.send(error);
      } else {
        console.log("Status is approved Updated");
        res.send({ status: "Status is Updated" });
      }
    });
  } catch (e) {
    res.send(e);
  }
});

app.post("/delete_suggest/:id", (req, res) => {
  const { id } = req.params;
  const sqlQuery = `delete from suggest where id='${id}'`;
  try {
    db.query(sqlQuery, (error, result) => {
      if (error) {
        res.send(error);
      } else {
        console.log("Suggest data is Deleted");
        res.send({ status: "Suggest data is Deleted" });
      }
    });
  } catch (e) {
    res.send(e);
  }
});

// ---------------------------------------------------------------

app.post("/python", (req, res) => {
  fs.writeFileSync("test.py", req.body.code);

  const testCases = {
    one: [1, 2, 3],
    two: [2, 2, 4],
    three: [2, -2, 0],
  }; 

  const promises = [];
  const testCaseResults = [];

  Object.keys(testCases).map((key) => {
    promises.push(
      new Promise((resolve, reject) => {
        PythonShell.run(
          "test.py",
          {
            mode: "text",
            pythonOptions: ["-u"],
            args: testCases[key],
          },
          function (err, results) {
            if (err) {
              reject();
              throw err;
            }
            console.log(results);
            testCaseResults.push(results[0]);
            resolve(true);
          }
        );
      })
    );
  });

  Promise.all(promises).then(() => {
    res.json({ testCaseResults });
  });
});

// --------------------------------------------------------------------
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

{
  /* <div className={`${styles["seek_material_form"]}`}></div> */
}

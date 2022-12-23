import { Routes, Route } from "react-router-dom";
import Certificate from "./components/Certificate";
import Course from "./components/Course";
import "./App.css";
import { Home } from "./Home";
import Admin from "./components/Admin";
import PracticeCoding from "./components/PracticeCoding";
import CodingList from "./components/CodingList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/certificate" element={<Certificate />}></Route>
        <Route path="/course" element={<Course />}></Route>
        <Route
          path="/practice-coding/question"
          element={<PracticeCoding />}
        ></Route>
        <Route path="/practice-coding" element={<CodingList />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </>
  );
}

export default App;

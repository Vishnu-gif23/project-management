import { HashRouter, Routes, Route } from "react-router-dom";
import FinalPreview from "./preview";
import Basic from "./basic";
import Contact from "./contact";
import Education from "./Education";
import Skill from "./skill";
import Project from "./project";
import Experience from "./experience";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/basic" element={<Basic/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/education" element={<Education/>} />
        <Route exact path="/skill" element={<Skill/>} />
        <Route exact path="/project" element={<Project/>} />
        <Route exact path="/experience" element={<Experience/>} />
      <Route exact path="/" element={<FinalPreview/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;

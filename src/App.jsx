import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact"
import Project from "./Project";
import Certification from "./Certification";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

         <Route path="/skills" element={<Skills />} />
     
        <Route path="/project" element={<Project />} />  

       <Route path="/certification" element={<Certification />} />  

         <Route path="/contact" element={<Contact />} />



       
      </Routes>

    </BrowserRouter>
  );
}

export default App;
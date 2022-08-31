import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import About from "./components/About/About";
import Dashbord from "./components/Dashbord/Dashbord";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";

function App() {
  return (
    <BrowserRouter>
    <div className="template">
      <Dashbord />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<Skills/>} />
        <Route path="/works" element={<Works/>} />
      </Routes>
      </div>  
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import axios from "axios";
// import Swal from 'sweetalert2'
// import { useEffect, useState } from 'react'
// import Aos from "aos";
import "aos/dist/aos.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dash' element={<Dashboard/>}></Route>
       
      </Routes>
      </BrowserRouter>
  );
}

export default App;

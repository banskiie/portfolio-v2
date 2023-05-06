import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

import { Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route index path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/projects" Component={Projects} />
      <Route path="/contact" Component={Contact} />
    </Routes>
  );
}

export default AppRoutes;

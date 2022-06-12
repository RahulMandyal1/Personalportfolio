import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Tools from "./Tools";
import Particle from "./Particle";
export default function Main() {
  return (
    <main className="main-container">
      <Particle />
      <Routes>
        <Route path="/" exact element={<About />} />
        <Route path="/techstack" element={<Skills />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

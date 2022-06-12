import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <header className="navigation-bar-container">
      <div className="userintro-container">
        <figure>
          <img
            src="https://avatars.githubusercontent.com/u/93306066?v=4"
            alt="rahul mandyal"
          ></img>
        </figure>
      </div>
      <nav className="navigationbar">
        <ul>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/techstack">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/tools">Tools</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

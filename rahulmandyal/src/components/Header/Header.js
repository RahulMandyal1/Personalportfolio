import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  let [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="navigation-bar-container">
      <div className="logo-container">
        <figure>
          <img
            src="https://avatars.githubusercontent.com/u/93306066?v=4"
            alt="rahulmandyal"
          ></img>
        </figure>
        <span>Rahul</span>
      </div>

      <div className="hamburg-container">
        <GiHamburgerMenu
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        />
      </div>

      <nav className="navigationbar" id={toggleMenu && "showmenu"}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive && "active"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/techstack"
              className={({ isActive }) => isActive && "active"}
            >
              TechStack
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => isActive && "active"}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive && "active"}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

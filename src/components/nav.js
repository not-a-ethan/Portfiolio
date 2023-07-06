import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink to="/">
        <img id="myPfpNav" src="../images/pfp.png" alt="My pfp" />
      </NavLink>
      <p>
        <NavLink to="/about-me">
          ABOUT ME
        </NavLink>
      </p>
      <p>
        <NavLink to="/projects">
          PROJECTS
        </NavLink>
      </p>
      <p>
        <NavLink
          to="/contact">
          CONTACT
        </NavLink>
      </p>
    </nav>
  );
}

export default Nav;
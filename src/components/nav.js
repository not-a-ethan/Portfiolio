import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink to="https://not-a-ethan.github.io">
        <img id="myPfpNav" src="../images/pfp.png" alt="My pfp" />
      </NavLink>
      <p>
        <NavLink
          to="https:/ / not - a -
               ethan.github.io / about - me "
        >
          ABOUT ME
        </NavLink>
      </p>
      <p>
        <NavLink
          to="https:/ / not - ethan.is -
  a.dev / projects "
        >
          {" "}
          PROJECTS
        </NavLink>
      </p>
      <p>
        <NavLink
          to="https:/ / not - a -
  ethan.github.io / contact "
        >
          {" "}
          CONTACT
        </NavLink>
      </p>
    </nav>
  );
}

export default Nav;

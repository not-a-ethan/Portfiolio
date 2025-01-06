import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Nav(props) {
  /* props
    currentPage
  */

  let currentPageIsHome
  let currentPageIsProjects

  if (props.currentPage === "home") {
    currentPageIsHome = true
    currentPageIsProjects = false
  } else if (props.currentPage === "projects") {
    currentPageIsProjects = true
    currentPageIsHome = false
  }

  useEffect(() => {
    const test = document.getElementById('nav');
    window.addEventListener('scroll', function(e) {
    const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    test.style.opacity = Math.max(0, Math.min(1, -scroll / 300 + 1));
});
  })
  

  return (
    <nav className="nav" id="nav">
      <div style={{gridColumn: "1", width: "fit-content", height: "fit-content"}}>
        <h2 style={{textDecoration: "underline", textDecorationColor: "#468189", textDecorationThickness: 10, fontSize: "80px", marginBottom: "1%", marginTop: "0", marginRight: "1vw"}} className="name-logo">Ethan</h2>

        <div style={{alignItems: "left", textAlign: "left"}}>
          <a href="https://github.com/not-a-ethan"><picture><source srcSet="./images/githubLogoDark.png" media="(prefers-color-scheme: light)" /><img src="./images/githubLogo.png" alt="Github Logo" className="nav-logo nav-github"/></picture></a>
          <p style={{display: "inline"}}><img src="./images/discordLogo.svg" alt="Discord Logo" className="nav-logo nav-discord" />not_ethan.</p>
        </div>
      </div>

      <div style={{gridColumn: "2", width: "fit-content", height: "auto", top: "2vh", position: "relative"}}>
        <NavLink to="/" className={currentPageIsHome ? "currentPage nav-link" : "diffrentPage nav-link"}>Home</NavLink>
        <br />
        <NavLink to="/projects" className={currentPageIsProjects ? "currentPage nav-link" : "diffrentPage nav-link"}>Projects</NavLink>
      </div>
    </nav>
  );
}

export default Nav;

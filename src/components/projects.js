import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Projects() {
  useEffect(() => {
    const observerLeftProject = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("project-showLeft");
        } else {
          entry.target.classList.remove("project-showLeft");
        }
      });
    });

    const observerRightProject = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("project-showRight");
        } else {
          entry.target.classList.remove("project-showRight");
        }
      });
    });

    const hiddentElementsLeftProject = document.querySelectorAll(
      ".project-hiddenLeft"
    );
    hiddentElementsLeftProject.forEach((el) => observerLeftProject.observe(el));

    const hiddentElementsRightProject = document.querySelectorAll(
      ".project-hiddenRight"
    );
    hiddentElementsRightProject.forEach((el) =>
      observerRightProject.observe(el)
    );
  });

  return (
    <>
      <header id="project-header">
        <h1>Projects</h1>

        <p id="project-p-header-tag">Here I will list my best projects I am most proud of. The list will be in chronilogical order</p>
        <br />
        <p id="project-p-header-tag">
          Not all of my projects will be listed here. Only the greatest of them will be.You can view all my projects on my <a href="https://github.com/not-a-ethan?tab=repositories">Github Profile</a>. If you have any idea for what I should make feel free to suggest it by <Link to="/contact">contacting me</Link>.</p>
      </header>

      <main id="project-main">
        <section className="project-projectLeft project-hiddenRight" id="project-portfolio">
          <h2>My portfolio(this website) </h2>
          <div className="project-imgAndText">
            <div className="project-img">
              <img src="./images/portfolio.png "alt="Screenshot of the Home page of this website"/>

              <div className="project-techs">
                <img src="./images/skills/HTML.png" alt="HTML Logo" />
                <br />
                <img src="./images/skills/CSS.png" alt="CSS Logo" />
                <br />
                <img
                  src="./images/skills/Javascript.png"
                  alt="JavaScript Logo"
                />
              </div>
            </div>

            <div className="project-textOrGhLink">
              <p>
                My protfolio website is this very site you are looking at right
                now.This site contains my biggest projects and the ones I am
                most proud of such as Coin Catalog.It also tells you and others
                how to contact me and a little about myself.
              </p>

              <a className="project-gh-Button" href="https://github.com/not-a-ethan/Portfiolio">
                <img src="./images/githubLogo.png" alt="Github Logo" />
                <pre>Github</pre>
              </a>
            </div>
          </div>
        </section>

        <section
          className="project-projectRight project-hiddenLeft"
          id="project-coincatalog"
        >
          <h2>Coin Catalog</h2>

          <div className="project-imgAndText">
            <div className="project-img">
              <img
                src="./images/coinCatalogProject.png"
                alt="A screenshot from the home page of Coincatalog"
              />

              <div className="project-techs">
                <img src="./images/skills/HTML.png" alt="HTML Logo" />
                <br />
                <img src="./images/skills/CSS.png" alt="CSS Logo" />
              </div>
            </div>

            <div className="project-textOrGhLink">
              <p>
                Coin Catalog is an open sourse project I contribute and is the
                sole maintainer of .It has info about coins from all through out
                American history and is constantly growing.
              </p>

              <a className="project-gh-Button" href="https://github.com/Coin-Catalog">
                <img src="./images/githubLogo.png" alt="Github Logo" />
                <pre>Github</pre>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Projects;
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Project from "./projects/project.js";

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
        <Project projectImgPath="./images/portfolio.png" projectImgAlt="Screenshot of the Home page of this website" projectTitle="My portfolio(this website)" projectText="My protfolio website is this very site you are looking at right now.This site contains my biggest projects and the ones I am most proud of such as Coin Catalog.It also tells you and others how to contact me and a little about myself." projectGhLink="https://github.com/not-a-ethan/Portfiolio" projectTechs={["react", "css"]} side="right" />

        <Project projectImgPath="./images/coinCatalogProject.png" projectImgAlt="A screenshot from the home page of Coincatalog" projectTitle="Coin Catalog" projectText="Coin Catalog is an open sourse project I contribute and is the sole maintainer of .It has info about coins from all through out American history and is constantly growing." projectGhLink="https://github.com/Coin-Catalog" projectTechs={["html", "css"]} side="left" />
      </main>
    </>
  );
}

export default Projects;
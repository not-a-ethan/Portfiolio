import React, { useEffect } from "react";
import Project from "./projects/project.js";

function Projects() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddentElements = document.querySelectorAll(".hidden");
    hiddentElements.forEach((el) => observer.observe(el));
  })

  return (
    <>
      <header id="project-header" className="main hidden">
        <h1 className="secondary-text">Projects</h1>

        <p>Here I will list my best projects I am most proud of. The list will be in <span className="secondary-text">chronological order</span></p>
      </header>

      <main id="project-main">
        <Project 
          projectImgPath="./images/projects/portfolio.png" 
          projectImgAlt="Screenshot of the Home page of this website" 
          projectTitle="My portfolio (this website)" 
          projectText="My protfolio website is this very site you are looking at right now. This site contains my biggest projects and the ones I am most proud of such as Coin Catalog. It also tells you and others how to contact me and a little about myself." 
          projectGhLink="https://github.com/not-a-ethan/Portfiolio" 
          projectTechs={["react", "css"]} 
          side="right" 
        />

        <Project 
          projectImgPath="./images/projects/coinCatalogProject.png" 
          projectImgAlt="A screenshot from the home page of Coincatalog" 
          projectTitle="Coin Catalog" 
          projectText="Coin Catalog is an open sourse project about Coins from through out U.S. history. I am constantly adding more coins and it will never stop growing. I made it and I am also the soul maintainer of the project." 
          projectGhLink="https://github.com/Coin-Catalog" 
          projectTechs={["next", "css"]} 
          side="left" 
        />

        <Project 
          projectImgPath="./images/projects/time-tracker.png" 
          projectImgAlt="A screenshot from the home page the time tracker" 
          projectTitle="Time Tracker" 
          projectText="Time Tracker is a Next.js project that tracks your time. You can create multiple projects with time entries in each project. You can also delete projects and time entries along with other features." 
          projectGhLink="https://github.com/not-a-ethan/time-tracker" 
          projectTechs={["next", "css", "sql"]} 
          side="right" 
        />

        <Project 
          projectImgPath="./images/projects/chat-app.png" 
          projectImgAlt="A screenshot from the home page the chat app" 
          projectTitle="Chat app" 
          projectText="This project has the same basic concept as other sites such as Discord. This project lets people chat (with text) on a website. Users can create multiple rooms and invite and remove users from each room independently. Users can also modfiy details of their account such as username, password and profile picture."
          projectGhLink="https://github.com/not-a-ethan/chat-app" 
          projectTechs={["next", "css", "sql"]} 
          side="left" 
        />
      </main>
    </>
  );
};

export default Projects;

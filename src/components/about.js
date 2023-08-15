import React, { useEffect } from "react";
import Skill from "./about/skill.js";

function About() {
  useEffect(() => {
    const observerLeftAbout = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("about-showLeft");
        } else {
          entry.target.classList.remove("about-showLeft");
        }
      });
    });

    const observerRightAbout = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("about-showRight");
        } else {
          entry.target.classList.remove("about-showRight");
        }
      });
    });

    const hiddentElementsLeftAbout =
      document.querySelectorAll(".about-hiddenLeft");
    hiddentElementsLeftAbout.forEach((el) => observerLeftAbout.observe(el));

    const hiddentElementsRightAbout =
      document.querySelectorAll(".about-hiddenRight");
    hiddentElementsRightAbout.forEach((el) => observerRightAbout.observe(el));
  });

  return (
    <main id="about">
      <h1>About Me </h1>
      <section>
        <p>Hey, I'm Ethan! I'm a student that loves programming. I like making websites and bots. I also like doing <a href="https://replit.com/bounties">Replit Bounties</a> to get some cycles.I'm an admin on <a href="https://ask.replit.com">Replit Ask </a> and a moderator on <a href="https://replit.com"> Replit</a>. I'm currently in the East Coast of the United States.</p>
      </section>

      <hr />

      <section>
        <h2>My Programming Journey ➡️</h2>
        <p>I started in January 2020 to make a website for something in real life. I started with Javascript. Back then I thought "true programers" used binary and every lanuge can do everything the same. So I learned up to conditinals or so and gave up since lock down happend.</p>

        <p>Then in 2021 I started again learned HTML, CSS and JS (not for webdev) well. So I made some websites and then learned JS for front end webdev.</p>

        <p>Then learned about front end frame works and <span className="italics">tried</span>learning React. Around a year later I actualy learned it.</p>

        <p>Then now a days I am learning SQL as part of my journey of learning Back End web developer.</p>
      </section>

      <hr />

      <section>
        <h2>Skills </h2>

        <Skill 
          side="right" 
          imgPath="./images/skills/HTML.png" 
          imgAlt="HTML logo" 
          title="HTML" 
          description="HTML is the a languge to build the front end of a webpage." 
        />

        <Skill 
          side="left" 
          imgPath="./images/skills/CSS.png" 
          imgAlt="CSS logo" 
          title="CSS" 
          description="CSS is used to style HTML to make it look good." 
        />

        <Skill 
          side="right" 
          imgPath="./images/skills/Javascript.png" 
          imgAlt="Javascript logo" 
          title="Javascript" 
          description="Javascript can be used for almsot anything. It is used to make HTML interactive, the backend of a website or just about anything." 
        />

        <Skill 
          side="left" 
          imgPath="./images/skills/TypeScript.png" 
          imgAlt="Typescript logo" title="TypeScript"
          description="Javascript but with declared types" 
         />

        <Skill 
          side="right" 
          imgPath="./images/skills/SQL.png" 
          imgAlt="SQL logo" 
          title="SQL" 
          description="SQL is used to interact with databses from reading to dbs to writing to them."
        />

        <Skill 
          side="left" 
          imgPath="./images/skills/React.png" 
          imgAlt="React logo" 
          title="React" 
          description="React is a Front end web framework and could be used full stack with another frame woork like Next.js or Remix." 
        />

        <Skill 
          side="right" 
          imgPath="./images/skills/Github.png" 
          imgAlt="Github logo" 
          title="Github" 
          description="Github is version control in the web that uses Git. It is also used to host code and open sourse projects."
        />

        <Skill
          side="left"
          imgPath="./images/skills/GH-actions.png"
          imgAlt="Github Actions logo"
          title="Github Actions"
          description="Github Actions is used to automate things like testing, building and deploying."
        />

        <Skill
          side="right"
          imgPath="./images/skills/nextjs Logo.png"
          imgAlt="Next.js logo"
          title="Next.js"
          description="Next.js is a full stack web framework that uses React."
        />
      </section>
    </main>
  );
}

export default About;
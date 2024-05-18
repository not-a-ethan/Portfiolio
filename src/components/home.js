import React, { useEffect } from "react";

import Skill from "./home/skill";

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    })

    const hiddentElements = document.querySelectorAll(".hidden");
    hiddentElements.forEach((el) => observer.observe(el));
  })
  
  return (
    <main id="home" className="main">
      <h1 className="secondary-text hidden">About Me</h1>

      <p className="hidden">
        <span className="secondary-text">Hey I'm Ethan</span>. I'm a student that <span className="secondary-text">loves</span> to <span className="secondary-text">Program</span>. I am currently on the <span className="secondary-text">East Coast</span> of the <span className="secondary-text">United states</span>. I <span className="secondary-text">help others</span> with programming <span className="secondary-text">sharing</span> what I have learned over the years with new comers.
      </p>

      <hr className="hidden" />

      <h2 className="secondary-text hidden">My Programming Journey</h2>

      <p className="hidden">
        I started in <span className="secondary-text">January 2020</span> to make a <span className="secondary-text">website</span> for something in real life. I started with <span className="secondary-text">JavaScript.</span> Back then I thought "true programmers" used binary and every language can do everything the same. So I learned up to conditionals or so and gave up since lock down happened.
      </p>

      <p className="hidden">
        Then in 2021 I started again learned <span className="secondary-text">HTML, CSS</span> and <span className="secondary-text">JS</span> (not for webdev) well. So I made some websites and then learned JS for <span className="secondary-text">frontend webdev</span>. 
      </p>

      <p className="hidden">
        Then learned about front end frame works and tried learning <span className="secondary-text">React</span>. Around a year later I actually learned it.
      </p>

      <p className="hidden">
        Then now a days I learned <span className="secondary-text">SQL</span> and improving my <span className="secondary-text">Next.js</span> skills as part of my journey of learning <span className="secondary-text">backend webdev</span>.
      </p>

      <p className="secondary-text hidden">Check out what I've learned</p>
      <p style={{fontSize: 50, margin: 10}} className="hidden" >&#8595;</p>

      <div style={{display: "grid"}}>
        <div className="row-one column-one gridItem hidden">
          <Skill skillName="HTML" skillImgPath="./images/skills/HTML.png" skillImgAlt="HTML Logo" skillDescription="HTML is the a languge to build the front end of a webpage." />
        </div>

        <div className="row-one column-two gridItem hidden">
          <Skill skillName="CSS" skillImgPath="./images/skills/CSS.png" skillImgAlt="CSS Logo" skillDescription="CSS is used to style HTML to make it look good." />
        </div>

        <div className="row-one column-three gridItem hidden">
          <Skill skillName="JavaScript" skillImgPath="./images/skills/Javascript.png" skillImgAlt="JavaScript Logo" skillDescription="Javascript can be used for almsot anything. It is used to make HTML interactive, the backend of a website or just about anything." />
        </div>

        <div className="row-two column-one gridItem hidden">
          <Skill skillName="TypeScript" skillImgPath="./images/skills/TypeScript.png" skillImgAlt="TypeScript Logo" skillDescription="Javascript but with declared types" />
        </div>

        <div className="row-two column-two gridItem hidden">
          <Skill skillName="SQL" skillImgPath="./images/skills/SQL.png" skillImgAlt="SQL Logo" skillDescription="SQL is used to interact with databses from reading to dbs to writing to them." />
        </div>

        <div className="row-two column-three gridItem hidden">
          <Skill skillName="React" skillImgPath="./images/skills/React.png" skillImgAlt="React Logo" skillDescription="React is a Front end web framework and could be used full stack with another framework like Next.js or Remix." />
        </div>

        <div className="row-three column-one gridItem hidden">
          <Skill skillName="Github" skillImgPath="./images/skills/Github.png" skillImgAlt="Github Logo" skillDescription="Github is version control in the web that uses Git. It is also used to host code and open sourse projects." />
        </div>

        <div className="row-three column-two gridItem hidden">
          <Skill skillName="Next.js" skillImgPath="./images/skills/Nextjs.png" skillImgAlt="Next.js Logo" skillDescription="Next.js is a full stack web framework that uses React." />
        </div>
      </div> 
    </main>
  );
}

export default Home;

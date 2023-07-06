import React, { useEffect } from "react";

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
        <p>
          Hey, I'm Ethan! I'm a student that loves programming. I like making websites, bots. I also like doing <a href="https://replit.com/bounties">Replit Bounties</a> to get some cycles.I'm an admin on <a href="https://ask.replit.com">Replit Ask </a> and a moderator on <a href="https://replit.com"> Replit</a>. I'm currently in the East Coast of the United States.
        </p>
      </section>

      <hr />

      <section>
        <h2>My Programming Journey ➡️</h2>
        <p>
          I started in January 2020 to make a website. I started with
          Javascript. Back then I thought "true programers" used binary and
          every lanuge can do everything the same. So I learned up to
          conditinals or so and gave up since lock down happend.
        </p>
        <p>
          Then in 2021 I started again learned HTML, CSS and JS (not for webdev)
          well. So I made some websites and then learned JS for front end webdev
          .
        </p>
        <p>
          Then learned about front end frame works and{" "}
          <span className="italics">tried</span>learning React.Around a year
          later I actualy learned it.
        </p>
        <p>
          Then now a days I am learning SQL as part of my journey of learning
          Back End web developer.
        </p>
      </section>

      <hr />

      <section>
        <h2>Skills </h2>

        <section className="about-projectLeft about-hiddenRight about-skill">
          <div className="about-imgAndText">
            <img src="./images/skills/HTML.png" alt="HTML logo" className="about-img" />

            <div>
              <h3>HTML</h3>

              <p>HTML is the a languge to build the front end of a webpage.</p>
            </div>
          </div>
        </section>

        <section className="about-projectRight about-hiddenLeft about-skill">
          <div className="about-imgAndText">
            <img src="./images/skills/CSS.png" alt="CSS logo" className="about-img" />

            <div>
              <h3>CSS</h3>

              <p>CSS is used to style HTML to make it look good.</p>
            </div>
          </div>
        </section>

        <section className="about-projectLeft about-hiddenRight about-skill">
          <div className="about-imgAndText">
            <img src="./images/skills/Javascript.png" alt="Javascript logo" className="about-img" />

            <div>
              <h3>Javascript</h3>

              <p>
                Javascript can be used for almsot anything. It is used to make
                HTML interactive, the backend of a website or just about
                anything.
              </p>
            </div>
          </div>
        </section>

        <section className="about-projectRight about-hiddenLeft about-skill">
          <div className="about-imgAndText">
            <img src="./images/skills/TypeScript.png" alt="Typescript logo" className="about-img" />

            <div>
              <h3>TypeScript</h3>

              <p>Javascript but with declared types</p>
            </div>
          </div>
        </section>

        <section className="about-projectLeft about-hiddenRight about-skill">
          <div className="about-imgAndText">
            <img src="./images/skills/SQL.png" alt="SQL logo" className="about-img" />

            <div>
              <h3>SQL</h3>

              <p>
                <abbr title="Sequel or Structured Query Language">SQL</abbr>is
                used to interact with databses from reading to dbs to writing to
                them.
              </p>
            </div>
          </div>
        </section>

        <section className="about-projectRight about-hiddenLeft about-skill">
          <div className="about-imgAndText">
            <img src="./images/skills/React.png" alt="React logo" className="about-img" />

            <div>
              <h3>React</h3>

              <p>
                React is a Front end web framework and could be used full stack
                with another frame woork like Next.js or Remix.
              </p>
            </div>
          </div>
        </section>

        <section className="about-projectLeft about-hiddenRight about-skill">
          <div className="about-imgAndText">
            <img src="./images/skills/Github.png" alt="Markdown logo" className="about-img" />

            <div>
              <h3>Github</h3>

              <p>
                Github is version control in the web that uses Git. It is also
                used to host code and open sourse projects.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default About;
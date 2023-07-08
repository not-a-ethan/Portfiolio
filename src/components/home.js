import React from "react";

function Home() {
  return (
    <>
      <header>
        <h1>Ethan's Portfolio</h1>

        <p>Hey there! I'm Ethan. I love coding, especially discord bots and the front end of websites. I love helping others even more helping them get over road bumps they face when first learning! I am an Admin on <a href="https://ask.replit.com">Replit Ask</a> and a Moderator on <a href="https://replit.com">Replit</a>.</p>
      </header>

      <hr />

      <main>
        <div id="home-skills">
          <div id="home-languages">
            <h2>Languages </h2>
            <ul className="home-ul">
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>SQL</li>
            </ul>
          </div>
          <div id="home-frameworks">
            <h2>Frameworks/Libraries</h2>
            <ul className="home-ul">
              <li>BootStrap</li>
              <li>React</li>
            </ul>
          </div>
          <div id="home-tools">
            <h2>Tools</h2>
            <ul className="home-ul">
              <li>Github</li>
              <li>VS Code</li>
              <li>Replit</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
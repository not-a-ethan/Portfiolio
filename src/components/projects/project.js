import React, { useEffect } from 'react'

function Project(props) {

  /*
    props
    projectImgPath
    projectImgAlt
    projectTechs (Array with names of techs)
    projectTitle
    projectText
    projectGhLink
    side (left or right)
  */

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
 
  const projectTechs = []

  props.projectTechs.forEach((tech) => {
    if (tech === 'html') {
      projectTechs.push(
        <>
          <img src="./images/skills/HTML.png" alt="HTML Logo" key="html" /> 
          <br />
        </>
      );
    } else if (tech === 'css') {
      projectTechs.push(
        <>
          <img src="./images/skills/CSS.png" alt="CSS Logo" key="css" />
          <br />
        </>
      );
    } else if (tech === 'js') {
      projectTechs.push(
        <>
          <img src="./images/skills/JS.png" alt="JS Logo" key="js" />
          <br />
        </>
      );
    } else if (tech === 'react') {
      projectTechs.push(
        <>
          <img src="./images/skills/React.png" alt="React Logo" key="react" />
          <br />
        </>
      );
    } else if (tech === 'next') {
      projectTechs.push(
        <>
          <img src="./images/skills/Nextjs.png" alt="Next Logo" key="next" />
          <br />
        </>
      )
    }
  });

  console.log(projectTechs)


  return (
    <section className="project hidden">
      <div className='project-img'>
        <img src={props.projectImgPath} alt={props.projectImgAlt} />
      </div>

      <div className='project-text'>
        <h2 className='secondary-text'>
          {props.projectTitle}
        </h2>

        <p>
          {props.projectText}
        </p>

        <br />

        <a href={props["projectGhLink"]}><picture className="github-project-link"><source srcset="./images/githubLogoDark.png" media="(prefers-color-scheme: light)" /><img src="./images/githubLogo.png" alt="Github Logo"/></picture></a>
      </div>

      <div className='project-techs'>
        {projectTechs}
      </div>
    </section>
  )

  /*
  return (
    <section id="project-portfolio">
      <h2>{props.projectTitle}</h2>
      <div className="project-imgAndText">
        <div className="project-img">
          <img src={props.projectImgPath} alt={props.projectImgAlt} />

          <div className="project-techs">
            {projectTechs}
          </div>
        </div>

        <div className="project-textOrGhLink">
          <p>{props.projectText}</p>

          <a className="project-gh-Button" href={props.projectGhLink}>
            <img src="./images/githubLogo.png" alt="Github Logo" />
            <pre>Github</pre>
          </a>
        </div>
      </div>
    </section>
  )
  */
}

export default Project

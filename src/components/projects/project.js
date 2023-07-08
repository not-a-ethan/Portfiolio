import React from 'react'

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
 
  const cssTransitionClassNames = []
  const projectTechs = []

  if (props.side === "left") {
    cssTransitionClassNames.push("project-projectRight project-hiddenLeft")
  } else if (props.side === "right") {
    cssTransitionClassNames.push("project-projectLeft project-hiddenRight")
  }

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
    }
  });



  return (
    <section className={cssTransitionClassNames} id="project-portfolio">
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
}

export default Project
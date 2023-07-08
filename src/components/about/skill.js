import React from 'react'

function Skill(props) {
  const cssTransitionClassNames = []

  if (props.side === "left") {
    cssTransitionClassNames.push("about-projectRight about-hiddenLeft")
  } else if (props.side === "right") {
    cssTransitionClassNames.push("about-projectLeft about-hiddenRight")
  }

  return (
    <section className={cssTransitionClassNames + " about-skill"}>
      <div className="about-imgAndText">
        <img src={props.imgPath} alt={props.imgAlt} className="about-img" />

        <div>
          <h3>{props.title}</h3>

          <p className="about-skillDescription">{props.description}</p>
        </div>
      </div>
    </section>
  )
}

export default Skill
import React from 'react';

function Skill(props) {
  /*
    props
    skillImgPath
    skillImgAlt
    skillName
    skillDescription
  */

  return (
    <div className="skill">
      <p style={{display: "inline"}} className='skill-name secondary-text'>{props.skillName} <img alt={props.skillImgAlt} src={props.skillImgPath} className='skill-image' /></p>
      <p className='skill-description'>{props.skillDescription}</p>
    </div>
  );
};

export default Skill;

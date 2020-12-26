import React from "react";
import PropTypes from "prop-types";
import "./Skills.scss";

export const Skills = ({skills}) => {
    const skillsList = skills.map(skill => {
        return <li key={skill._id}>
            <span className="bar-expand" data-aos="new-animation" data-aos-offset="100" data-aos-delay="50" data-aos-once="true" style={{maxWidth:skill.level}}></span>
            <em>{skill.name}</em>
        </li>
    });

    return <div className="row skill">
            <div className="three columns header-col">
                <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
                <p>These bars show the amount of time I'm currently spending on each of the following areas:</p>
                <div className="bars">
                <ul className="skills">
                    {skillsList}
                </ul>
            </div>
		</div>
    </div>
}

Skills.propTypes = {
   skills: PropTypes.arrayOf(
      PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            level: PropTypes.string.isRequired,
      })).isRequired
}
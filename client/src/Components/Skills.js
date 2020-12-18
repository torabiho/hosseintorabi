import React from "react";
import "./Skills.scss";

export const Skills = ({skills}) => {
    const skillsList = skills && skills.map(skill => {
        return <li key={skill.name}>
            <span className="bar-expand" data-aos="new-animation" data-aos-offset="100" data-aos-delay="50" data-aos-once="true" style={{maxWidth:skill.level}}></span>
            <em>{skill.name}</em>
        </li>
    });

    return <div className="row skill">
            <div className="three columns header-col">
                <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
                <p>In addition to several programming languages such as Java, C++ and python, I have skills and experience in the following areas:</p>
                <div className="bars">
                <ul className="skills">
                    {skillsList}
                </ul>
            </div>
		</div>
    </div>
} 
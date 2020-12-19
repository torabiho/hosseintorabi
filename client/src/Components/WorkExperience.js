import React from "react";
import "./WorkExperience.scss"; 

export const WorkExperience = ({ works }) => {

    const worksList = works && works.map(work =>{
    return <div key={work.years}>
        <h3 className="title">{work.company}</h3>
        <p className="subtitle">{work.title}
            <span>&bull;</span>
            <em className="work-experience__date">{work.years}</em>
        </p>
        <p>{work.description}{work.link && <span> Click <a href={work.link} target='_blank'>here</a> for more details.</span>}</p>
    </div>
    })

    return <div className="row work-experience">
        <div className="three columns header-col">
            <h1><span>Work</span></h1>
        </div>
        <div className="nine columns main-col">
            {worksList}
        </div>
    </div>
}
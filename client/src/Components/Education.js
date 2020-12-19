import React from "react";
import { compareValues } from "../utilities/helpers";
import "./Education.scss";

export const Education = ({ educations }) => {
    const educationsList = educations && educations.sort(compareValues("graduation", "desc")).map(education => {
        return (
        <div key={education.school}>
            <h3 className="title">{education.school}</h3>
            <p className="subtitle">{education.degree}</p>
            <p>{education.description}</p>
        </div>)
    })

    return <div className="row education">
        <div className="three columns header-col">
            <h1><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
            <div className="row item">
                <div className="twelve columns">
                    {educationsList}
                </div>
            </div>
        </div>
    </div>
}
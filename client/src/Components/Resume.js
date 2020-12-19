import React from 'react';
import { Skills } from "./Skills";
import { WorkExperience } from './WorkExperience';
import { Education } from "./Education";
import "./Resume.scss";

const Resume = ({educations, works, skills}) => {
    return (
      <section id="resume">
        <Education educations={educations} />
        <WorkExperience works={works}/>
        <Skills skills={skills}/>
      </section>
    );
}

export default Resume;

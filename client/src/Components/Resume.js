import React, { Component } from 'react';
import { compareValues } from "../utilities/helpers";
import { Skills } from "./Skills";

class Resume extends Component {
  render() {

    if(this.props.educations){
      var educationsList = this.props.educations.sort(compareValues("graduation", "desc")).map(education => {
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree}</p>
        <p>{education.description}</p></div>
      })
    }

    if(this.props.works){
      var worksList = this.props.works.map(work =>{
        return <div key={work.years}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}{work.link && <span> Click <a href={work.link} target='_blank'>here</a> for more details.</span>}</p>
        </div>
      })
    }

    return (
      <section id="resume">
        <div className="row education">
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
        <div className="row work">
          <div className="three columns header-col">
              <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            {worksList}
          </div>
        </div>
        <Skills skills={this.props.skills}/>
   </section>
    );
  }
}

export default Resume;

import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.educations){
      var educationsList = this.props.educations.map(education => {
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

    if(this.props.skills){
      var skillsList = this.props.skills.map(skill => {
        var className = 'bar-expand '+skill.name.toLowerCase();
        return <li key={skill.name}><span style={{width:skill.level}}className={className}></span><em>{skill.name}</em></li>
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



      <div className="row skill">

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
   </section>
    );
  }
}

export default Resume;

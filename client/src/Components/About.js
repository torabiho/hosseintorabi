import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
       var bio = this.props.data[0];
      var name = bio.name;
      var profilepic= "images/"+bio.image;
      var bio1 = bio.bio1;
      var bio2 = bio.bio2;
      var city = bio.address.city;
      var country = bio.address.country;
      var email = bio.email;
      var resumeDownload = bio.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Hossein Torabi Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio1}</p>
            <p>{bio2}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{city}, {country}
                   </span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} target='_blank' className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;

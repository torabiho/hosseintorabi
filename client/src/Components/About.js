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

         </div>
      </div>

   </section>
    );
  }
}

export default About;

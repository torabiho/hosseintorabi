import React from "react";
import PropTypes from "prop-types";
import "./About.scss";

export const About = (props) => {
  const bio = props.data[0];
  const profilePic = "images/" + bio.image;
  const about = bio.about;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilePic}
            alt="Hossein Torabi Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          {about.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      about: PropTypes.arrayOf(PropTypes.string.isRequired),
    })
  ),
};

import React from "react";
import PropTypes from "prop-types";
import { compareValues } from "../utilities/helpers";
import { ThirdPartyFacade } from "./ThirdPartyFacade";
import "./Portfolio.scss";

const renderMedia = (project) => {
  if (project.videoLink) {
    return (
      <ThirdPartyFacade
        title={project.title}
        url={project.videoLink}
        customStyle={{ minHeight: "227px" }}
      />
    );
  } else {
    const projectImage = "images/portfolio/thumbnails/" + project.image;
    return <img alt={project.title} src={projectImage} />;
  }
};

const renderLinks = (links) => {
  return (
    links &&
    Object.keys(links).map((keyName, i) => (
      <a
        key={i}
        className="timeline-content__link"
        href={links[keyName]}
        target="_blank"
      >
        {keyName}
      </a>
    ))
  );
};

const renderProject = (project) => (
  <li
    key={project._id}
    data-aos="fade-right"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-once="true"
  >
    <div className="timeline-content">
      {/* <h3 className="date">{project.date}</h3> */}
      <h1>{project.title}</h1>
      {renderMedia(project)}
      <p>{project.description}</p>
      {renderLinks(project.links)}
    </div>
  </li>
);

export const Portfolio = ({ data }) => {
  return (
    <section id="portfolio" className="portfolio-container">
      <h1 className="portfolio__header"> Check Out Some of My Works </h1>
      <div className="timeline">
        <ul>
          {data
            .sort(compareValues("order"))
            .map((project) => renderProject(project))}
        </ul>
      </div>
    </section>
  );
};

Portfolio.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      order: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
      videoLink: PropTypes.string,
      links: PropTypes.objectOf(PropTypes.string),
    })
  ).isRequired,
};

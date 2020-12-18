import React from "react";
import { compareValues } from "../utilities/helpers";
import "./Portfolio.scss";

const getMedia = (project) => {
	if (project.videoLink) {
		return (
			<iframe
				title="Contact Tracing App"
				style={{ minHeight: "227px" }}
				src={project.videoLink}
				frameBorder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		);
	} else {
		const projectImage = "images/portfolio/thumbnails/" + project.image;
		return <img alt={project.title} src={projectImage} />;
	}
};

const getProjects = (project) => (
	<li
		key={project._id}
		data-aos="fade-right"
		data-aos-offset="400"
		data-aos-delay="50"
		data-aos-once="true"
	>
		<div className="timeline-content">
			{/* <h3 className="date">{project.date}</h3> */}
			<h1>{project.title}</h1>
			{getMedia(project)}
			<p>{project.description}</p>
			{project.url && (
				<p>
					Click{" "}
					<a className="timeline-content__link" href={project.url} target="_blank">
						here
					</a>{" "}
					for more details
				</p>
			)}
		</div>
	</li>
);

const Portfolio = ({ data }) => {
	return (
		<section id="portfolio" className="portfolio-container">
			<h1 className="portfolio__header"> Check Out Some of My Works </h1>
			<div className="timeline">
				<ul>{data && data.sort(compareValues("order")).map((project) => getProjects(project))}</ul>
			</div>
		</section>
	);
};

export default Portfolio;

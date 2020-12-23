import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Element, Events, scroller } from "react-scroll";
import "./WorkExperience.scss";

const displayShowMore = (index, worksLength) => {
    return index === 1 && worksLength > 2
}

const displayShowLess = (index, worksLength) => {
    return index === worksLength - 1 && worksLength > 2
}

export const WorkExperience = ({ works }) => {

    const [loadMore, setLoadMore] = useState(false);

    useEffect(() => {
        Events.scrollEvent.register('end', () => setLoadMore(false));
        return () => {
            Events.scrollEvent.remove('end');
        }
    }, []);

    const worksList = works.map((work, index) =>{
    return <div key={work._id} className={`${index > 1 && !loadMore ? "hidden" : ""}`}>
        <h3 className="title">{work.company}</h3>
        <p className="subtitle">{work.title}
            <span>&bull;</span>
            <em className="work-experience__date">{work.years}</em>
        </p>
        <p>{work.description}{work.link && <span> Click <a href={work.link} target='_blank'>here</a> for more details.</span>}</p>
        {displayShowMore(index, works.length) && <h4 className={`${loadMore ? "hidden": "toggleShowMore"}`} onClick={() => setLoadMore(!loadMore)}>Show more</h4>}
        {displayShowLess(index, works.length) && <h4 className={`${loadMore ? "toggleShowMore": "hidden"}`} onClick={() => {scroller.scrollTo('work-experience', { smooth: true, offset: -150})}}>Show less</h4>}
    </div>
    })

    return <Element name="work-experience" className="row work-experience"> 
        <div className="three columns header-col">
            <h1><span>Work</span></h1>
        </div>
        <div className="nine columns main-col container">
            {worksList}
        </div>
    </Element>
}

WorkExperience.propTypes = {
   works: PropTypes.arrayOf(
      PropTypes.shape({
            _id: PropTypes.string.isRequired,
            company: PropTypes.string.isRequired,
            link: PropTypes.string,
            years: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
      })).isRequired
}
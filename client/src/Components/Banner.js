import React from "react";
import PropTypes from "prop-types";
import "./Banner.scss";

const getBannerInfo = bio =>{
    return <>
        <h1 className="banner__header">I'm {bio.name}.</h1>
        <h3>I'm a {bio.address.city} based <span>{bio.occupation}</span>. {bio.description}.</h3>
        <hr />
        <ul className="social">
            {bio.social.map(network => <li key={network.name}>
                    <a href={network.url} target='_blank'>
                        <i className={`fa fa-${network.name}-square`}></i>
                    </a>
                </li>
            )}
        </ul>
    </>
}

export const Banner = ({ data }) => {
    return <div className="row banner">
        <div className="banner__container">
            {getBannerInfo(data[0])}
        </div>
    </div>
}

Banner.propTypes = {
   data: PropTypes.arrayOf(
      PropTypes.shape({
            address: PropTypes.shape({
              city: PropTypes.string,
            }),
            description: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            occupation: PropTypes.string.isRequired,
            social: PropTypes.arrayOf(PropTypes.shape({
                name : PropTypes.string,
                url: PropTypes.string,
                className: PropTypes.string
               })
            )
      }))
}
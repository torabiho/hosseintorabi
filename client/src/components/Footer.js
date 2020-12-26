import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import "./Footer.scss";

const networks = (data) => data.social.map(network => {
  return <li key={network.name}><a href={network.url} target='_blank'><i className={`fa fa-${network.name}`}></i></a></li>
});

const Footer = ({data}) => {
  return (
    <footer>
      <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {networks(data[0])}
            </ul>
          </div>
          <div id="go-top">
            <Link activeClass="current" to="home" spy={true} smooth={true} duration={1000}><i className="icon-up-open"></i></Link>
          </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
   data: PropTypes.arrayOf(
      PropTypes.shape({
            social: PropTypes.arrayOf(PropTypes.shape({
                name : PropTypes.string.isRequired,
                url: PropTypes.string.isRequired
               })
            )
      })).isRequired
}

export default Footer;

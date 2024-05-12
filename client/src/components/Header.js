import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, Events } from "react-scroll";
import { Banner } from "./Banner";
import "./Header.scss";

export const Header = (props) => {
  const [onHeader, toggleOnHeader] = useState(true);
  const [menuVisible, setMenuVisibility] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register("begin", () => setMenuVisibility(false));

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  return (
    <header id="home">
      <nav id="nav-wrap" className={onHeader ? "opaque" : ""}>
        <div
          onClick={() => setMenuVisibility(!menuVisible)}
          className="mobile-btn"
          title="Show navigation"
        ></div>
        <ul id="nav" className={!menuVisible ? "mobileHidden" : ""}>
          <li>
            <Link
              activeClass="current"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
              onSetInactive={() => toggleOnHeader(!onHeader)}
              onSetActive={() => toggleOnHeader(!onHeader)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="current"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="current"
              to="resume"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              activeClass="current"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              activeClass="current"
              to="testimonials"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              activeClass="current"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Banner data={props.data} />
      <p className="scrolldown">
        <Link
          activeClass="current"
          to="about"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <i className="icon-down-circle"></i>
        </Link>
      </p>
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.shape({
        city: PropTypes.string,
      }),
      description: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      occupation: PropTypes.string.isRequired,
    })
  ),
};

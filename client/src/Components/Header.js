import React, { useState, useEffect } from "react";
import { Link, Events } from "react-scroll";
import "./Header.scss";

const Header = props => {

   const [onHeader, toggleOnHeader] = useState(true);
   const [menuVisible, setMenuVisibility] = useState(false);

   useEffect(() => {
     Events.scrollEvent.register('begin', () => setMenuVisibility(false));

    return () => {
      Events.scrollEvent.remove('begin');
    }
  }, []);
   
   const getHeaderInfo = bio =>{
      return <>
            <h1 className="banner__header">I'm {bio.name}.</h1>
            <h3>I'm a {bio.address.city} based <span>{bio.occupation}</span>. {bio.description}.</h3>
            <hr />
            <ul className="social">
               Find me on:
               {bio.social.map(network => <li key={network.name}>
                     <a href={network.url} target='_blank'>
                        <i className={network.className}></i>
                     </a>
                  </li>
               )}
            </ul>
         </>
   }

    return (
      <header id="home">
         <nav id="nav-wrap" className={onHeader ? "opaque" : ""}>
            <div onClick={() => setMenuVisibility(!menuVisible)} className="mobile-btn" title="Show navigation"></div>

            <ul id="nav" className={!menuVisible ? "mobileHidden" : ""}>
               <li><Link activeClass="current" to="home" spy={true} smooth={true} duration={1000} onSetInactive={() => toggleOnHeader(!onHeader)} onSetActive={() => toggleOnHeader(!onHeader)}>Home</Link></li>
               <li><Link activeClass="current" to="about" spy={true} smooth={true} duration={1000}>About</Link></li>
               <li><Link activeClass="current" to="resume" spy={true} smooth={true} duration={1000}>Resume</Link></li>
               <li><Link activeClass="current" to="portfolio" spy={true} smooth={true} duration={1000}>Portfolio</Link></li>
               <li><Link activeClass="current" to="testimonials" spy={true} smooth={true} duration={1000}>Testimonials</Link></li>
               <li><Link activeClass="current" to="contact" spy={true} smooth={true} duration={1000}>Contact</Link></li>             
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               {props.data && getHeaderInfo(props.data[0])}
            </div>
         </div>

         <p className="scrolldown">
            <Link activeClass="current" to="about" spy={true} smooth={true} duration={1000}><i className="icon-down-circle"></i></Link>
         </p>
      </header>
    );
  
}

export default Header;

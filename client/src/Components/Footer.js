import React, { Component } from 'react';
import { Link } from "react-scroll";
import "./Footer.scss";

class Footer extends Component {
  render() {
    if(this.props.data){
      var networks= this.props.data[0].social.map(function(network){
        return <li key={network.name}><a href={network.url} target='_blank'><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>
        <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                {networks}
              </ul>
            </div>
            <div id="go-top">
              <Link activeClass="current" to="home" spy={true} smooth={true} duration={1000}><i className="icon-up-open"></i></Link>
            </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

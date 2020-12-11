import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      const projects = this.props.data;

      var thumbnails = projects.map((project) => {
        var projectImage = 'images/portfolio/thumbnails/' + project.image;
        return <li key={project.title}><div className='portfolio-item'>
          <div className='item-wrap'>
            <img alt={project.title} src={projectImage} />
            <div className='overlay'>
              <div className='portfolio-item-meta'>
                <h5>{project.title}</h5>
              </div>
            </div>
          </div>
        </div>
        </li>
      });

      
      var getMedia = project => {
        if (project.videoLink) {
          return <iframe title='contact tracing app' style={{ minHeight: '420px' }} src={project.videoLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        } else {
          var projectImage = 'images/portfolio/' + project.image;
          return <img alt={project.title} src={projectImage} />
        }
      }

      var slides = projects.map((project) => {
          return <li key={project.title}>
            {getMedia(project)}
            <p className='flex-caption'>{project.description} {project.url && <span>Click<a href={project.url} target='_blank'> here </a> for more details</span>}</p>
          </li>
        
      });
    }

    return (
      <section id='portfolio'>
        <div className='row'>
          <div className='twelve columns collapsed'>
            <h1>Check Out Some of My Works</h1>
            <div id='slider' className='flexslider'>
              <ul className='slides'>
                {slides}
              </ul>
            </div>
            <div id='carousel' className='flexslider'>
              <ul className='slides'>
                {thumbnails}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;

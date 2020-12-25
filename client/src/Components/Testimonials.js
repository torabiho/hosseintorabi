import React from 'react';
import PropTypes from "prop-types";
import "./Testimonials.scss";

const Testimonials = ({ data }) => { 
   const getTestimonials = data.map(testimonial => {
      return  <li key={testimonial._id}>
         <blockquote>
            <p>{testimonial.text}</p>
            <cite>{testimonial.user} <br /> {testimonial.organization}</cite>
         </blockquote>
      </li>
   })

   return (
   <section id="testimonials">
      <div className="text-container">
         <div className="row">
            <div className="two columns header-col">
               <h1><span>Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
               <ul className="slides">
                  {getTestimonials}
               </ul>
            </div>
         </div>
      </div>
   </section>
   );
}

Testimonials.propTypes = {
   data: PropTypes.arrayOf(
      PropTypes.shape({
            _id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired,
            organization: PropTypes.string.isRequired
      })).isRequired
}

export default Testimonials;

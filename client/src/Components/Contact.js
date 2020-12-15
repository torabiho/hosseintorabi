import React, { Component } from 'react';
import "./Contact.scss";
import axios from 'axios';

class Contact extends Component {

   state = {
        name: '',
        message: '',
        subject: '',
        email: '',
        status: '',
        buttonText: 'Send Message'
    }

   handleChange = (e) => {
      const fieldName = e.currentTarget.getAttribute("name");
      this.setState({ [fieldName]: e.target.value});
   }

   formSubmit = (e) => {
      e.preventDefault();

      this.setState({
            status: 'sending'
      });

      let data = {
         name: this.state.name,
         email: this.state.email,
         subject: this.state.subject,
         message: this.state.message
      }
      
      axios.post('/api/send-email', data)
      .then( res => {
            this.setState({ status: "sent" }, this.resetForm());
            console.log(res);
      })
      .catch(error => {
         this.setState({ status: "error" });
      })
   }

   resetForm = () => {
    this.setState({
        name: '',
        message: '',
        subject: '',
        email: '',
        buttonText: 'Message Sent'
    })
}

   render() {
    return (
      <section id="contact">
         <div className="row section-head">
            <div className="three columns section-head__title">
               <h1><span>Contact Me</span></h1>
            </div>
            <div className="nine columns section-head__description">
               <p className="lead">{this.props.data && this.props.data[0].contactmessage}</p>
            </div>
         </div>

         <div className="row">
            <div className="twelve columns">
               <form id="contactForm" name="contactForm" onSubmit={ (e) => this.formSubmit(e)}>
					<fieldset>
                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" size="35" id="contactName" name="name" onChange={this.handleChange} value={this.state.name}/>
                  </div>
                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" size="35" id="contactEmail" name="email" onChange={this.handleChange} value={this.state.email}/>
                  </div>
                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" size="35" id="contactSubject" name="subject" onChange={this.handleChange} value={this.state.subject}/>
                  </div>
                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="message" onChange={this.handleChange} value={this.state.message}></textarea>
                  </div>
                  <div className="submit-wrapper">
                     <button className="submit" disabled={this.state.status === "sending"}>Submit</button>
                     {this.state.status === "sending" && <img id="image-loader" alt="" src="images/loader.gif" />}
                  </div>
					</fieldset>
				   </form>

                {this.state.status === "error" && <div id="message-warning"> Error boy</div>}
				   {this.state.status === "sent" && <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>}
           </div>
      </div>
   </section>
    );
  }
}

export default Contact;

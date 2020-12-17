import React, { Component } from "react";
import "./Contact.scss";
import { sendEmail } from "../apiResources/endpoints";
import { isEmailValid } from "../utilities/helpers";

const sendingStatus = {
	ERROR: "error",
	SENDING: "sending",
	SENT: "sent",
};

class Contact extends Component {
	constructor(props) {
		super(props);
		this.responseRef = React.createRef();
		this.state = {
			name: "",
			message: "",
			subject: "",
			email: "",
			status: "",
			response: false,
		};
	}

	handleChange = (e) => {
		const fieldName = e.currentTarget.getAttribute("name");
		this.setState({ [fieldName]: e.target.value, response: false });
	};

	handleRequiredFields = (fieldName) => {
		if (
			this.state.status === sendingStatus.ERROR &&
			this.state[fieldName].length === 0
		) {
			return <span className="error"> * Required</span>;
		}

		return <span className="required"> *</span>;
	};

	allRequiredFieldsCompleted = () => {
		const { name, email, message } = this.state;
		return name.length > 0 && email.length > 0 && message.length > 0;
	};

	getErrorMessage = () => {
		let errorMessage = "";
		if (!this.allRequiredFieldsCompleted()) {
			errorMessage = "Please fill out all required fields and try again";
		} else if (!isEmailValid(this.state.email)) {
			errorMessage = "Please enter a valid email address";
		} else {
			errorMessage = "Sorry, message was not sent, please try again";
		}

		return <div id="message-warning">{errorMessage}</div>;
	};

	getSuccessResponse = () => (
		<div id="message-success">
			<i className="fa fa-check"></i>Your message was sent, thank you!
		</div>
	);

	renderSubmitResponse = () => {
		const { status } = this.state;
		switch (status) {
			case sendingStatus.ERROR:
				return this.getErrorMessage();
			case sendingStatus.SENT:
				return this.getSuccessResponse();
			default:
				break;
		}
	};

	formSubmit = async (e) => {
		e.preventDefault();
		this.setState({
			status: sendingStatus.SENDING,
			response: true,
		});

		const { name, email, subject, message } = this.state;

		if (this.allRequiredFieldsCompleted() && isEmailValid(email)) {
			try {
				const data = { name, email, subject, message };
				await sendEmail(data);
				this.setState({ status: sendingStatus.SENT }, this.resetForm());
			} catch (error) {
				this.setState({ status: sendingStatus.ERROR });
			}
		} else {
			this.setState({
				status: sendingStatus.ERROR,
			});
		}
	};

	resetForm = () => {
		this.setState({
			name: "",
			message: "",
			subject: "",
			email: "",
			status: "",
		});
	};

	renderInputField = (name, id, isRequired) => {
		const displayName = name.charAt(0).toUpperCase() + name.slice(1);
		return (
			<div>
				<label htmlFor={id}>
					{displayName}
					{isRequired && this.handleRequiredFields(name)}
				</label>
				<input
					type="text"
					size="35"
					id={id}
					name={name}
					onChange={this.handleChange}
					value={this.state[name]}
				/>
			</div>
		);
	};

	render() {
		return (
			<section id="contact">
				<div className="row section-head">
					<div className="three columns section-head__title">
						<h1>
							<span>Contact Me</span>
						</h1>
					</div>
					<div className="nine columns section-head__description">
						<p className="lead">
							{this.props.data &&
								this.props.data[0].contactmessage}
						</p>
					</div>
				</div>

				<div className="row">
					<div className="twelve columns">
						<form
							id="contactForm"
							name="contactForm"
							onSubmit={this.formSubmit}
						>
							<fieldset>
								{this.renderInputField(
									"name",
									"contactName",
									true
								)}
								{this.renderInputField(
									"email",
									"contactEmail",
									true
								)}
								{this.renderInputField(
									"subject",
									"contactSubject",
									false
								)}
								<div>
									<label htmlFor="contactMessage">
										Message
										{this.handleRequiredFields("message")}
									</label>
									<textarea
										cols="50"
										rows="8"
										id="contactMessage"
										name="message"
										onChange={this.handleChange}
										value={this.state.message}
									></textarea>
								</div>
								<div className="submit-wrapper">
									<button
										className="submit"
										disabled={
											this.state.status ===
											sendingStatus.SENDING
										}
									>
										Submit
									</button>
									{this.state.status ===
										sendingStatus.SENDING && (
										<img
											id="image-loader"
											alt="loader"
											src="images/loader.gif"
										/>
									)}
								</div>
							</fieldset>
						</form>
						{this.state.response && this.renderSubmitResponse()}
					</div>
				</div>
			</section>
		);
	}
}

export default Contact;

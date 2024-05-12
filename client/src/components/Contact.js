import React, { useState, useCallback } from "react";
import "./Contact.scss";
import { sendEmail } from "../apiResources/endpoints";
import { isEmailValid } from "../utilities/helpers";

const sendingStatus = {
  ERROR: "error",
  SENDING: "sending",
  SENT: "sent",
};

export const Contact = (props) => {
  const [fields, setFields] = useState({
    name: "",
    message: "",
    subject: "",
    email: "",
    status: "",
  });
  const [response, setResponse] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
      response: false,
    }));
  };

  const handleRequiredFields = useCallback(
    (fieldName) => {
      if (
        fields.status === sendingStatus.ERROR &&
        fields[fieldName].length === 0
      ) {
        return <span className="error"> * Required</span>;
      }
      return <span className="required"> *</span>;
    },
    [fields]
  );

  const allRequiredFieldsCompleted = useCallback(() => {
    const { name, email, message } = fields;
    return name.length > 0 && email.length > 0 && message.length > 0;
  }, [fields]);

  const getErrorMessage = useCallback(() => {
    let errorMessage = "";
    if (!allRequiredFieldsCompleted()) {
      errorMessage = "Please fill out all required fields and try again";
    } else if (!isEmailValid(fields.email)) {
      errorMessage = "Please enter a valid email address";
    } else {
      errorMessage = "Sorry, message was not sent, please try again";
    }

    return <div id="message-warning">{errorMessage}</div>;
  }, [fields, allRequiredFieldsCompleted]);

  const getSuccessResponse = useCallback(
    () => (
      <div id="message-success">
        <i className="fa fa-check"></i>Your message was sent, thank you!
      </div>
    ),
    []
  );

  const renderSubmitResponse = useCallback(() => {
    switch (fields.status) {
      case sendingStatus.ERROR:
        return getErrorMessage();
      case sendingStatus.SENT:
        return getSuccessEngineResponse();
      default:
        break;
    }
  }, [fields.status, getErrorMessage, getSuccessResponse]);

  const formSubmit = async (e) => {
    e.preventDefault();
    setFields((fields) => ({ ...fields, status: sendingStatus.SENDING }));
    setResponse(true);

    const { name, email, subject, message } = fields;

    if (allRequiredFieldsCompleted() && isEmailValid(email)) {
      try {
        const data = { name, email, subject, message };
        await sendEmail(data);
        setFields({
          name: "",
          message: "",
          subject: "",
          email: "",
          status: sendingStatus.SENT,
        });
      } catch (error) {
        setFields((fields) => ({ ...fields, status: sendingStatus.ERROR }));
      }
    } else {
      setFields((fields) => ({ ...fields, status: sendingStatus.ERROR }));
    }
  };

  const renderInputField = useCallback(
    (name, id, isRequired) => {
      const displayName = name.charAt(0).toUpperCase() + name.slice(1);
      return (
        <div>
          <label htmlFor={id}>
            {displayName}
            {isRequired && handleRequiredFields(name)}
          </label>
          <input
            type="text"
            size="35"
            id={id}
            name={name}
            onChange={handleChange}
            value={fields[name]}
          />
        </div>
      );
    },
    [fields, handleChange, handleRequiredFields]
  );

  const { data } = props;
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="three columns section-head__title">
          <h1>
            <span>Contact Me</span>
          </h1>
        </div>
        <div className="nine columns section-head__description">
          <p className="lead">{data && data[0].contactmessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="twelve columns">
          <form id="contactForm" name="contactForm" onSubmit={formSubmit}>
            <fieldset>
              {renderInputField("name", "contactName", true)}
              {renderInputField("email", "contactEmail", true)}
              {renderInputField("subject", "contactSubject", false)}
              <div>
                <label htmlFor="contactMessage">
                  Message
                  {handleRequiredFields("message")}
                </label>
                <textarea
                  cols="50"
                  rows="8"
                  id="contactMessage"
                  name="message"
                  onChange={handleChange}
                  value={fields.message}
                ></textarea>
              </div>
              <div className="submit-wrapper">
                <button
                  className="submit"
                  disabled={fields.status === sendingStatus.SENDING}
                >
                  Send
                </button>
                {fields.status === sendingStatus.SENDING && (
                  <img id="image-loader" alt="loader" src="images/loader.gif" />
                )}
              </div>
            </fieldset>
          </form>
          {response && renderSubmitResponse()}
        </div>
      </div>
    </section>
  );
};

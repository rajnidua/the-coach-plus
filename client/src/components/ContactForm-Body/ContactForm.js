import React, { useState } from "react";
import "../../styles/contact-form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import validator from "validator";

function ContactForm() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    setEmail(e.target.value);

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const removeValidationMsg = (e) => {
    setEmailError("");
  };

  const handleChangeFirst = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLast = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName} ${lastName}`);
    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>
              If you have skills to coach someone in any sport in the world that
              exists, We are here to convert your skills into your business. If
              you are a student looking for the best coach to train you and you
              have questions , We are here to help you!!
            </p>
            <div className="icons">
              <div className="row">
                <div className="icon-display">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Rajni Dua</div>
                </div>
              </div>

              <div className="row">
                <div className="icon-display">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">South Australia, Australia</div>
                </div>
              </div>

              <div className="row">
                <div className="icon-display">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">rajni.dua14@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form onSubmit={handleFormSubmit}>
              <div className="fields">
                <div className="field name">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleChangeFirst}
                    required
                  />
                </div>
                <div className="field name">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleChangeLast}
                    required
                  />
                </div>
              </div>

              <div className="field Email">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={validateEmail}
                  onBlur={removeValidationMsg}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={handleChangeSubject}
                  required
                />
              </div>

              <div className="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Message.."
                  value={message}
                  onChange={handleChangeMessage}
                  required
                ></textarea>
              </div>
              <div className="button">
                <button type="submit">Send message</button>
              </div>
              <div>{emailError}</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

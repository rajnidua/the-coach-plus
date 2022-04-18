import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_COACH } from "../../utils/mutations";
import "../../styles/signup.css";
import loginBgImage from "../../images/logIn-bg.jpg";
import Auth from "../../utils/auth.js";

function CoachSignup(props) {
  const [userFormData, setUserFormData] = useState({
    description: "",
    image: "",
    sport: "",
    groupSize: "",
    duration: "",
    fees: "",
    sessionStart: "",
    days: [],
    timeSlot: [],
  });

  // set state for form validation
  const [validated] = useState(false);

  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addCoach, { error }] = useMutation(ADD_COACH);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addCoach({
        variables: { input: { ...userFormData } },
      });

      Auth.login(data.addCoach.token);
    } catch (err) {
      console.error(error);
      setShowAlert(true);
    }

    setUserFormData({
      description: "",
      image: "",
      sport: "",
      groupSize: "",
      duration: "",
      fees: "",
      sessionStart: "",
      days: [],
      timeSlot: [],
    });
  };

  return (
    <div>
      <section className="log-in" id="log-in">
        <div className="max-width">
          <div className="box">
            <div className="image-col">
              <img src={loginBgImage} alt="" />
            </div>
            <div className="log-in-col">
              <h2>SIGNUP</h2>
              <form
                noValidate
                validated={validated}
                onSubmit={handleFormSubmit}
              >
                {/* show alert if server response is bad */}
                <Alert
                  dismissible
                  onClose={() => setShowAlert(false)}
                  show={showAlert}
                  variant="danger"
                >
                  Something went wrong with your signup!
                </Alert>

                <div className="feild username">
                  <input
                    type="text"
                    className="username-feild"
                    placeholder="description"
                    name="description"
                    onChange={handleInputChange}
                    value={userFormData.description}
                    required
                  />
                </div>

                <div className="feild Email">
                  <input
                    type="text"
                    className="email-feild"
                    placeholder="image"
                    name="image"
                    onChange={handleInputChange}
                    value={userFormData.image}
                    required
                  />
                </div>
                <div className="feild password">
                  <input
                    type="text"
                    className="password-feild"
                    placeholder="sport"
                    name="sport"
                    onChange={handleInputChange}
                    value={userFormData.sport}
                    required
                  />
                </div>

                <div className="field city">
                  <input
                    type="text"
                    placeholder="groupSize"
                    name="groupSize"
                    onChange={handleInputChange}
                    value={userFormData.groupSize}
                    required
                  />
                  <input
                    type="text"
                    placeholder="duration"
                    name="duration"
                    onChange={handleInputChange}
                    value={userFormData.duration}
                    required
                  />
                  <div class="city">
                    <input
                      type="text"
                      placeholder="fees"
                      name="fees"
                      onChange={handleInputChange}
                      value={userFormData.fees}
                      required
                    />
                    <input
                      type="text"
                      placeholder="sessionStart"
                      name="sessionStart"
                      onChange={handleInputChange}
                      value={userFormData.sessionStart}
                      required
                    />
                    <input
                      type="text"
                      placeholder="days"
                      name="days"
                      onChange={handleInputChange}
                      value={userFormData.days}
                      required
                    />
                    <input
                      type="text"
                      placeholder="time slots"
                      name="timeSlot"
                      onChange={handleInputChange}
                      value={userFormData.timeSlot}
                      required
                    />
                  </div>
                </div>

                <div className="button">
                  <button
                    disabled={
                      !(
                        userFormData.description &&
                        userFormData.image &&
                        userFormData.sport &&
                        userFormData.groupSize &&
                        userFormData.duration &&
                        userFormData.fees &&
                        userFormData.sessionStart &&
                        userFormData.days &&
                        userFormData.timeSlot
                      )
                    }
                    type="submit"
                    variant="success"
                  >
                    SignUp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoachSignup;

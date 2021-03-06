import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import "../../styles/signup.css";
import loginBgImage from "../../images/logIn-bg.jpg";
import Auth from "../../utils/auth.js";

import Axios from "axios";

function Body(props) {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
    houseNumber: "",
    streetName: "",
    city: "",
    postalCode: "",
    state: "",
    country: "",
  });

  //const [isCoach, setIsCoach] = useState(props.type);
  const isCoach = props.type;

  // set state for form validation
  const [validated] = useState(false);

  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { input: { ...userFormData, isCoach } },
      });

      Auth.login(data.addUser.token);
      // Send email confirmation
      const msg = {
        email: userFormData.email,
        from: "support@thecoachplus.com",
        subject: "Welcome to Coach+",
        message: "This email confirms your registration with CoachPlus.com",
      };

      await Axios.post("/send-email", msg)
        .then((res) => {
          if (res.data.success) {
            console.log("Email sent successfully");
          } else {
            console.log("Email sent failed");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.error(error);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
      houseNumber: "",
      streetName: "",
      city: "",
      postalCode: "",
      state: "",
      country: "",
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
                    placeholder="username"
                    name="username"
                    onChange={handleInputChange}
                    value={userFormData.username}
                    required
                  />
                </div>

                <div className="feild Email">
                  <input
                    type="text"
                    className="email-feild"
                    placeholder="email"
                    name="email"
                    onChange={handleInputChange}
                    value={userFormData.email}
                    required
                  />
                </div>
                <div className="feild password">
                  <input
                    type="password"
                    className="password-feild"
                    placeholder="password"
                    name="password"
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                  />
                </div>

                <div className="feild city">
                  <input
                    type="text"
                    placeholder="House Number"
                    className="username-feild"
                    name="houseNumber"
                    onChange={handleInputChange}
                    value={userFormData.houseNumber}
                    required
                  />
                </div>
                <div className="feild city">
                  <input
                    type="text"
                    placeholder="Street"
                    name="streetName"
                    onChange={handleInputChange}
                    value={userFormData.streetName}
                    required
                  />
                </div>

                <div className="feild city">
                  <input
                    type="text"
                    placeholder="City"
                    name="city"
                    onChange={handleInputChange}
                    value={userFormData.city}
                    required
                  />
                </div>
                <div className="feild city">
                  <input
                    type="text"
                    placeholder="State"
                    name="state"
                    onChange={handleInputChange}
                    value={userFormData.state}
                    required
                  />
                </div>
                <div className="feild city">
                  <input
                    type="text"
                    placeholder="Postal Code"
                    name="postalCode"
                    onChange={handleInputChange}
                    value={userFormData.postalCode}
                    required
                  />
                </div>
                <div className="feild city">
                  <input
                    type="text"
                    placeholder="Country"
                    name="country"
                    onChange={handleInputChange}
                    value={userFormData.country}
                    required
                  />
                </div>

                <div className="button">
                  <button
                    disabled={
                      !(
                        userFormData.username &&
                        userFormData.email &&
                        userFormData.password &&
                        userFormData.houseNumber &&
                        userFormData.streetName &&
                        userFormData.city &&
                        userFormData.postalCode &&
                        userFormData.state &&
                        userFormData.country
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

export default Body;

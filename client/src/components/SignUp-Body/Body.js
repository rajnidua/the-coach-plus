import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import "../../styles/signup.css";
import loginBgImage from "../../images/logIn-bg.jpg";
import Auth from "../../utils/auth.js";

function Body() {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isCoach, setIsCoach] = useState(true);

  // set state for form validation
  const [validated] = useState(false);

  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
    console.log(userFormData);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log("form check validity has failed");
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData, isCoach },
      });
      console.log(userFormData);
      console.log("signup data is: ");
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(error);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
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
                    type="text"
                    className="password-feild"
                    placeholder="password"
                    name="password"
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                  />
                </div>

                <div className="button">
                  <button
                    disabled={
                      !(
                        userFormData.username &&
                        userFormData.email &&
                        userFormData.password
                      )
                    }
                    type="submit"
                    variant="success"
                  >
                    SignUp
                  </button>
                </div>
              </form>
              <p>
                New to the app?
                <a href="https://www.google.com" className="sign-up-link">
                  Create an account
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;

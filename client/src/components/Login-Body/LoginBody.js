import React, { useState } from "react";
import { Alert } from "react-bootstrap";
// Import the `useMutation()` hook from Apollo Client
import { useMutation } from "@apollo/client";
//import { useMutation } from "@apollo/react-hooks";

//import { loginUser } from "../utils/API";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import "../../styles/login.css";
import loginBgImage from "../../images/logIn-bg.jpg";

import { Link } from "react-router-dom";

function LoginBody() {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  // Invoke `useMutation()` hook to return a Promise-based function and data about the LOGIN_USER mutation
  const [loginUser] = useMutation(LOGIN_USER);
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
    console.log("%%%%%%%%" + userFormData.email);
    console.log("%%%%%%%%" + userFormData.password);
    try {
      //putting data instead of response because we want data from response
      //response has one attribute on it named data
      const { data } = await loginUser({ variables: { ...userFormData } });
      console.log(data);
      //send the token to backend
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
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
                    disabled={!(userFormData.email && userFormData.password)}
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

export default LoginBody;

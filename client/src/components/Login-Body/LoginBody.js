import React from "react";
import "../../styles/login.css";
import loginBgImage from "../../images/logIn-bg.jpg";
import Auth from "../../utils/auth.js";
import { Link } from "react-router-dom";

function LoginBody() {
  const signupCoach = "coach";
  const signupStudent = "student";
  return (
    <div>
      <section className="log-in" id="log-in">
        <div className="max-width">
          <div className="box">
            <div className="image-col">
              <img src={loginBgImage} alt="" />
            </div>
            <div className="log-in-col">
              <h2>LOGIN</h2>
              <form action="submit">
                <div className="feild Email">
                  <input
                    type="text"
                    className="email-feild"
                    placeholder="email"
                  />
                </div>
                <div className="feild password">
                  <input
                    type="text"
                    className="password-feild"
                    placeholder="password"
                  />
                </div>
                <div className="button">
                  <button type="submit">Log In</button>
                </div>
              </form>
              <p>
                New to the app?
                <Link
                  to={{
                    pathname: "/SignUp",
                    state: true,
                  }}
                  className="btn"
                >
                  SignUp As a Coach
                </Link>
                <Link
                  to={{
                    pathname: "/SignUp",
                    state: false,
                  }}
                  className="btn"
                >
                  Signup As a Student
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginBody;

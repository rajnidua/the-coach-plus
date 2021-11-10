import React, { useState } from "react";
import "../../styles/navbar.css";
import { useHistory, useParams } from "react-router-dom";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth.js";

const NavBar = () => {
  const history = useHistory();
  const [userIsCoach, setUserIsCoach] = useState(false);
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  console.log("CHECK FOR COACH");
  console.log(user.isCoach);

  const checkForCoach = () => {
    // redirect to personal profile page if username is yours
    if (Auth.loggedIn()) {
      return setUserIsCoach(user.isCoach);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <Link to="/">
              Coach<span>+</span>
            </Link>
          </div>
          <ul className="menu">
            <li>
              <a href="#" className="menu-btn">
                Find-A-Coach
              </a>
            </li>
            <li>
              <a href="#" className="menu-btn">
                Sports
              </a>
            </li>
            <li>
              <a href="#" className="menu-btn">
                About
              </a>
            </li>
            <li>
              <a href="#" className="menu-btn">
                Demos
              </a>
            </li>
            <li>
              <a href="#" className="menu-btn">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="menu-btn">
                Your Coach Account
              </a>
            </li>

            {Auth.loggedIn() && { checkForCoach } ? (
              <>
                <li>
                  <Link to="/CoachProfile" className="menu-btn btn log-in-nav">
                    Coach Profile
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}

            {Auth.loggedIn() ? (
              <>
                <li>
                  <Link to="/StuDashboard" className="menu-btn btn log-in-nav">
                    Student Dashboard
                  </Link>
                </li>
                <li>
                  <Link onClick={Auth.logout}>Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/Login" className="menu-btn btn log-in-nav">
                    LogIn
                  </Link>
                </li>
              </>
            )}

            {/*  {Auth.loggedIn() ? ( 
              <>
                <li>
                  <Link to="/StuDashboard" className="menu-btn btn log-in-nav">
                    Student Dashboard
                  </Link>
                </li>
                <li>
                  <Link onClick={Auth.logout}>Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/Login" className="menu-btn btn log-in-nav">
                    LogIn
                  </Link>
                </li>
              </>
            )} */}

            {/* <li>
              <Link to="/Login" className="menu-btn btn log-in-nav">
                LogIn
              </Link>
            </li> */}
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

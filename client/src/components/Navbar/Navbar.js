import React from "react";
import "../../styles/navbar.css";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth.js";

const NavBar = () => {
  const history = useHistory();
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

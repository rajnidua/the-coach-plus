import React, { useEffect, useState } from "react";
import "../../styles/navbar.css";
import { useHistory, useParams } from "react-router-dom";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [userIsCoach, setUserIsCoach] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const history = useHistory();

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  console.log("CHECK FOR COACH");

  console.log("The value of userIsCoach is ");
  console.log(userIsCoach);

  useEffect(() => {
    console.log("running the use effect");
    const user = data?.me || data?.user || {};
    setUserIsCoach(user.isCoach);
  }, [data]);

  return (
    <nav className="navbar">
      <div className="max-width">
        <div className="logo">
          <Link to="/">
            T<span>he</span>Coach<span>+</span>
          </Link>
        </div>
        <ul className={click ? "menu active" : "menu"}>
          {/*  {Auth.loggedIn() ? (
              <>
                <li>
                  <Link to="/FindACoach" className="menu-btn">
                    Find-A-Coach
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={Auth.logout}
                    className="menu-btn btn log-in-nav"
                  >
                    Logout
                  </Link>
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
          {/* <li>
              <a href="#" className="menu-btn">
                Your Coach Account
              </a>
            </li> */}

          {Auth.loggedIn() && userIsCoach ? (
            <>
              <li>
                <Link to="/CoachProfile" className="menu-btn">
                  Coach profile
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}

          {/*  {Auth.loggedIn() ? (
              <>
                <li>
                  <Link to="/StuDashboard" className="menu-btn">
                    Student Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={Auth.logout}
                    className="menu-btn btn log-in-nav"
                  >
                    Logout
                  </Link>
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

          {Auth.loggedIn() ? (
            <>
              <li>
                <Link to="/FindACoach" className="menu-btn">
                  Find-A-Coach
                </Link>
              </li>
              <li>
                <Link to="/StuDashboard" className="menu-btn">
                  Student Dashboard
                </Link>
              </li>
              <li>
                <Link to="/NavCart" className="menu-btn">
                  Cart
                </Link>
              </li>

              <li>
                <Link onClick={Auth.logout} className="menu-btn btn log-in-nav">
                  Logout
                </Link>
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
        </ul>

        <div className="menu-btn" onClick={handleClick}>
          {click ? (
            <FontAwesomeIcon icon={faWindowClose} className="menu-btn" />
          ) : (
            // <MenuIcon className="menu-icon" />
            <FontAwesomeIcon icon={faBars} className="menu-btn" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

//<li>Not a Coach {userIsCoach}</li>;

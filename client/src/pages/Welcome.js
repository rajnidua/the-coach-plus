import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Body from "../components/Welcome-Body/Body";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <NavBar />

      {/*  <Link to="/Login" className="menu-btn btn log-in-nav">
        LogIn
      </Link>
 */}

      {/*   {Auth.loggedIn() ? (
        <>
          <Link to="/StudentDashboard">Student Dashboard</Link>
          <Link onClick={Auth.logout}>Logout</Link>
        </>
      ) : (
        <Link onClick={() => setShowModal(true)}>Login/Sign Up</Link>
      )} */}

      {/* {Auth.loggedIn() ? (
        <>
          <Nav.Link as={Link} to="/saved">
            See Your Books
          </Nav.Link>
          <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
        </>
      ) : (
        <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
      )} */}
      <Body />
      <Footer />
    </div>
  );
}

export default Welcome;

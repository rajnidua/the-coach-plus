import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Body from "../components/Welcome-Body/Body";
import Footer from "../components/Footer/Footer";
//import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <NavBar />

      <Body />
      <Footer />
    </div>
  );
}

export default Welcome;

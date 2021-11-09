import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Body from "../components/Coach-Signup/CoachSignup.js";
import Footer from "../components/Footer/Footer";
import SignUpBody from "../components/SignUp-Body/Body.js";
function CoachSignUp() {
  /* console.log("props value is " + props + "role is" + props.location.state);
  console.log(props); */

  return (
    <div>
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}

export default SignUp;

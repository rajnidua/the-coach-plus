import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Body from "../components/SignUp-Body/Body.js";
import Footer from "../components/Footer/Footer";
import LoginBody from "../components/Login-Body/LoginBody.js";
function SignUp(props) {
  console.log("props value is " + props + "role is" + props.location.state);
  console.log(props);

  return (
    <div>
      <NavBar />
      <Body type={props.location.state} />
      <Footer />
    </div>
  );
}

export default SignUp;

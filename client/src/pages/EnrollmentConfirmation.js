import React from "react";
import NavBar from "../components/Navbar/Navbar";
import CoachProfile from "../components/Coach-Profile/CoachProfile";
import EnrollmentConfirmation from "../components/Enrollment-Confirmation/EnrollmentBody";
import Footer from "../components/Footer/Footer";

function EnrollmentDashboardPage(props) {
  console.log("Props from the coach profile page ", props.location.state[0]);
  return (
    <div>
      <NavBar />
      <EnrollmentConfirmation coach={props.location.state[0]} />

      <Footer />
    </div>
  );
}

export default EnrollmentDashboardPage;

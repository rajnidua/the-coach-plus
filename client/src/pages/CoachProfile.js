import React from "react";
import NavBar from "../components/Navbar/Navbar";
import CoachProfile from "../components/Coach-Profile/CoachProfile";
import Footer from "../components/Footer/Footer";

function CoachDashboardPage(props) {
  console.log("Props from the coach profile page ", props.location.state[0]);
  return (
    <div>
      <NavBar />
      <CoachProfile coach={props.location.state[0]} />
      <Footer />
    </div>
  );
}

export default CoachDashboardPage;

import React from "react";
import NavBar from "../components/Navbar/Navbar";
import CoachProfile from "../components/Coach-Profile/CoachProfile";
import Footer from "../components/Footer/Footer";

function StudentDashboardPage() {
  return (
    <div>
      <NavBar />
      <CoachProfile />
      <Footer />
    </div>
  );
}

export default StudentDashboardPage;

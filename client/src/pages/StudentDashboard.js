import React from "react";
import NavBar from "../components/Navbar/Navbar";
import StudentDashboard from "../components/Student-Dashboard/Student-Dashboard";
import Footer from "../components/Footer/Footer";

function StudentDashboardPage() {
  return (
    <div>
      <NavBar />
      <StudentDashboard />
      <Footer />
    </div>
  );
}

export default StudentDashboardPage;

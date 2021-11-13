import React from "react";
import { createTheme, ThemeProvider, Button } from "@material-ui/core";
import homePageImage from "../../images/homePage-bg.jpg";
//import TypeWriterEffect from "react-typewriter-effect";
import "../../styles/enrollment-confirmation.css";

function EnrollmentConfirmation(props) {
  console.log("FINAL PROPS RECIEVED ", props);

  return (
    <section className="main-section">
      <main>
        <aside>
          <h4>YOUR ENROLLMENT IS CONFIRMED!</h4>

          <div className="sample-img">
            <img src={homePageImage} alt="" />
          </div>
          <p></p>
        </aside>

        <section>
          <ul>
            <li>Your Coach Name : {props.coach.coach.coachname}</li>
            <li>Session Start Date : {props.coach.coach.sessionStart}</li>

            <li>Session Start Time : {props.coach.formState.value}</li>
            <li>Day : {props.coach.formStateDay.dayValue}</li>
            <li>Class Size : {props.coach.coach.groupSize}</li>
            <li>Session Length : {props.coach.coach.duration}</li>
            <li>ADDRESS : {props.coach.coach.venuePostalCode}</li>
          </ul>
        </section>
      </main>
    </section>
  );
}

export default EnrollmentConfirmation;

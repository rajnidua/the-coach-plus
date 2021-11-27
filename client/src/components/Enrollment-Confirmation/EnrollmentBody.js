import React, { useState } from "react";
import { createTheme, ThemeProvider, Button } from "@material-ui/core";
import homePageImage from "../../images/homePage-bg.jpg";
//import TypeWriterEffect from "react-typewriter-effect";
import "../../styles/enrollment-confirmation.css";
import { useMutation } from "@apollo/client";
import { PROGRAMS_ENROLLED } from "../../utils/mutations";
import Auth from "../../utils/auth.js";
import { Link } from "react-router-dom";

function EnrollmentConfirmation(props) {
  console.log("FINAL PROPS RECIEVED ", props);
  console.log("FINAL PROPS RECIEVED ", props.coach.coach.coachname);

  const [confirmed, setConfirmed] = useState(false);

  const [proEnrolState, setproEnrolState] = useState({
    coachname: props.coach.coach.coachname,
    sessionStartDate: props.coach.coach.sessionStart,
    classTime: props.coach.formState.value,
    classDay: props.coach.formStateDay.dayValue,
    sportName: props.coach.coach.sport,
  });

  console.log("Enrollment Details%%%%%%", proEnrolState);
  const [addProgramsEnrolled, { error, data }] = useMutation(PROGRAMS_ENROLLED);

  const handleEnrol = async (event) => {
    event.preventDefault();
    console.log(event.target);

    try {
      const { data } = await addProgramsEnrolled({
        variables: { input: { ...proEnrolState } },
      });

      console.log("VALUE OF ENROLMENT DATA ", data);
      setConfirmed(true);

      //Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setproEnrolState({
      coachname: "",
      sessionStartDate: "",
      classTime: "",
      classDay: "",
      sportName: "",
    });
  };

  return (
    <section className="main-section">
      <main>
        <aside>
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
            {confirmed ? <h1>Your Enrollment is Confirmed</h1> : ""}

            <button
              onClick={handleEnrol}
              className={confirmed ? "enrolBtn not-active" : "enrolBtn"}
            >
              Confirm enrollment
            </button>
            <Link
              to={{
                pathname: "/CheckoutDetail",

                state: [props],
              }}
            >
              Go To Checkout
            </Link>
          </ul>
        </section>
      </main>
    </section>
  );
}

export default EnrollmentConfirmation;

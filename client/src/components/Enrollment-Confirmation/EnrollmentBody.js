import React, { useState } from "react";

import homePageImage from "../../images/homePage-bg.jpg";

import "../../styles/enrollment-confirmation.css";
import { useMutation } from "@apollo/client";
import { PROGRAMS_ENROLLED } from "../../utils/mutations";

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
    fees: props.coach.coach.fees,
  });

  //const [addProgramsEnrolled, { error, data }] = useMutation(PROGRAMS_ENROLLED);
  const [addProgramsEnrolled] = useMutation(PROGRAMS_ENROLLED);

  const handleEnrol = async (event) => {
    event.preventDefault();
    console.log(event.target);

    try {
      const { data } = await addProgramsEnrolled({
        variables: { input: { ...proEnrolState } },
      });

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
      fees: "",
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
            {confirmed ? (
              <h1>
                This Program has been added to the Cart and your Dashboard
              </h1>
            ) : (
              ""
            )}

            <button
              onClick={handleEnrol}
              className={confirmed ? "enrolBtn not-active" : "enrolBtn"}
            >
              Add to Cart
            </button>
            <Link
              to={{
                pathname: "/Cart",

                state: [props],
              }}
            >
              View Cart
            </Link>
          </ul>
        </section>
      </main>
    </section>
  );
}

export default EnrollmentConfirmation;

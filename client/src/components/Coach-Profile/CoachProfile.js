import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";

import "../../styles/coach-profile.css";
import CoachImage from "../../images/1.jpg";
import { Link } from "react-router-dom";

function CoachProfile(props) {
  const [formState, setFormState] = useState({ value: "" });
  const [formStateDay, setFormStateDay] = useState({ dayValue: "" });
  const [newProps, setNewProps] = useState([{ props }]);

  const { username: userParam } = useParams();

  // const { loading: userLoading, data: userData } = useQuery(
  //   userParam ? QUERY_USER : QUERY_ME,
  //   {
  //     variables: { username: userParam },
  //   }
  // );

  const { data: userData } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = userData?.me || userData?.user || {};

  const handleChangeTimeSlot = (e) => {
    const value = e.target.value;

    setFormState({ value: value });
  };

  const handleChangeDay = (e) => {
    const value = e.target.value;

    setFormStateDay({ dayValue: value });
  };

  useEffect(() => {
    setNewProps({ ...props, formState, formStateDay, user });
  }, [formState, formStateDay, user, props]);

  return (
    <div>
      <section className="section-gen-info">
        <div className="max-width">
          <div className="coach-pic">
            <img src={CoachImage} alt="" />

            <p>Certified</p>
          </div>
          <div className="coach-descp">
            <div className="selected-sport">{props.coach.sport}</div>

            <p>
              Hi, My name is {props.coach.coachname}. I am{" "}
              {props.coach.description}
            </p>
            <div className="imp-info-wrapper">
              <h3 className="imp-info">FEE : {props.coach.fees}</h3>
              <h3 className="imp-info">
                Location : {props.coach.venuePostalCode}
              </h3>
              <h3 className="imp-info">
                Start Date : {props.coach.sessionStart}
              </h3>
            </div>
          </div>
          <div className="coach-rev">
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <a href="/">45 Reviews</a>
            <div className="coach-sp-sport">
              <a href="/">
                <div className="coach-sport cricket">Cricket</div>
              </a>
              <a href="/">
                <div className="coach-sport baseball">Baseball</div>
              </a>
              <a href="/">
                <div className="coach-sport soccer">Soccer</div>
              </a>
              <a href="/">
                <div className="coach-sport football">Football</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-schedule">
        <div className="max-width">
          <div className="calender">
            <h2>Choose Day</h2>
            <select onChange={handleChangeDay}>
              {props.coach.days.map((dayName) => (
                <option value={dayName.dayValue}>{dayName.dayValue}</option>
              ))}
            </select>
          </div>
          <div className="calender">
            <h2>Choose Time</h2>

            <select onChange={handleChangeTimeSlot}>
              {props.coach.timeSlot.map((number) => (
                <option value={number.slotValue}>{number.slotValue}</option>
              ))}
            </select>
          </div>
          <div className="buttons ">
            <Link
              to={{
                pathname: "/EnrollmentConfirmation",
                state: [newProps],
              }}
              className="btn"
            >
              Enroll
            </Link>

            {/* <a href="#" className="btn">
              Enroll
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoachProfile;

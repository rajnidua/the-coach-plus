import React, { useState } from "react";
import "../../styles/coach-profile.css";
import CoachImage from "../../images/1.jpg";
import { Link } from "react-router-dom";

function CoachProfile(props) {
  const [formState, setFormState] = useState({ value: "" });
  const [formStateDay, setFormStateDay] = useState({ dayValue: "" });
  console.log("props is ", props);
  console.log("props is ", props.coach.days[0]);

  const handleChangeTimeSlot = (e) => {
    const value = e.target.value;

    console.log("event is " + e.target.value);

    setFormState({ value: value });
  };

  const handleChangeDay = (e) => {
    const value = e.target.value;

    console.log("event is " + e.target.value);

    setFormStateDay({ dayValue: value });
  };

  return (
    <div>
      <section className="section-gen-info">
        <div className="max-width">
          <div className="coach-pic">
            <img src={CoachImage} alt="" />
            <div className="coach-name">{props.coach.coachname}</div>
            <p>Certified</p>
          </div>
          <div className="coach-descp">
            <div className="selected-sport">{props.coach.sport}</div>

            <p>{props.coach.description}</p>
          </div>
          <div className="coach-rev">
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <a href="#">45 Reviews</a>
            <div className="coach-sp-sport">
              <a href="#">
                <div className="coach-sport cricket">Cricket</div>
              </a>
              <a href="#">
                <div className="coach-sport baseball">Baseball</div>
              </a>
              <a href="#">
                <div className="coach-sport soccer">Soccer</div>
              </a>
              <a href="#">
                <div className="coach-sport football">Football</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-schedule">
        <div className="max-width">
          <div className="calender">
            <h2>Choose Date</h2>
            <select onChange={handleChangeDay}>
              {props.coach.days.map((dayName) => (
                <option value={dayName.dayValue}>{dayName.dayValue}</option>
              ))}
            </select>
          </div>
          <div className="time-slots">
            <h2>Choose Time</h2>

            <select onChange={handleChangeTimeSlot}>
              {props.coach.timeSlot.map((number) => (
                <option value={number.slotValue}>{number.slotValue}</option>
              ))}
            </select>
          </div>
          <div className="buttons">
            <a href="#" className="btn">
              Enroll
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoachProfile;

import React, { useState } from "react";
import "../../styles/student-dashboard.css";
import CoachImage from "../../images/1.jpg";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_COACHES } from "../../utils/queries";

function StudentDashboard() {
  const [checkedSwimming, setCheckedSwimming] = useState(false);
  const [checkedTennis, setCheckedTennis] = useState(false);

  //const { loading, data } = useQuery(QUERY_COACHES);
  const answer = useQuery(QUERY_COACHES);
  console.log(answer);
  //console.log(data[1]);
  /* const coachDetail = answer.data.map((coach) => {
    const coachId = coach._id;
  }); */

  const handleChangeSwimming = () => {
    setCheckedSwimming(!checkedSwimming);
    console.log("checked swimming is ");
    console.log(checkedSwimming);
  };

  const handleChangeTennis = () => {
    setCheckedTennis(!checkedTennis);
    console.log("checked swimming is ");
    console.log(checkedTennis);
  };

  return (
    <div>
      <section className="coach-cards" id="coach-cards">
        <div className="max-width">
          <div className="filters-calender">
            <div className="location-container">
              <h4>Your PostCode : </h4>
            </div>

            <div className="slidecontainer">
              <p>
                Radius: <span id="demo"></span>
              </p>
            </div>
            <div className="checkbox-container">
              <h3>Filters</h3>
              <div>
                <label for="Swimming">Swimming</label>
                <input
                  type="checkbox"
                  label="Value 1"
                  name="Swimming"
                  value={checkedSwimming}
                  onChange={handleChangeSwimming}
                />
                <label for="Tennis">Tennis</label>
                <input
                  type="checkbox"
                  label="Value 2"
                  name="Tennis"
                  value={checkedTennis}
                  onChange={handleChangeTennis}
                />
              </div>
            </div>
          </div>
          {/* <div className="coach-columns">
            <div className="coach-row">
              <div className="coach-profile-col">
                <a href="#">
                  <img src={CoachImage} alt="" />
                </a>
                <p>Certified</p>
              </div>
              <div className="coach-description-col">
                <a href="#">
                  <h4>John Smith</h4>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam dolorem illum iste magnam, esse voluptas!
                </p>
              </div>
              <div className="coach-review-col">
                <div className="stars">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                </div>
                <a href="#">45 Reviews</a>
                <Link to="" className="enroll-btn btn">
                  Enroll
                </Link>
              </div>
            </div>

            <div className="coach-row">
              <div className="coach-profile-col">
                <a href="#">
                  <img src={CoachImage} alt="" />
                </a>
                <p>Certified</p>
              </div>
              <div className="coach-description-col">
                <a href="#">
                  <h4>John Smith</h4>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam dolorem illum iste magnam, esse voluptas!
                </p>
              </div>
              <div className="coach-review-col">
                <div className="stars">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                </div>
                <a href="#">45 Reviews</a>
                <a href="#" className="enroll-btn btn">
                  Enroll
                </a>
              </div>
            </div>

            <div className="coach-row">
              <div className="coach-profile-col">
                <a href="#">
                  <img src={CoachImage} alt="" />
                </a>
                <p>Certified</p>
              </div>
              <div className="coach-description-col">
                <a href="#">
                  <h4>John Smith</h4>
                </a>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam dolorem illum iste magnam, esse voluptas!
                </p>
              </div>
              <div className="coach-review-col">
                <div className="stars">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star-half"></i>
                </div>
                <a href="#">45 Reviews</a>
                <a href="#" className="enroll-btn btn">
                  Enroll
                </a>
              </div>
            </div>
          </div>*/}
        </div>
      </section>
    </div>
  );
}

export default StudentDashboard;

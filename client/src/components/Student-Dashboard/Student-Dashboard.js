import React from "react";
import "../../styles/student-dashboard.css";
import CoachImage from "../../images/1.jpg";
import { Link } from "react-router-dom";

function StudentDashboard() {
  return (
    <div>
      <section className="coach-cards" id="coach-cards">
        <div className="max-width">
          <div className="filters-calender">
            <div className="location-container">
              <input type="text" value="5000" />
              <a href="#">Change</a>
            </div>
            <div className="sport-container">
              <input type="text" value="Swimming" />
              <a href="#">Change</a>
            </div>
            <div className="slidecontainer">
              <h3>Search Radius</h3>
              <input
                type="range"
                min="0"
                max="20"
                value="0"
                className="slider"
                id="myRange"
              />
              <p>
                Radius: <span id="demo"></span>
              </p>
            </div>
            <div className="checkbox-container">
              <h3>Filters</h3>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="swimming"
                    name="swimming"
                    value="Swimming"
                  />
                  <label for="swimming">Swimming</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="karate"
                    name="karate"
                    value="Karate"
                  />
                  <label for="karate">Karate</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="dance"
                    name="dance"
                    value="Dance"
                  />
                  <label for="dance">Dance</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="tennis"
                    name="tennis"
                    value="Tennis"
                  />
                  <label for="tennis">Tennis</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="basketball"
                    name="basketball"
                    value="Basketball"
                  />
                  <label for="basketball">Basketball</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="football"
                    name="football"
                    value="Football"
                  />
                  <label for="football">Football</label>
                </li>

                <li>
                  <input
                    type="checkbox"
                    id="soccer"
                    name="soccer"
                    value="Soccer"
                  />
                  <label for="soccer">Soccer</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="coach-columns">
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default StudentDashboard;

import React, { useState } from "react";
import "../../styles/student-dashboard.css";
import CoachImage from "../../images/1.jpg";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_COACHES } from "../../utils/queries";

function StudentDashboard() {
  /* const [checkedSwimming, setCheckedSwimming] = useState(false);
  const [checkedTennis, setCheckedTennis] = useState(false); */
  const [formState, setFormState] = useState({
    swimming: false,
    basketball: false,
    tennis: false,
    soccer: false,
  });
  try {
    const coachesList = useQuery(QUERY_COACHES);
    console.log(coachesList.data.coaches);
    console.log(coachesList.data.coaches[0].coachname);
  } catch (err) {
    console.error(err);
  }

  console.log("value of swimming outside: " + formState.swimming);
  console.log("value of tennis outside: " + formState.tennis);
  console.log("value of basketball outside: " + formState.basketball);
  console.log("value of soccer outside: " + formState.soccer);
  console.log("===========================================================");
  const handleClick = (event) => {
    const name = event.target.name;
    console.log(name);
    const checked = event.target.checked;
    console.log("event target value is " + event.target.checked);
    console.log("value is" + checked);

    setFormState({
      ...formState,
      [name]: checked,
    });
  };

  /* const handleChangeSwimming = () => {
    setCheckedSwimming(!checkedSwimming);
    console.log("checked swimming is ");
    console.log(checkedSwimming);
  };

  const handleChangeTennis = () => {
    setCheckedTennis(!checkedTennis);
    console.log("checked swimming is ");
    console.log(checkedTennis);
  }; */

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
                <div className="feild Swimming">
                  <label for="swimming">Swimming</label>
                  <input
                    type="checkbox"
                    className="swimming-feild"
                    name="swimming"
                    checked={formState.swimming}
                    onClick={handleClick}
                  />
                  <p>{formState.swimming ? "YES" : "NO"}</p>
                </div>
                <div className="feild Tennis">
                  <label for="tennis">Tennis</label>
                  <input
                    type="checkbox"
                    className="tennis-feild"
                    name="tennis"
                    checked={formState.tennis}
                    onClick={handleClick}
                  />
                  <p>{formState.tennis ? "YES" : "NO"}</p>
                </div>
                <div className="feild Basketball">
                  <label for="basketball">Basketball</label>
                  <input
                    type="checkbox"
                    className="basketball-feild"
                    name="basketball"
                    checked={formState.basketball}
                    onClick={handleClick}
                  />
                  <p>{formState.basketball ? "YES" : "NO"}</p>
                </div>
                <div className="feild Soccer">
                  <label for="soccer">Soccer</label>
                  <input
                    type="checkbox"
                    className="soccer-feild"
                    name="soccer"
                    checked={formState.soccer}
                    onClick={handleClick}
                  />
                  <p>{formState.soccer ? "YES" : "NO"}</p>
                </div>
                {/* <div className="feild Basketball">
                  <label for="basketball">Basketball</label>
                  <input
                    type="checkbox"
                    className="basketball-feild"
                    name="basketball"
                    value={formState.basketball}
                    onChange={handleChange}
                  />
                </div> */}
                {/* <div className="feild Soccer">
                  <label for="soccer">Soccer</label>
                  <input
                    type="checkbox"
                    className="soccer-feild"
                    name="soccer"
                    value={formState.soccer}
                    onChange={handleChange}
                  />
                </div> */}

                {/* <label for="Swimming">Swimming</label>
                <input
                  type="checkbox"
                  label="Value 1"
                  name="Swimming"
                  value={checkedSwimming}
                  onChange={handleChangeSwimming}
                />
                <h1>value here {checkedSwimming}</h1>
                <label for="Tennis">Tennis</label>
                <input
                  type="checkbox"
                  label="Value 2"
                  name="Tennis"
                  value={checkedTennis}
                  onChange={handleChangeTennis}
                /> */}
              </div>
            </div>
          </div>
          <div className="coach-columns"></div>
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

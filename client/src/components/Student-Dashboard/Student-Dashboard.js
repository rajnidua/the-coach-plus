import React, { useEffect, useState } from "react";
import "../../styles/student-dashboard.css";
import CoachImage from "../../images/1.jpg";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_COACHES } from "../../utils/queries";

function StudentDashboard() {
  //const [coachesList, setCoachesList] = useState([]);
  const [formState, setFormState] = useState({
    swimming: false,
    basketball: false,
    tennis: false,
    soccer: false,
  });
  /* try {
    const coachesList = useQuery(QUERY_COACHES);
    console.log(coachesList.data.coaches);
    console.log(coachesList.data.coaches);
    setCoachesList([coachesList.data.coaches]);
  } catch (err) {
    console.error(err);
  } */

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

  /* const { loading, data } = useQuery(QUERY_COACHES);
  console.log(data);
  console.log("value of coaches list outside is:  ");

  useEffect(() => {
    try {
      
      console.log("useEffect is running");
      console.log(data);
      setCoachesList([data.coaches]);
    } catch (err) {
      console.error(err);
    }
  }, [formState]); */

  const { loading, data } = useQuery(QUERY_COACHES);

  const coachesList = data?.coaches || [];
  console.log(coachesList);

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
              </div>
            </div>
          </div>
          {/* <div className="coach-columns">
            {coachesList.map((coach) => (
              <div key={coach._id}>
                <h1>{coach.coachname}</h1>
              </div>
            ))}
          </div> */}

          <div className="coach-columns">
            <h2>Here is a list of coaches you can enrol with:</h2>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div>
                {coachesList.map((coach) => {
                  return (
                    <div className="coach-row" key={coach._id}>
                      <h3>{coach.coachname}</h3>
                      <h3>{coach.sport}</h3>
                      <h3>{coach.fees}</h3>
                    </div>
                  );
                })}
              </div>
            )}
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

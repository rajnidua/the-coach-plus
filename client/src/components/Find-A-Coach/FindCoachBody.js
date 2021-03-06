import React, { useState } from "react";
import "../../styles/student-dashboard.css";

import CoachImage from "../../images/1.jpg";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_COACHES } from "../../utils/queries";

function FindCoachBody() {
  const [formState, setFormState] = useState([
    { sportName: "Swimming", checkValue: false, id: 0 },
    { sportName: "Basketball", checkValue: false, id: 1 },

    { sportName: "Tennis", checkValue: false, id: 2 },
    { sportName: "Soccer", checkValue: false, id: 3 },
  ]);

  //const { username: userParam } = useParams();

  // const { loading: userLoading, data: userData } = useQuery(
  //   userParam ? QUERY_USER : QUERY_ME,
  //   {
  //     variables: { username: userParam },
  //   }
  // );
  // const { data: userData } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam },
  // });

  //const user = userData?.me || userData?.user || {};

  const handleClick = (event) => {
    const name = event.target.name;

    const checked = event.target.checked;

    if (name === "Swimming") {
      setFormState([
        { sportName: "Swimming", checkValue: checked, id: 0 },

        formState[1],
        formState[2],
        formState[3],
      ]);
    }

    if (name === "Basketball") {
      setFormState([
        formState[0],
        { sportName: "Basketball", checkValue: checked, id: 1 },

        formState[2],
        formState[3],
      ]);
    }

    if (name === "Tennis") {
      setFormState([
        formState[0],
        formState[1],
        { sportName: "Tennis", checkValue: checked, id: 2 },

        formState[3],
      ]);
    }

    if (name === "Soccer") {
      setFormState([
        formState[0],
        formState[1],
        formState[2],
        { sportName: "Soccer", checkValue: checked, id: 3 },
      ]);
    }
  };

  const { loading, data } = useQuery(QUERY_COACHES);

  const coachesList = data?.coaches || [];

  return (
    <section className="coach-cards" id="coach-cards">
      <div className="max-width-stuDashboard">
        <div className="filters-calender">
          <div className="checkbox-container">
            <div className="feild Swimming">
              <label for="swimming">Swimming</label>
              <input
                type="checkbox"
                className="swimming-feild"
                name={formState[0].sportName}
                checked={formState[0].checkValue}
                onClick={handleClick}
              />
            </div>
            <div className="feild Basketball">
              <label for="basketball">Basketball</label>
              <input
                type="checkbox"
                className="basketball-feild"
                name={formState[1].sportName}
                checked={formState[1].checkValue}
                onClick={handleClick}
              />
            </div>

            <div className="feild Tennis">
              <label for="tennis">Tennis</label>
              <input
                type="checkbox"
                className="tennis-feild"
                name={formState[2].sportName}
                checked={formState[2].checkValue}
                onClick={handleClick}
              />
            </div>

            <div className="feild Soccer">
              <label for="soccer">Soccer</label>
              <input
                type="checkbox"
                className="soccer-feild"
                name={formState[3].sportName}
                checked={formState[3].checkValue}
                onClick={handleClick}
              />
            </div>
          </div>
        </div>

        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="coach-columns">
              {formState.map((selectedSport) =>
                selectedSport.checkValue ? (
                  <div>
                    {coachesList.map((selectedCoach) => (
                      <div>
                        {selectedSport.sportName === selectedCoach.sport ? (
                          <div>
                            <div className="coach-row">
                              <div className="coach-profile-col">
                                <img src={CoachImage} alt="" />

                                <p>Certified</p>
                              </div>
                              <div className="coach-description-col">
                                <h4>{selectedCoach.sport}</h4>
                                <h4>{selectedCoach.coachname}</h4>

                                <ul>
                                  <li>
                                    Session starts on :
                                    {selectedCoach.sessionStart}
                                  </li>
                                  <li>Class Size: {selectedCoach.groupSize}</li>
                                </ul>
                              </div>
                              <div className="coach-review-col">
                                <div className="stars">
                                  <i className="bx bxs-star"></i>
                                  <i className="bx bxs-star"></i>
                                  <i className="bx bxs-star"></i>
                                  <i className="bx bxs-star"></i>
                                  <i className="bx bxs-star-half"></i>
                                </div>
                                <a href="/">45 Reviews</a>

                                <Link
                                  to={{
                                    pathname: "/CoachProfile",
                                    state: [selectedCoach],
                                  }}
                                  className="btn"
                                >
                                  Enroll
                                </Link>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div></div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FindCoachBody;

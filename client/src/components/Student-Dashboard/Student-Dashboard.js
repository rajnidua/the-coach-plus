import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import "../../styles/student-dashboard-page.css";
import DashboardImage from "../../images/logIn-bg.jpg";

function StudentDashboard() {
  const { username: userParam } = useParams();

  const { loading: userLoading, data: userData } = useQuery(
    userParam ? QUERY_USER : QUERY_ME,
    {
      variables: { username: userParam },
    }
  );

  const user = userData?.me || userData?.user || {};

  return (
    <section className="coach-cards">
      <div className="max-width-stuDashboard">
        {userLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="coach-columns-2">
            {user.programsEnrolled.map((program) => (
              <div className="coach-row-2">
                <div className="coach-profile-col-2">
                  <img src={DashboardImage} alt="" />
                </div>
                <div className="coach-description-col">
                  <ul>
                    <li>Sport :{program.sportName}</li>
                    <li>Coachname : {program.coachname}</li>
                    <li>Session starts on :{program.classTime}</li>
                    <li>Class Size: {program.classDay}</li>
                    <li>Start Date: {program.sessionStartDate}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default StudentDashboard;

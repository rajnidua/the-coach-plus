import React from "react";
import "../../styles/coach-profile.css";
import CoachImage from "../../images/1.jpg";
import { Link } from "react-router-dom";

function CoachProfile() {
  return (
    <div>
      <section className="section-gen-info">
        <div className="max-width">
          <div className="coach-pic">
            <img src={CoachImage} alt="" />
            <div className="coach-name">John Smith</div>
            <p>Certified</p>
          </div>
          <div className="coach-descp">
            <div className="selected-sport">Swimming</div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam,
              iste! Minima tempore aperiam alias possimus, repellat a magni
              rerum, aliquam, incidunt et laborum. Cum, quasi? Temporibus
              corrupti iure vero quia. Nisi magni perspiciatis eligendi natus
              doloremque excepturi saepe quae incidunt unde iure eius odio
              fugit, ipsam harum, animi sunt quo nesciunt. Repellendus at culpa
              voluptas maiores nihil neque aperiam consequuntur.
            </p>
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
            <iframe
              src="https://calendar.google.com/calendar/embed?height=300&wkst=1&bgcolor=%23fe7c31&ctz=Australia%2FEucla&showPrint=0&showTz=0&showTitle=0&showTabs=0&showNav=1&src=YXRhZGlxcmViY3ZhaTRkOGx2bWJ2NnV1ZWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%233F51B5"
              /*  style="border-width: 0"
              width="300"
              height="300"
              frameborder="0"
              scrolling="no" */
            ></iframe>
          </div>
          <div className="time-slots">
            <h2>Choose Time</h2>
            <select name="time" id="time">
              <option value="8am-10am">8AM - 10AM</option>
              <option value="10am-12am">10AM - 12 Noon</option>
              <option value="12am-2pm">12 Noon - 2PM</option>
              <option value="2pm-4pm">2PM - 4PM</option>
              <option value="4pm-6pm">4PM - 6PM</option>
              <option value="6pm-8pm">6PM - 8PM</option>
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

import React from "react";
import locationImage from "../../images/location.png";
import sportImage from "../../images/sport.png";
import coachImage from "../../images/coach.png";
import trainingImage from "../../images/training.png";
import homePageImage from "../../images/homePage-bg.jpg";
import testimonialImage from "../../images/testimonial.jpg";
import ContactForm from "../../pages/ContactForm";

import "../../styles/welcome-body.css";

import { Link } from "react-router-dom";

function Body() {
  return (
    <div>
      <section className="hero-section" id="hero-section">
        <div className="max-width">
          <div className="hero-content">
            <h1>
              Choose <span>Who</span> you Train with
            </h1>
            <p>
              Coach+ is a platform that brings together all the coaches and
              athletes under the same roof. Now, you can train in any sport you
              like & Your perfect coach is just a few clicks away.
            </p>
          </div>
        </div>
      </section>

      <section className="how-it-works" id="how-it-works">
        <div className="max-width">
          <h2>How It Works &mdash; Simple as 1, 2, 3</h2>
          <div className="how-it-works-content">
            <div className="card">
              <div className="box">
                <img src={locationImage} alt="" />
                <div className="text">Choose Location</div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <img src={sportImage} alt="" />
                <div className="text">Choose A Sport</div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <img src={coachImage} alt="" />
                <div className="text">Choose the Coach the befits you!</div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <img src={trainingImage} alt="" />
                <div className="text">Start Training!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-get-started">
        <h2>Get Started</h2>
        <div className="max-width">
          <div className="image-col">
            <img src={homePageImage} alt="" />
          </div>
          <div className="start-col">
            <div className="card">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                facilis numquam ipsam deserunt corporis repellendus nostrum?
                Totam maiores alias animi temporibus repudiandae dignissimos
                consectetur fuga, quibusdam, rem quasi, sed omnis! Voluptatum
                est nesciunt iste ducimus odit minus. Libero qui aperiam
                corrupti minima fuga saepe tenetur expedita ipsa commodi esse,
                iure enim, perspiciatis atque?
              </p>
            </div>
            <div className="card card-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, ipsum praesentium dolorum inventore voluptas quasi.
              </p>
              {/* {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to="/saved">
                    See Your Books
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>
                  Login/Sign Up
                </Nav.Link>
              )} */}
              <Link to="/StuDashboard" className="btn">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="max-width">
          <div className="testimonial-content">
            <div className="heading-col">
              <p>
                <i className="bx bxs-quote-right"></i> What Our Coustomers Are
                Saying
              </p>
            </div>
            <div className="client-testimonial-col">
              <h4>Help us improve</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci laboriosam tempora rerum inventore. Mollitia pariatur,
                fugiat amet placeat omnis ipsum ab doloremque nisi ipsa ipsam,
                animi laudantium illum magni provident.
              </p>
              <hr />
              <img src={testimonialImage} alt="" />
              <h5>John Smith</h5>
            </div>
          </div>
        </div>
      </section>

      <section>
        <ContactForm />
      </section>
    </div>
  );
}

export default Body;

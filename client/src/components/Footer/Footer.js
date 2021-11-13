import React from "react";
import "../../styles/footer.css";

function Footer() {
  return (
    <div>
      <section className="footer" id="footer">
        <div className="footer-box">
          <h2>
            Coach<span>+</span>
          </h2>
          <p>Contact us to Enroll.</p>
          <div className="social">
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-box">
          <h3>Find-A-Coach</h3>
          <li>
            <a href="#">Enroll</a>
          </li>
          <li>
            <a href="#">Help & Support</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </div>
        <div className="footer-box">
          <h3>Sports</h3>
          <li>
            <a href="#">abcd</a>
          </li>
          <li>
            <a href="#">efgh</a>
          </li>
          <li>
            <a href="#">ijkl</a>
          </li>
          <li>
            <a href="#">mnop</a>
          </li>
          <li>
            <a href="#">qrst</a>
          </li>
        </div>
        <div className="footer-box contact-info">
          <h3>Contact</h3>
          <span>Adelaid, Australia</span>
          <br />
          <span>+61 123 456 7890</span>
          <br />
          <span>info@coachplus.com</span>
        </div>
      </section>
      <div className="copyright">
        <p>
          &#169; Coach<span>+</span> All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;

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
            <a href="/">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="/">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="/">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-box">
          <h3>Find-A-Coach</h3>
          <li>
            <a href="/">Enroll</a>
          </li>
          <li>
            <a href="/">Help & Support</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
        </div>
        <div className="footer-box">
          <h3>Sports</h3>
          <li>
            <a href="/">Tennis</a>
          </li>
          <li>
            <a href="/">Swimming</a>
          </li>
          <li>
            <a href="/">Basketball</a>
          </li>
          <li>
            <a href="/">Soccer</a>
          </li>
          <li>
            <a href="/">and many more..</a>
          </li>
        </div>
        <div className="footer-box contact-info">
          <h3>Contact</h3>
          <span>Adelaide,South Australia</span>
          <br />
          <span>+61 499176910</span>
          <br />
          <span>support@thecoachplus.com</span>
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

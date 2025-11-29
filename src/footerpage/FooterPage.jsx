import React from "react";
import { Link } from "react-router-dom";
import gymlogo from "../assets/gymlogo-removebg-preview.png";
import "./footerPageStyles/footerpage.css";
const FooterPage = () => {
  return (
    <div>
      <footer>
        <div className="footer-container">
          {/* gymlogo & primal training */}
          <div className="logo-training-container">
            <img src={gymlogo} alt="gym logo" className="gymlogo" />
            <div className="primal-training">
              <h2 className="primalh2">PRIMAL TRAINING</h2>
            </div>
          </div>

          {/* contact info */}
          <div className="contact-info-container">
            {/* contact */}
            <div className="contact-info">
              <h2 className="contacth2">CONTACT</h2>
              <p className="contactp">Email: emmanuelay897@gmail.com</p>
              <p className="contactp">Phone no: 07043331293</p>
            </div>

            {/* contact */}
            <div className="contact-info">
              <h2 className="contacth2">OPENING HOURS</h2>
              <div className="opening-hours">
                <p>
                  <h2 className="days">MON-FRI</h2>
                  <h2 className="time">5:00-23:00</h2>
                </p>
                <p>
                  <h2 className="days">SATURDAYS</h2>
                  <h2 className="time">8:00-18:00</h2>
                </p>
                <p>
                  <h2 className="days">SUNDAYS</h2>
                  <h2 className="time">8:00-13:00</h2>
                </p>
                <p>
                  <h2 className="days">HOLIDAYS</h2>
                  <h2 className="time">8:00-16:00</h2>
                </p>
              </div>
            </div>

            {/* contact */}
            <div className="contact-info">
              <h2 className="contacth2">SOCIAL</h2>
              <Link
                to="https://www.facebook.com"
                className="footer-social-links"
              >
                Facebook
              </Link>
              <Link
                to="https://www.twitter.com"
                className="footer-social-links"
              >
                Twitter
              </Link>
              <Link
                to="https://www.instagram.com"
                className="footer-social-links"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterPage;

import React from "react";
import gymImg from "../assets/gym.jpg";
import benefitImg from "../assets/benefit-img.jpg";
import expertImg from "../assets/expertimg.jpg";
import gymlogo from "../assets/gymlogo-removebg-preview.png";
import "./homepagemainstyles/homepagemain.css";
import { Link } from "react-router-dom";
const Homepagemain = () => {
  return (
    <div className="main-container">
      <main className="homepage-main">
        <div className="header2">
          <h1 className="headerh1">TRAIN HARD.</h1>
          <span className="bluetext">LIVE BETTER</span>
        </div>
        {/* gym-container */}
        <div className="gym-overall-container">
          <div className="gym">
            <img src={gymImg} className="gymImg" alt="gym image" />

            {/* text-container */}
            <div className="gymtext-container">
              <h2 className="gymh2">FOR THE COMMITED</h2>
              <div>
                <p className="gymp">
                  Train like an athlete with top-tier equipment and expert
                  programming. Whether you're building muscle or breaking PRs,
                  we help you push past limits.
                </p>
                <Link to="/about">
                  <button className="learnmorebtn">ABOUT US</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/*  guided by expert and dynamic open gym */}
        <div className="expertgym-overall-container">
          <div className="expertgym">
            {/* firstcard */}
            <div className="expertgymcard">
              <h2 className="expertgymh2">GUIDED BY EXPERTS</h2>
              <p className="expertgymp">
                We believe in creating a positive environment where you can
                thrive. We're here to help you achieve your goals and unlock
                your full potential.
              </p>
            </div>

            {/* secondcard */}
            <div className="expertgymcard">
              <h2 className="expertgymh2">DYNAMIC OPEN GYM</h2>
              <p className="expertgymp">
                Our facility is the optimal environment for strength training
                and performance, fully equipped with top-of-the-line tools,
                ample training areas, and a focus on functional movement.
              </p>
            </div>

            <img src={expertImg} alt="expert img" className="expertImg" />
          </div>
        </div>

        {/* join the communnity */}
        <div className="joinheader">
          <h1 className="joinh1">JOIN THE</h1>
          <span className="joinspan">COMMUNITY</span>
        </div>

        {/* benefit cards */}
        <div className="overall-benefit-container">
          <div className="benefit-container">
            <div className="benefit">
              {/* benefit cards */}
              <div className="benefit-card">
                <h1 className="benefith1">DISCOVER YOUR POTENTIAL</h1>
              </div>

              {/* benefit cards */}
              <div className="benefit-card">
                <h2 className="benefith2">Expert Coaching</h2>
                <p className="benefitp">
                  Trainers who are passionate about your progress.
                </p>
              </div>

              {/* benefit cards */}
              <div className="benefit-card">
                <h2 className="benefith2">RESULTS DRIVEN-PROGRAM</h2>
                <p className="benefitp">
                  Workouts that deliver tangible, measurable results.
                </p>
              </div>

              {/* benefit cards */}
              <div className="benefit-card">
                <h2 className="benefith2">A SUPPORTIVE TRIBE</h2>
                <p className="benefitp">
                  A community that pushes you to be your best.
                </p>
              </div>

            </div>

            {/* benefit-img */}
            <div className="benefit-img">
              {" "}
              <img src={benefitImg} alt="benefit img" />
            </div>
          </div>
        </div>

        {/* reserve spot */}
        <div className="reserve-container">
          <p className="WWBI">WHAT WE BELEIVE IN</p>
          <h2 className="reserveh2">JOIN THE PRIMAL TRIBE TODAY</h2>
          <Link to="/reserve">
            <button className="reservebtn">RESERVE YOUR SPOT</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Homepagemain;

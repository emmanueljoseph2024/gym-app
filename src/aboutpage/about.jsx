import { Link } from "react-router-dom";
import "./aboutstyles/about.css";
import Header from "../header/header.jsx";
import gym from "../assets/benefit.jpg";
import gym2 from "../assets/expertimg.jpg";
import gym3 from "../assets/gymm2.jpg";
import FooterPage from "../footerpage/FooterPage.jsx";
const About = () => {
  return (
    <div>
      <Header />
      <main className="aboutmain-container">
        <div className="aboutheader-container">
          <h1 className="aboutheader">ABOUT US</h1>
        </div>

        <div className="vision">
          {/* text vision */}
          <div className="textvision">
            <div className="text">
              <h1>TAP INTO YOUR PRIMAL POWER</h1>
              <h1>FORGE A STRONGER THAN YOU</h1>
            </div>

            <div className="ourvision">
              <h1>OUR VISION</h1>
              <p>
                Primal training is commited to delivering a training experience
                rooted in raw strength functional fitness and unwavering
                community support.We empower our members to tap into thier
                primal power achieve thier goals, and live a life of strenghth,
                resilience and unwavering determination
              </p>
            </div>
          </div>
          <div className="visionimg">
            {" "}
            <img src={gym} alt="gym img"></img>
          </div>
        </div>

        {/* dynamic open */}
        <div className="dynamic-open-container">
          <div className="dynamicImg">
            <img src={gym2} alt="gym img" />
          </div>

          <div className="dynamic-open">
            <h1>DYNAMIC OPEN</h1>
            <p>
              At Primal Training, we strip away the fluff and focus on the
              fundamentals. Our expert coaches guide you through intense,
              functional workouts designed to build raw strength, resilience,
              and a body capable of anything.
            </p>
          </div>
        </div>

        {/* reconnect with primal self */}
        <div className="reconnect">
          <h1>
            WE'VE CREATED A SPACE WHERE YOU CAN RECONNECT WITH YOUR PRIMAL SELF
          </h1>
          <img src={gym3} alt="gym img" />
        </div>

        {/* reserve spot */}
        <div className="reserve-container-about">
          <p className="WWBI">WHAT WE BELEIVE IN</p>
          <h2 className="reserveh2">JOIN THE PRIMAL TRIBE TODAY</h2>
          <Link to="/reserve">
            <button className="about-reservebtn">RESERVE YOUR SPOT</button>
          </Link>
        </div>
      </main>
      <FooterPage />
    </div>
  );
};

export default About;

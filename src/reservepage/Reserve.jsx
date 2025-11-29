import Header from "../header/header.jsx";
import FooterPage from "../footerpage/FooterPage.jsx";
import { Link } from "react-router-dom";
import "./reservestyles/reserve.css";
const Reserve = () => {
  return (
    <div>
      <Header />

      <main className="reserve-main">
        {/* book a session */}
        <div className="book-container">
          <h1>
            BOOK A <span className="session-text">SESSION</span>
          </h1>
        </div>

        {/* reserve */}
        <div className="reserve-overall-container">
          {/* reserve div */}
          <div className="reserve-div">
            <div className="reserve-text">
              <h2>STRENGTH</h2>
            </div>

            <div className="schedule">
              <p className="underline-text">Weekdays at 6AM</p>
              <p className="underline-text">Weekends and Holidays at 8AM</p>
              <p>
                Build a foundation of raw power with our comprehensive
                weightlifting and strength training programs
              </p>
            </div>

            <div className="r-b">
              <button>
                <Link
                  to="https://www.linkedin.com/in/joseph-emmanuel-79741433b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="reserve-main-link"
                >
                  RESERVE YOUR SPORT
                </Link>
              </button>
            </div>
          </div>

          {/* reserve div */}
          <div className="reserve-div">
            <div className="reserve-text">
              <h2>CONDITIONING</h2>
            </div>

            <div className="schedule">
              <p className="underline-text">Weekdays at 8AM</p>
              <p className="underline-text">Weekends and Holidays at 10AM</p>
              <p>
                Push your limits with high-intensity workouts that challenge
                your cardiovascular endurance and build functional fitness.{" "}
              </p>
            </div>

            <div className="r-b">
              <button>
                <Link
                  to="https://www.linkedin.com/in/joseph-emmanuel-79741433b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="reserve-main-link"
                >
                  RESERVE YOUR SPORT
                </Link>
              </button>
            </div>
          </div>

          {/* reserve div */}
          <div className="reserve-div">
            <div className="reserve-text">
              <h2>COMMUNITY CLASSES</h2>
            </div>

            <div className="schedule">
              <p></p>
              <p className="underline-text">Every day on the hour</p>
              <p>
                Experience the power of collective effort with our custom
                Workout of the Day. Push your limits alongside like-minded
                individuals.
              </p>
            </div>

            <div className="r-b">
              <button>
                <Link
                  to="https://www.linkedin.com/in/joseph-emmanuel-79741433b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="reserve-main-link"
                >
                  RESERVE YOUR SPORT
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* reserve spot */}
        <div className="main-reserve">
          <h2 className="reserveh2">PRIMAL PERSONAL TRAINING</h2>
          <p className="r-p">
            Receive personalized guidance and tailored programs designed to
            unlock your individual primal potential. Our expert coaches will
            guide you every step of the way.
          </p>
          <Link to="https://www.linkedin.com/in/joseph-emmanuel-79741433b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <button className="reservebtn">RESERVE YOUR SPOT</button>
          </Link>
        </div>
      </main>

      <FooterPage />
    </div>
  );
};

export default Reserve;

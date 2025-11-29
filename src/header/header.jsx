import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import "./headerstyles/header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [display, setDisplay] = useState(false);

  function toggleDisplay() {
    setDisplay(!display);
  }

  return (
    <div>
      <header className="header">
        <nav>
          <ul className="links">
            <li className="logo">Primidal</li>
            <li>
              <Link to="/" className="homepagelinks">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="homepagelinks">
                ABOUT
              </Link>
            </li>
            <li>
              <button className="reserve-button">
                {" "}
                <Link to="/reserve" className="reserve-link">
                  Reserve your spot
                </Link>
              </button>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faPlus}
                className="plusbtn"
                onClick={toggleDisplay}
              />
            </li>
          </ul>
        </nav>

        {/* mobile nav */}
        <nav
          className="mobile-nav"
          style={{ display: display ? "flex" : "none" }}
        >
          <ul className="mobile-links">
            <li>
              <FontAwesomeIcon
                icon={faDeleteLeft}
                onClick={toggleDisplay}
                className="closenav"
              />
            </li>
            <li className="logo">Primidal</li>
            <li>
              <Link to="/" className="homepagelinksmobile">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="homepagelinksmobile">
                ABOUT
              </Link>
            </li>
            <li>
              <button className="mobile-reserve-button">
                <Link to="/reserve" className="reserve-link">
                  Reserve your spot
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

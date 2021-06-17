import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button_2 } from "./Button";
import "./Button.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            AutoGrade <i class="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/addCourse" className="nav-links" onClick={closeMobileMenu}>
                Add Courses
              </Link>
              </li>
            <li className="nav-item">
              <Link
                to="/submissions"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Submissions
              </Link>
            </li>

            <li>
              <Link
                to="/register"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Log Out
              </Link>
            </li>
          </ul>
          {button && (
            <Button_2 buttonStyle="btn--outline" href="/register">
              SIGN UP
            </Button_2>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

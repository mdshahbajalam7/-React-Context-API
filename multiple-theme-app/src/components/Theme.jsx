import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import ThemeBotton from "../components/ThemeBotton";

function Theme() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? "canvas-dark" : "canvas"}>
      {/* Top Hero Image */}
      <div className="hero-image">
        <div className={darkMode ? "overlay-dark" : "overlay"}>
          <h2>MERN . developer</h2>
        </div>
      </div>
      {/* About Details */}
      <center>
        <div className={darkMode ? "about-details-dark" : "about-details"}>
          <div className="text-left">
            <img
              className="img-fluid"
              src="https://avatars.githubusercontent.com/u/98772205?v=4"
              alt="..."
            />
            <h3>Md Shahbaj Alam</h3>
            <h6>MERN DEVELOPER</h6>
            <hr />
            <p>
              MERN stack is a collection of technologies that enables faster
              application development. It is used by developers worldwide. The
              main purpose of using MERN stack is to develop apps using
              JavaScript only. This is because the four technologies that make
              up the technology stack are all JS-based. Thus, if one knows
              JavaScript (and JSON), the backend, frontend, and database can be
              operated easily.
            </p>
            <h1>MERN Stack Full Form</h1>
            <p>
              MERN Stack is a compilation of four different technologies that
              work together to develop dynamic web apps and websites. It is a
              contraction for four different technologies as mentioned below: M
              - MongoDB E - ExpressJS R - ReactJS N - NodeJS Considering you’ve
              downloaded and configured all the four aforementioned
              technologies, you need to know how to create a new project folder
              to get started with the MERN stack. Next, you need to open the
              folder on the CMD (or terminal) and enter the following command to
              initialize a package.json file
            </p>
          </div>
          <p></p>
          <div className="icons">
            <a href="https://github.com/mdshahbajalam7">
              <span className="fa fa-github"></span>
            </a>
            <span className="fa fa-instagram"></span>
            <a href="https://www.linkedin.com/in/md-shahbaj-alam-7343a320a/">
              <span className="fa fa-linkedin-square"></span>
            </a>
          </div>
        </div>
      </center>
      {/* Floating Button  */}
      <ThemeBotton />
    </div>
  );
}

export default Theme;

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
            <h1>MERN Stack Components</h1>
            <p>
              There are four components of the MERN stack. Let’s discuss each of
              them one by one.
              <li>
                The first component is MongoDB, which is a NoSQL database
                management system.
              </li>
              <li>
                The second MERN stack component is ExpressJS. It is a backend
                web application framework for NodeJS.
              </li>
              <li>
                The third component is ReactJS, a JavaScript library for
                developing UIs based on UI components.{" "}
              </li>
              <li>
                The final component of the MERN stack is NodeJS. It is a JS
                runtime environment, i.e., it enables running JavaScript code
                outside the browser.{" "}
              </li>
            </p>
            <h3>Let’s learn more about these MERN Stack components:</h3>
            <li>MongoDB</li>
            <p>
              MongoDB is a NoSQL DBMS where data is stored in the form of
              documents having key-value pairs similar to JSON objects. MongoDB
              enables users to create databases, schemas, and tables. It offers
              the Mongo shell that provides a JS interface for deleting,
              querying, and updating the records.
            </p>
            <li>
              ExpressJS
              <p>
                ExpressJS is a NodeJS framework that simplifies writing the
                backend code. It saves you from creating multiple Node modules.
                For keeping the code precise, ExpressJS offers a range of
                middleware.
              </p>
            </li>
            <li>
              ReactJS
              <p>
                ReactJS is a JS library that allows the development of user
                interfaces for mobile apps and SPAs. It allows you to code
                JavaScript and develop UI components. The JS library uses
                virtual DOM for doing everything.
              </p>
            </li>
            <li>
              NodeJS
              <p>
                NodeJS is an open-source JavaScript runtime environment that
                allows users to run code on the server. It comes with the node
                package manager or npm, enabling users to select from a wide
                selection of node modules or packages. Being developed on the
                Chrome JavaScript Engine enables Node to execute code faster.
              </p>
            </li>
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

import React from "react";
import "./About.css";
import myImage from "../img.jpg"; 
function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            I am an aspiring FullStack Developer with a passion for creating beautiful and responsive frontend designs, combined with strong backend development skills. I thrive on building seamless and interactive user experiences while also ensuring robust server-side functionality.
            In addition to my development journey, I am an avid competitive programmer with a keen interest in problem-solving and algorithmic challenges.
          </p>
        </div>
        <div className="about-image">
          <img src={myImage} alt="Anbuchezhiyan A M" />
        </div>
      </div>
    </section>
  );
}

export default About;

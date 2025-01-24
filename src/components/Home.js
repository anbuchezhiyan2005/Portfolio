import React from "react";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="content">
        <h2>Welcome to My Portfolio</h2>
        <p>I am a passionate FullStack developer.</p>
        <a href="#about" className="btn">Learn More</a>
      </div>
    </section>
  );
}

export default Home;

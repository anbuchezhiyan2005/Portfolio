import React from "react";
import "./Projects.css";

import weatherDashboardImage from "../weather-dashboard.png";
import recipeManagementImage from "../recipe-management-system.jpg"; 
import landingPageImage from "../landing-pages.jpeg"; 

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <div className="project-image">
            <img src={weatherDashboardImage} alt="Weather Dashboard Project" />
          </div>
          <h3>Weather Dashboard Project using Django and APIs</h3>
          <p>
            Developed a real-time weather dashboard using Django and Weatherbit API, allowing users to compare live and forecasted weather conditions for multiple cities. The project includes data parsing and interactive weather icons to enhance the user experience. By implementing the API, I was able to increase project accuracy by 100%, providing 7-day weather forecasts with visual representations of weather conditions.
          </p>
          <div className="key-features">
            <button className="feature-btn">Real-time Weather</button>
            <button className="feature-btn">7-Day Forecast</button>
            <button className="feature-btn">API Integration</button>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={recipeManagementImage} alt="Recipe Management System" />
          </div>
          <h3>Recipe Management System using JDBC Connectivity</h3>
          <p>
            Created a console-based Recipe Management System using Java and SQL, which improved recipe organization and search efficiency by 20%. I implemented multithreading to speed up concurrent searches and file handling to save recipes, reducing system errors by 15%. The system supports CRUD operations across recipes, ingredients, users, and reviews, all connected to a MySQL database via JDBC.
          </p>
          <div className="key-features">
            <button className="feature-btn">Multithreading</button>
            <button className="feature-btn">CRUD Operations</button>
            <button className="feature-btn">File Handling</button>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={landingPageImage} alt="Dynamic Landing Page" />
          </div>
          <h3>Dynamic Landing Page</h3>
          <p>
            Built a dynamic and responsive landing page with multimedia content and animations, ensuring an engaging user experience. I used essential CSS stylings and JavaScript to enhance interactivity. Leveraging the power of Bootstrap and Tailwind CSS, I ensured the page was responsive and optimized for all screen sizes.
          </p>
          <div className="key-features">
            <button className="feature-btn">Responsive Design</button>
            <button className="feature-btn">CSS Animations</button>
            <button className="feature-btn">Bootstrap & Tailwind CSS</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

// TechStack.js
import React from 'react';
import './TechStack.css';
import node from '../nodejs-1.svg'
import cpp from '../c.svg'
import sql from '../mysql-logo-pure.svg'
import html from '../html-1.svg'

const TechStack = () => {
  return (
    <div className="contact-left">
      <h3>Tech Stack</h3>
      <div className="tech-stack">
        <div className="tech-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />
          <p>React</p>
        </div>

        <div className="tech-item">
          <img src={node} alt="Node.js" />
          <p>Node.js</p>
        </div>

        <div className="tech-item">
          <img src={html} alt="HTML5" />
          <p>HTML5</p>
        </div>

        <div className="tech-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS3" />
          <p>CSS3</p>
        </div>

        <div className="tech-item">
          <img src={cpp} alt="C++" />
          <p>C++</p>
        </div>

        <div className="tech-item">
          <img src={sql} alt="MySQL" />
          <p>MySQL</p>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

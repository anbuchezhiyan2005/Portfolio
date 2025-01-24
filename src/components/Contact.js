import React from 'react';
import './Contact.css';
import TechStack from './TechStack';

const Contact = () => {
  return (
    <section id='contact'>
    <div className="contact-section">
      <TechStack />

      <div className="contact-right">
        <h3>Contact Me</h3>
        <form>
          <div>
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div>
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div>
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <div>
            <input type="submit" value="Post Message" />
          </div>
        </form>
      </div>
    </div>
    </section>
  );
};

export default Contact;

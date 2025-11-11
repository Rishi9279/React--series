import React from 'react'
import './About.css'

const About = () => {
  return (
    <div>
      <section className="about">
        <div className="about-image">
          <img src="https://cdn.pixabay.com/photo/2024/11/07/11/58/fitness-9180669_1280.jpg" alt="" />
        </div>
        <div className="about-text">
          <h2>About Our Gym</h2>
          <p> We are not just a gym — we are a lifestyle transformation studio. Our mission is to help you build strength, confidence and discipline.</p>
          <button className="about-btn">Know More</button>
        </div>
      </section>
    </div>
  );
}

export default About
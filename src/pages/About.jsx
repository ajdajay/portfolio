import React from 'react';
import './About.css';

const stats = [
  { number: '2', label: 'Year level' },
  { number: '3', label: 'Projects Delivered' },
  { number: '100%', label: 'Projects Dedication' },
];

function About() {
  return (
    <div id="about" className="about-grid">
      <div className="about-text">
        <h3>
          Design is a bridge between{' '}
          <span>UX Design</span>
        </h3>
        <p>
          <strong></strong> I am a UI/UX designer who enjoys creating simple and easy-to-use digital experiences.
           I focus on designs that are clear, useful, and visually appealing. I also have skills in front-end development
            to help bring designs to life. My goal is to solve real problems through thoughtful and accessible design.
             I want to create digital products that make a positive impact on people.
        </p>
        <p>
           I am currently learning how design systems work with React components.
           I am open to collaborations that bring new ideas and challenge the usual way of doing things.
        </p>
      </div>

      <div className="stat-list">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;

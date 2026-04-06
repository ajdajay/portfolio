import React from 'react';
import './Home.css';

function Home() {
  const handleViewProjects = (e) => {
    e.preventDefault();
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-badge">✨ UI/UX Designer & Front-end Developer</div>
        <h1>UI/UX DESIGNER<br />Antonette Jean Dajay</h1>
        <p>
          Crafting meaningful, human-centered digital experiences. I blend design
          thinking with elegant interfaces — turning complexity into simplicity.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn-primary" onClick={handleViewProjects}>
            View projects <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
          </a>
          <a href="#contact" className="btn-outline" onClick={handleContact}>
            Contact me <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="antonette.jpg"
          alt="Antonette Jean Dajay profile"
          className="profile-pic"
        />
        <div className="image-caption">📍 Iloilo City · UX/UI Designer & Front-end Developer</div>
      </div>
    </div>
  );
}

export default Home;

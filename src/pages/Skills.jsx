import React from 'react';
import './Skills.css';

const skills = [
  { icon: 'fab fa-figma', label: 'Figma' },
  { icon: 'fas fa-database', label: 'MongoDB' },
  { icon: 'fas fa-code', label: 'Express.js' },
  { icon: 'fab fa-node-js', label: 'Node.js' },
  { icon: 'fab fa-react', label: 'React' },
  { icon: 'fab fa-js', label: 'JavaScript' },
  { icon: 'fab fa-html5', label: 'HTML5' },
  { icon: 'fab fa-css3-alt', label: 'CSS3' },
];

function Skills() {
  return (
    <div id="skills" className="skills-section">
      <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
        Tech & Tools
      </h2>
      <div className="section-sub" style={{ marginBottom: '1rem' }}>
        Design + Development Stack
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-badge" key={index}>
            <i className={skill.icon}></i>
            {skill.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

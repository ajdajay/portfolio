// Projects.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

// Import images from the public or src folder
// Place your images in the public/images folder or src/images folder
const PROJECT_IMAGES = {
  devify: '/devify.jpg',
  bayanihan: '/bayanihan.jpg',
  awesometodos: '/notion.jpg',
};

const projects = [
  {
    id: 1,
    tag: 'Mobile App',
    title: 'Devify',
    description:
      'A smart task reminder app that helps you stay organized and never miss important deadlines. Features include recurring tasks, priority levels, and smart notifications.',
    image: PROJECT_IMAGES.devify,
    alt: 'Devify task reminder mobile app interface',
    technologies: ['Figma Design'],
    year: '2025',
    icon: '📱',
  },
  {
    id: 2,
    tag: 'Web App',
    title: 'Bayanihan',
    description:
      'A home service platform connecting people who need help with household repairs and services to skilled local workers. Easy booking, secure payments, and verified professionals.',
    image: PROJECT_IMAGES.bayanihan,
    alt: 'Bayanihan home service web application dashboard',
    technologies: ['React', 'Express', 'MongoDB', 'node'],
    year: '2026',
    icon: '🌐',
  },
  {
    id: 3,
    tag: 'Productivity',
    title: 'AwesomeTodos',
    description:
      'A beautiful and intuitive todo task manager that helps you track daily tasks, set reminders, and achieve your goals with style. Drag-and-drop interface and progress tracking.',
    image: PROJECT_IMAGES.awesometodos,
    alt: 'AwesomeTodos task management interface',
    technologies: ['Figma'],
    year: '2026',
    icon: '✅',
  },
];

function Projects() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const [imageErrors, setImageErrors] = useState({});
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Placeholder image for when images fail to load
  const PLACEHOLDER_IMAGE = 'https://placehold.co/600x400/F7F2EA/C66B3D?text=Project+Image';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = (projectId) => {
    setLoadedImages(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  const handleImageError = (projectId) => {
    setImageErrors(prev => ({
      ...prev,
      [projectId]: true
    }));
    setLoadedImages(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  const getImageSrc = (project) => {
    if (imageErrors[project.id]) {
      return PLACEHOLDER_IMAGE;
    }
    return project.image;
  };

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-container">
        <div className="projects-header">
          <span className="projects-badge">🚀 Featured Work</span>
          <h2 className="section-title">Selected Projects</h2>
          <div className="section-sub">
            Visual storytelling — each project reflects a unique design challenge
          </div>
          <div className="projects-divider"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              className={`project-card ${isVisible ? 'fade-in' : ''}`}
              key={project.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="project-img-wrapper">
                <div className="project-img">
                  {!loadedImages[project.id] && (
                    <div className="image-skeleton">
                      <div className="skeleton-shimmer"></div>
                    </div>
                  )}
                  <img 
                    src={getImageSrc(project)}
                    alt={project.alt}
                    loading="lazy"
                    onLoad={() => handleImageLoad(project.id)}
                    onError={() => handleImageError(project.id)}
                    style={{ opacity: loadedImages[project.id] ? 1 : 0 }}
                  />
                  <div className={`project-overlay ${hoveredCard === project.id ? 'active' : ''}`}>
                    <div className="overlay-content">
                      <span className="project-year">
                        <i className="far fa-calendar-alt"></i> {project.year}
                      </span>
                      <div className="project-tech-icons">
                        {project.technologies && project.technologies.map((tech, i) => (
                          <span key={i} className="tech-badge">{tech}</span>
                        ))}
                      </div>
                      <button 
                        className="view-demo-btn"
                        onClick={() => alert(`Opening ${project.title} project details`)}
                      >
                        View Project <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-tag">
                    <span className="tag-icon">{project.icon}</span> {project.tag}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <div className="project-tech-stack">
                    {project.technologies && project.technologies.slice(0, 2).map((tech, i) => (
                      <span key={i} className="tech-stack-item">{tech}</span>
                    ))}
                    {project.technologies && project.technologies.length > 2 && (
                      <span className="tech-stack-item">+{project.technologies.length - 2}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
        
        </div>
      </div>
    </section>
  );
}

export default Projects;

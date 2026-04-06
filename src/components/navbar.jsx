// navbar.jsx
import React, { useState, useEffect } from 'react';
import './navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section for highlighting
      const sections = ['work', 'about', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.querySelector(`#${section}`);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFollow = (e) => {
    e.preventDefault();
    const fakeNotif = document.createElement('div');
    fakeNotif.innerText = '✨ Thanks for following Jean! ✨ (connect on socials below)';
    fakeNotif.style.cssText = `
      position: fixed; bottom: 30px; left: 50%;
      transform: translateX(-50%);
      background-color: #2d2a27; color: #f5ede4;
      padding: 12px 24px; border-radius: 100px;
      font-size: 0.85rem; font-weight: 500;
      z-index: 1000; box-shadow: 0 6px 14px rgba(0,0,0,0.1);
      animation: slideUp 0.3s ease;
    `;
    document.body.appendChild(fakeNotif);
    setTimeout(() => {
      fakeNotif.style.opacity = '0';
      setTimeout(() => fakeNotif.remove(), 500);
    }, 2200);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(targetId);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <h1>
            <span className="logo-first">Antonette Jean</span>
            <span className="logo-last"> Dajay</span>
          </h1>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
          <a 
            href="#work" 
            onClick={(e) => handleSmoothScroll(e, '#work')}
            className={activeSection === 'work' ? 'active' : ''}
          >
            <span className="nav-icon"></span>
            Work
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleSmoothScroll(e, '#about')}
            className={activeSection === 'about' ? 'active' : ''}
          >
            <span className="nav-icon"></span>
            About
          </a>
          <a 
            href="#skills" 
            onClick={(e) => handleSmoothScroll(e, '#skills')}
            className={activeSection === 'skills' ? 'active' : ''}
          >
            <span className="nav-icon"></span>
            Skills
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className={activeSection === 'contact' ? 'active' : ''}
          >
            <span className="nav-icon"></span>
            Contact
          </a>
          <button className="btn-follow" onClick={handleFollow}>
            <i className="fab fa-instagram"></i>
            <span>Follow</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
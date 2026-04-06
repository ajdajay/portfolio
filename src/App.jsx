import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <footer>
        <p>© 2025 Antonette Jean Dajay — Portfolio. Designed with me and intentional details.</p>
        <p style={{ marginTop: '12px' }}>✨ Follow me  ✨</p>
      </footer>
    </div>
  );
}

export default App;

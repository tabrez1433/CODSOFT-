import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import About from './components/about/About.jsx';
import CarouselImages from './components/Carousel/Carousel.jsx';
import Experience from './components/experience/Experience.jsx';  // Add this line to import the Experience component.
import Education from './components/Education/Education.jsx';
import Projects from './components/Projects/Projects.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Certification from './components/skills/Certification.jsx';

export default function App() {

  return (
    <Router>
      <div className='App'>
        <div className='side'>
          <nav className='navbar side navbar-expand-lg navbar-light p-0'>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              style={{ zIndex: '1' }}
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <Sidebar />
            </div>
          </nav>
        </div>
        <div className='main'>
          <CarouselImages />
          <About />
          <Projects />
          <Experience />
          <Certification />
          <Education />
        <div className="container copyRight">
          Tabrez&copy;{new Date().getFullYear()}
        </div>
        </div>
      </div>
    </Router>
  );

}



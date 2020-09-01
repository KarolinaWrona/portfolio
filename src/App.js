import React from 'react';
import './App.css';
import Welcome from './components/welcome/welcome';
import Contact from './components/contact/contact';
import AboutMe from './components/aboutMe/aboutMe';
import BackToTop from './components/backToTop/backToTop';
import Footer from './components/Footer/footer';
import Projects from './components/projects/projects';

function App() {
  return (
    <div className="app">
      <Welcome />
      <AboutMe />
      <Projects />
      <Contact />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;

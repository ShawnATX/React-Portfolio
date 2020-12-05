import React from 'react';
import Nav from './components/nav';
import Masthead from './components/masthead';
// import Projects from './components/projects';
import Projects from './components/projectsNew';
import Contact from './components/contact';

import './App.css';

function App() {
  return (
    <div className="container-fluid px-0">
      <Nav />
      <Masthead />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

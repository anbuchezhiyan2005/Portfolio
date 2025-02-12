
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

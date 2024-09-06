import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Footer from './components/Footer';


import { Route,Routes } from 'react-router-dom';
import About from './components/About';
import Feedback from './components/Feedback';














function App() {
  return (
    <>
      <Navbar />,
      <div className="row">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

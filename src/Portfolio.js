import React from 'react';

import './scss/main.scss';

import About from './components/About';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';

let Portfolio = () => {
    return (
        <div className="Portfolio">
            <Navbar />
            <Profile />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default Portfolio;

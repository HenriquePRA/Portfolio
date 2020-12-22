import React from 'react';

import './scss/main.scss';

import About from './components/About';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

let Portfolio = () => {
    return (
        <div className="Portfolio">
            <Navbar />
            <Profile />
            <About />
            <Projects />
        </div>
    );
}

export default Portfolio;

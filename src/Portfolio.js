import React, { useState } from 'react';

import './scss/main.scss';

import About from './components/About';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Project from './components/Project';
import Contact from './components/Contact';

let Portfolio = () => {

    const [showproj, setShowproj] = useState(false);
    const [projdata, setprojdata] = useState({});

    return (
        <div>
            <div className={showproj ? "Portfolio filter" : "Portfolio"}>
                <Navbar showproj={showproj} />
                <Profile />
                <About />
                <Projects 
                    setShowproj={setShowproj}
                    setprojdata={setprojdata}
                />
                
                <Contact />
            </div>
            <Project
                showproj={showproj}
                projdata={projdata}
                setShowproj={setShowproj}
            />
        </div>
    );
}

export default Portfolio;

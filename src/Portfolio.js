import React, { useState } from 'react';

import './scss/main.scss';

import About from './components/About';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Details from './components/Details';
import Contact from './components/Contact';

let Portfolio = () => {

    const [showproj, setShowproj] = useState(false);
    const [projdata, setprojdata] = useState({});

    return (
        <div className={showproj ? "Portfolio filter" : "Portfolio"} >
            <Navbar />
            <Profile />
            <About />
            <Projects 
                setShowproj={setShowproj}
                setprojdata={setprojdata}
            />
            <Details
                showproj={showproj}
                projdata={projdata}
                setShowproj={setShowproj}
            />
            <Contact />
        </div>
    );
}

export default Portfolio;

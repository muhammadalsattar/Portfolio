import React from 'react';
import Intro from './Intro';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => (
    <div className="portfolio">
        <Intro/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
)

export default Portfolio
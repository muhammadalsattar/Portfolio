import React from 'react';
import {SiGithub} from 'react-icons/si';
import {BsLinkedin, BsGithub, BsFacebook, BsYoutube} from 'react-icons/bs'

const Footer = () => (
    <div className="footer">
      <h4>Muhammad Abd-Elsattar</h4>
      <div className="social-links">
        <h4><BsLinkedin/></h4>
        <h4><BsGithub/></h4>
        <h4><BsFacebook/></h4>
        <h4><BsYoutube/></h4>
      </div>
    </div>
)

export default Footer;
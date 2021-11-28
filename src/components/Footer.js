import React from 'react'
import {FiGithub} from 'react-icons/fi';
import {SiGithub} from 'react-icons/si'

const Footer = () => (
    <div className="footer">
          <button type="button" className="btn btn-link">Link</button>
          <h3>Muhammad Abd-Elsattar</h3>
          <div className="social-links"><FiGithub/></div>
          <h1><SiGithub/></h1>
        </div>
)

export default Footer;
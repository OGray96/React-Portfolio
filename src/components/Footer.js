import React from 'react';
import './styles/footer.css'
import githubLogo from './images/github-logo.png'
import linkedinLogo from './images/linkedin-logo.png'

export default function Footer() {
    return (
      <div className='footer-container'>
        <div className='image-container'>
          <a href='https://github.com/OGray96' >
            <img className = 'images' src = {githubLogo} alt='GitHub Logo'/>
          </a>
          <a href='https://www.linkedin.com/in/oliver-gray1/' >
          <img className = 'images' src = {linkedinLogo} alt='GitHub Logo'/>
          </a>
        </div>
      </div>
    );
  }
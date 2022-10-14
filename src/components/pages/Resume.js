import React from 'react';
import resume from '../images/resume.pdf'
import '../styles/resume.css'

export default function Resume() {
    return (
      <div className='resume-container'>
        
        <h1>Resume</h1>
        <h4>Key Skills - Programming</h4>
        <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Node JS</li>
        <li>SQL</li>
        <li>React</li>
        </ul>
        <h4>Key Skills - Other</h4>
        <ul>
          <li>Project Management</li>
          <li>Presentations</li>
          <li>Client Management</li>
        </ul>

        <a href={resume} target='blank'><h6>See my full resume here!</h6></a>
      </div>
    );
}
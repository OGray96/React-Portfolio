import React from 'react';
// import logo from './imgs/logo.png';
import './styles/navbar.css'


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar bg-light" className='navbar'>
        <div class="container-fluid">
            <a id = 'Oliver'class="navbar-brand" href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                {/* <img src={logo} alt="Logo" width="90" height="38" class="d-inline-block align-text-top"></img> */}
                Oliver Gray
            </a>
            <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          id = 'nav-selections'
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          id = 'nav-selections'
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          id = 'nav-selections'
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          id = 'nav-selections'
        >
          Contact Me
        </a>
      </li>
    </ul>
        </div>
    </nav>
  )
}

export default NavTabs;
import React, { useState } from 'react';
import Navbar from './Navbar2';
import Footer from './Footer';
import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';



export default function Container() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home'){
            return <Homepage/>;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio/>;
        }
        if (currentPage === 'Resume') {
            return <Resume/>;
        }
        else return <Contact/>
    }

    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        <Footer/>
        </div>
    )
}
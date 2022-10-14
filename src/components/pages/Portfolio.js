import portfolio1 from '../images/portfolio-1.png'
import portfolio2 from '../images/portfolio-2.png'
import portfolio3 from '../images/portfolio-3.jpeg'
import portfolio4 from '../images/portfolio-4.jpeg'
import portfolio5 from '../images/portfolio-5.png'
import portfolio6 from '../images/portfolio-6.png'
import '../styles/portfolio.css'

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='carousel-container'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <a href='https://github.com/OGray96/Employee-Tracker'>
        <img
          className="d-block w-100"
          src={portfolio1}
          alt="First slide"
        />
        </a>
        <Carousel.Caption>
          <h3>Employee Tracker</h3>
          <p>Using Node JS i created an employee manager tool for businesses</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href='https://github.com/Zoki91/Paws-For-Homes'>
        <img
          className="d-block w-100"
          src={portfolio2}
          alt="Second slide"
        />
        </a>
        <Carousel.Caption>
          <h3>Paws for Homes</h3>
          <p>Created a not-for-profit pet adoption website</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href='https://github.com/OGray96/WeatherApp'>
        <img
          className="d-block w-100"
          src={portfolio3}
          alt="Third slide"
        />
        </a>
        <Carousel.Caption>
          <h3 className='third-slide-label'>Weather App</h3>
          <p className='third-slide-label'>
            Created an application that will provide a 7 day forecast for a city of the users choice
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href='https://github.com/OGray96/NoteTakerApplication'>
        <img
          className="d-block w-100"
          src={portfolio4}
          alt="Fourth slide"
        />
        </a>

        <Carousel.Caption>
          <h3 className='third-slide-label'>Note Taker</h3>
          <p className='third-slide-label'>
            Created an application that a user can make/edit/delete notes and close/open application and data is saved
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href='https://github.com/OGray96/PWA-Text-Editor'>
        <img
          className="d-block w-100"
          src={portfolio5}
          alt="Fifth slide"
        />
        </a>
        <Carousel.Caption>
          <h3>Social Media API</h3>
          <p>
            Created the backend of a social media application
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href='https://github.com/OGray96/PWA-Text-Editor'>
        <img
          className="d-block w-100"
          src={portfolio6}
          alt="Sixth slide"
        />
        </a>

        <Carousel.Caption>
          <h3>Just Another Text Editor</h3>
          <p>
            Created a PWA application that can be downloaded and used locally
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}


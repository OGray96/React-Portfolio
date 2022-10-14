import React from 'react';
import developer from '../images/developer-image.png'
import '../styles/aboutMe.css'


export default function Home() {
    return (
      <div>
        <h1 className='welcome-text'>
         Welcome to my portfolio page!
        </h1>
        <div className='container'>
            <img className = 'oliver-image' src={developer} alt="Developer"></img>
            <p className = 'about-text'>
                I have always been fasicinated by coding and 
                decided to undertake learning how to code during Melbourne's 
                lockdown. After lockdown i decided to take my knowledge to the next level and embark on learning how to code 
                via a Monash Bootcamp. If you would like to have a look at some of the things i have created 
                please click on the portfolio tab above! Also please find links to my socials below!
            </p>
            
        </div>

      </div>
    );
}
import React from 'react';
import {Link} from 'react-router-dom';
import animal from '../assets/animal.jpeg';
import weather from '../assets/weather.jpeg';
import greeting from '../assets/greeting.jpeg';
import transportation from '../assets/transportation.jpeg';
import own from '../assets/own.png';

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'rgb(4,44,96)',    
  };

export default function MainPage(props) {
    return(
        <>            
            <h2 id='mainPageHeader'>Pick A Category To Start</h2>            
            <div id='containers'>
                <div className="container" id="animalContainer">
                    <img className="containerImg" id="animal" src={animal} alt="img" />
                    <Link style={linkStyle} to='/animals'>Animals</Link>
                    </div>                        
                <div className="container" id="weatherContainer">
                    <img className="containerImg" id="weather" src={weather} alt="img"/>
                    <Link style={linkStyle} to='/weather'>Weather</Link>
                </div>
                <div className="container" id="greetingContainer">
                    <img className="containerImg" id="greeting" src={greeting} alt="img"/>
                    <Link style={linkStyle} to='/greeting'>Greeting</Link>
                </div>
                <div className="container" id="transportContainer">
                    <img className="containerImg" id="transporation" src={transportation} alt="img"/>
                    <Link style={linkStyle} to='/transport'>Transportation</Link>
                </div>
                <div className="container" id="youOwnContainer">
                    <img className="containerImg" id="own" src={own} alt="img"/>
                    <Link style={linkStyle} to='/yourown'>Your Own Cards</Link>
                </div>                
            </div>
       </>

    )
}
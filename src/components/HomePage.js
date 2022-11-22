import React from 'react';
import {NavLink, Link} from 'react-router-dom'
const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'rgb(4,44,96)',  
    
  };
  
export default function Home() {
    return (
        <div id = 'homepage'>
        <h2 id = 'homepageheader'>The free, fun, and effective way to learn Chinese</h2>
        <nav id = 'homepageruser'>
            <div id = 'register'>
            <Link to = "register" style={linkStyle}>GET STARTED</Link>          
            </div>
            <div id = 'login'>
            <Link to = "login" style={linkStyle}>I ALREADY HAVE AN ACCOUNT</Link>
            </div>  
        </nav>
        <footer>
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-youtube"></a>
            <a href="#" className="fa fa-instagram"></a>
            <div>All Rights Reserved © vocabcards.com</div>
        </footer>
        </div>
    )
}
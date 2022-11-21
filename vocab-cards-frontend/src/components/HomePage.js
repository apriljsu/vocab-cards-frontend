import React from 'react';
import {NavLink, Link} from 'react-router-dom'
export default function Home() {
    return (
        <div>
        <h2>The Free, fun, and effective way to learn Chinese</h2>
        <nav>       
            <Link to="register" id='register'>GET STARTED</Link>
            <br/>
            <Link to="login" id='login'>I ALREADY HAVE AN ACCOUNT</Link>
          <br/>       
        </nav>
        </div>
    )
}
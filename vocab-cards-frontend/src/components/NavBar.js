import React from 'react';
import {NavLink, Link} from 'react-router-dom'

export default function NavBar(props) {   
   
    return(
        <nav>
          <div>Welcome {props.user}</div>
          <Link to="/">HOME</Link>
          <br/>
          <NavLink to="main" >MAIN</NavLink>
          <br/>         
          <NavLink to="register" >REGISTER</NavLink>
          <br/>
          <NavLink to="login" >LOGIN</NavLink>
          <br/>
          <NavLink to="new" >Create A New Card</NavLink>
          <br/>
          <button onClick={props.logout}>Log Out</button>
        </nav>
    )
}
import React from 'react';
import {NavLink, Link} from 'react-router-dom'

export default function NavBar() {   
   
    return(
        <nav>
          <Link to="/">HOME</Link>
          <br/>
          <NavLink to="vocabs" >MAIN</NavLink>
          <br/>         
          <NavLink to="register" >REGISTER</NavLink>
          <br/>
          <NavLink to="login" >LOGIN</NavLink>
          <br/>
          <NavLink to="new" >Create A New Card</NavLink>
        </nav>
    )
}
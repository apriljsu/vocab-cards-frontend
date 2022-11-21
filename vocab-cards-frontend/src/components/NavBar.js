import React from 'react';
import {NavLink, Link} from 'react-router-dom'

export default function NavBar(props) {   
    if(props.userActive){
      return(        
        <>
        <div>Chinese Vocab Cards</div>
        <nav>          
          <Link to="/">HOME</Link>
          <br/>
          <NavLink to="main" >MAIN</NavLink>         
          <br/>
          <NavLink to="new" >Create A New Card</NavLink>
          <br/>
          <div>Welcome {props.user}</div>
          <button onClick={props.logout}>Log Out</button>
        </nav>
        </>        
    )
    } else{
      return(
        <>
        <div>Chinese Vocab Cards</div>
        
        </>
    )
    }
    
}
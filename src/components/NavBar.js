import React from 'react';
import {NavLink, Link} from 'react-router-dom'

export default function NavBar(props) {   
    if(props.userActive){
      return(        
        <>
        <div className='brand'>Chinese Vocab Cards</div>        
        <nav className="navbar navbar-expand-lg bg-light">        
          <br/>
          <div>Welcome {props.user}</div>
          <NavLink to="main" >MAIN</NavLink>         
          <br/>
          <NavLink to="new" >Create A New Card</NavLink>
          
          <button onClick={props.logout}>Log Out</button>
        </nav>
        </>        
    )
    } else{
      return(
        <div className="navbar navbar-expand-lg bg-light">
        <div className='brand'>Chinese Vocab Cards</div>        
        </div>
    )
    }
    
}
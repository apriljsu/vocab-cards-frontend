import React from 'react';
import {NavLink, Link} from 'react-router-dom'

export default function NavBar(props) {   
    if(props.userActive){
      return(        
        <div className="navbar navbar-expand-lg bg-light">
        <div className='brand'>Chinese Vocab Cards</div>
        <div>Welcome {props.user}</div>
        <div className="container2">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" id="menu-text" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Menu
                        </div>
                        <ul className="dropdown-menu dropdown-menu-end">
                        
                          <li><NavLink className="dropdown-item" to="main" >MAIN</NavLink></li>
                          <li><NavLink className="dropdown-item" to="new" >CREATE A NEW CARD</NavLink></li>
                          <li><button className="dropdown-item logoutButton" onClick={props.logout}>LOG OUT</button></li>                      

                        </ul>
                      </li>
                  </ul>
                </div>
          </div>          
          </div>        
    )
    } else{
      return(
        <div className="navbar navbar-expand-lg bg-light">
          <div className='brand'>Chinese Vocab Cards</div>
          <div className="container2">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" id="menu-text" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Menu
                        </div>
                        <ul className="dropdown-menu dropdown-menu-end">
                        
                          <li><NavLink className="dropdown-item" to="/" >HOME</NavLink></li>
                          <li><NavLink className="dropdown-item" to="register" >REGISTER</NavLink></li>
                          <li><NavLink className="dropdown-item" to="login" >LOG IN</NavLink></li>                       

                        </ul>
                      </li>
                  </ul>
                </div>
            </div>       
        </div>
    )
    }
    
}
import React from 'react'
import logo from './../../Assets/Nav_img.png'
import './Nav.css'
const Nav=()=>{

    return(
        <div className="nav-container">
            <div className="nav-left">
                <img className="nav-logo" src={logo} alt="shield" />
                <p className="nav-logo-text">TypeLab</p>
            </div>
            <div className="nav-right">
                <a 
                  target="_blank"
                  className="nav-text-link"
                  href="https://www.facebook.com/Arjunkvl/"
                  rel="noreferrer">
                      Arjun Ravi
                  </a>
            </div>
        </div>
    )
}

export default Nav

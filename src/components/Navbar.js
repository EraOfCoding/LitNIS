import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'
import '../styles/Navbar.css'

const Navbar = ({theme, toogleTheme}) => {
    const isLight = theme === 'light'
    return (
      <div className="navbar">
        <Link to="/">
          <div id="clickable">
            <img src={logo}/>
            <h1>LitNIS</h1>
          </div>
        </Link>
        <div>
          <button id="toggle" onClick={toogleTheme}>
            {isLight === true ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    );
}

export default Navbar
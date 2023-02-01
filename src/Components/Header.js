import React from "react";
import logo from '../Images/react-logo.png';


function Header() {
    return (
      <header>
          <nav className='nav'>
            <img src={logo} alt='' className='logo' />
            <ul className='nav-items'>
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
    )
};

export default Header;

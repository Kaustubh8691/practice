import React, { useState } from 'react'
import logo from '../images/logo3.png';
import {Link} from 'react-scroll';

function Navbar() {
    const [nav,statenav]=useState(false);

    const changeBackground=()=>{
        if(window.scrollY >= 50){
            statenav(true);
        }
        else{
            statenav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
        <Link to="#" className='logo' smooth={true} duration={1000}>
            <img src={logo} alt="logo"/>
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to='main' smooth={true} duration={1000}>Header</Link></li>
            <li><Link to='features' smooth={true} duration={2000}>Features</Link></li>
            <li><Link to='offer' smooth={true} duration={1000}>Offer</Link></li>
            <li><Link to='about' smooth={true} duration={2000}>About</Link></li>
            <li><Link to='contact' smooth={true} duration={3000}>Contact</Link></li>            
        </ul>

    </nav>
  )
}
export default  Navbar;

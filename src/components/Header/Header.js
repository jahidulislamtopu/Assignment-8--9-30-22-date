import React from 'react';
import logo from '../../images/favicon.ico'
import './Header.css'
const Header = () => {
    return (
        <nav className='header-nav'>
            <img className='clubimg' src={logo} alt="" />
            <h3 className='club'>Club_BD</h3>
            
        </nav>
    );
};

export default Header;
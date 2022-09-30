import React from 'react';
import logo from '../../images/favicon.ico'
import './Header.css'
const Header = () => {
    return (
        // its navbar i have used here 
        <nav className='header-nav'>
            <img className='clubimg' src={logo} alt="" />
            <h3 className='club'>Bull Fitness</h3>

        </nav>
    );
};

export default Header;
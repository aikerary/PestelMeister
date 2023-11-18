import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">Welcome to My Website</h1>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">Home</li>
                    <li className="header__nav-item">About</li>
                    <li className="header__nav-item">Services</li>
                    <li className="header__nav-item">Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
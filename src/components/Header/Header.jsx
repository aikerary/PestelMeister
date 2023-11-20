import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <picture>
                <img src="/pestel.svg" alt="Pestel logo" className="logo" />
            </picture>
            <nav className="header_nav">
                <ul className="header_nav-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            {/* Picture */}
            <picture>
                <img src="/pestel.svg" alt="Header" />
            </picture>
            <nav className="header_nav">
                <ul className="header__nav-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
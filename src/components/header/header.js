import React from 'react';
import './header.css';

function Header() {
    return (
        <div className="header-container">
            <p className="mb-0">
                Visit our online shop for the latest merchandise and products for sale 
                <a 
                    href="#" 
                    className="header-link"
                >
                    Visit the shop
                </a>
            </p>
        </div>
    );
}

export default Header;

import React, { useState } from 'react';
import "./NavbarStyles.css";

function Navbar() {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a className="navbar-brand logoContainer" href="#">
                <img src="/logo.png" alt="Logo" width="315" height="59" className="d-inline-block align-top logo-spacing logos" />
            </a>
            <button className={`navbar-toggler ${collapsed ? '' : 'toggled'}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setCollapsed(!collapsed)}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item nav-item-spacing">
                        <a className="nav-link nav-link-space" href="#"><span className='menu-text'>Home</span></a>
                    </li>
                    <li className="nav-item nav-item-spacing">
                        <a className="nav-link nav-link-space" href="#"><span className='menu-text'>The Studio</span></a>
                    </li>
                    <li className="nav-item nav-item-spacing">
                        <a className="nav-link nav-link-space" href="#"><span className='menu-text'>Services</span></a>
                    </li>
                    <li className="nav-item nav-item-spacing dropdown">
                        <a className="nav-link nav-link-space dropdown-toggle" href="#" id="projectsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Projects
                        </a>
                        <div className="dropdown-menu" aria-labelledby="projectsDropdown">
                            <a className="dropdown-item" href="#">Projects - 2 Columns</a>
                            <a className="dropdown-item" href="#">Projects - 3 Columns</a>
                        </div>
                    </li>
                    <li className="nav-item nav-item-spacing dropdown">
                        <a className="nav-link nav-link-space dropdown-toggle" href="#" id="productsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Products
                        </a>
                        <div className="dropdown-menu" aria-labelledby="productsDropdown">
                            <a className="dropdown-item" href="#">Products – 2 Columns</a>
                            <a className="dropdown-item" href="#">Products – 3 Columns</a>
                        </div>
                    </li>
                    <li className="nav-item nav-item-spacing">
                        <a className="nav-link nav-link-space" href="#"><span className='menu-text'>The Magazine</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

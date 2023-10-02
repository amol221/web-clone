import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <div className='footerBox'>
            <div className='row'>
                <div className='col-lg-4 col-sm-12 col-md-6 px-2 mb-sm-4'>
                    <img className='fLogo' src='./logo-footer.svg' alt></img>
                </div>

                <div className='d-none d-md-block d-lg-none px-2 col-md-6 mb-sm-4'>
                    <button className='footerBtn'>Got a project? Contact Us</button>
                </div>

                <div className='col-lg-5 col-sm-12 px-2 col-md-12 text-l text-md-center  text-sm-centermt-md-4 mb-sm-4'>
                    <h4>About Avada Digital Agency</h4>
                    <p>Diam integer turpis tristique integer tincidunt cursus dignissim. Euismod libero pellentesque et suspendisse posuere. Lorem quis nec nisl viverra ut velit imperdiet.</p>
                </div>

                <div className='d-md-none d-lg-block col-lg-3 col-sm-12 px-2 col-md-6 mb-sm-4'>
                    <button className='footerBtn'>Got a project? Contact Us</button>
                </div>

            </div>
            <div className='mt-4'>
                <p>© Copyright 2012 - 2023 | Avada Website Builder by ThemeFusion | All Rights Reserved | Powered by WordPress</p>
            </div>
        </div>
    )
}

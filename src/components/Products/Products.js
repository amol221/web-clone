import React from 'react';
import './products.css';


export default function Products() {
    return (
        <div className='containers'>
            <div className='left'>
                <h5> <img src='resources/lit.webp' />   We are a passionate team</h5>
                <h1>We create<br /> amazing digital products</h1>
                <p>Mi imperdiet congue id ante eu lacus ullamcorper blandit mauris. Vulputate nam nulla tristique tellus.</p>
                <div className='orange'>
                <a href='#' className='orange-btn'>Learn More About Us</a>
                </div>
            </div>
            <div className='center'>
                <img src='resources/mobileinhand.jpg' />
            </div>
            <div className='right'>
                <img className='img1' src='resources/workingonlaptop.jpg' />
                <img className='img2' src='resources/graphic.svg' />
            </div>
        </div>
    )
}



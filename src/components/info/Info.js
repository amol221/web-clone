import React from 'react';
import './info.css';

export default function Info() {
    return (
        <div className='containers'>

            <div className='mx-width flex-col'>
                <div className='info'>
                    <div className='icon'><i class="bi bi-download"></i></div>
                    <p className='info-h'>Intelligent brand identity</p>
                    <p className='info-d'>Auctor turpis nulla risus dignissim parturient semper sed ultricies convallis. Mauris blandit sit lorem imperdiet.</p>
                    <a className='info-link' href='#'>Learn more about us</a>
                </div>
                <img className='info-img' src='./resources/info.jpg' alt=''></img>
            </div>
        </div>
    )
}

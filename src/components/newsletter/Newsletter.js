import React from 'react';
import './newsletter.css'

export default function Newsletter() {
    return (
        <div className='containers newsletter-box'>

            <div className='mx-width'>
                <img src='./resources/mobile.jpg' alt=''></img>
                <div className='form'>
                    <h2>We are a full-service digital company</h2>
                    <p className='form-desc'>Nibh enim in purus at habitant. Vitae tortor volutpat aliquam eget nunc sagittis. Viverra odio amet, diam.</p>
                    <input type='text' placeholder='Insert your email ....' className='email'></input>
                    <button className='sub-btn'>Subscribe</button>
                    <p className='tc'>Euismod ipsum pellentesque sit nullam. <a href=''> Imperdiet fermentum </a> justo.</p>
                </div>
            </div>
        </div>
    )
}

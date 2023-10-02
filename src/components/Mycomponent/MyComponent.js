
import React from 'react';
import './MyComponent.css';


export default function MyComponent() {
    return (
        <div className='containers containers-comp'>
            <div className='left left-comp'>
            <div className='container2'>
                         <div className='emoji'>
                     <img src="https://avada.website/digital-agency/wp-content/uploads/sites/160/2021/04/icon-1.png" alt="icon-1" className="img-responsive"/>
                     </div>
                     <div className='emoji-text'>
                     <p>Hello! We are Avada Digital Agency.</p>
                     </div>
                    </div>
                <h1>We create<br /> amazing digital products</h1>
                <div className='container1'>
                         <div className='info-mycomp'>
                     <p>Euismod ipsum pellentesque sit nullam <span className='underline'>fermentum justo.</span></p>
                     </div>
                     <div className='info-mycomp-button'>
                    <a href='#' className='blue-btn'>Learn More About Us</a>
                     </div>
                     </div>
                     <div className="text-comp">
         <a href="#" className="text-center-comp">
             <i className="fas fa-play-circle play-icon-comp"></i> View our new showreel
         </a>
     </div>
            </div>
            <div className='center-comp'>
                <img src="/hero-1.jpg" />
            </div>
            <div className='right-comp'>
                <img className='img1' src="/hero-2.jpg" />
                <img className='img2' src="/graphic-1.png" />
            </div>
        </div>
    )
}




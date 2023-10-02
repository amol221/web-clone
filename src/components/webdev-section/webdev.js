import React from 'react';
import './webdev.css';


function WebDevSection() {
    return (
        <div className="container web-container">
            <div className="div-webdev">
                <img src="/Banner/webdevdivsection.jpg" alt="" className="image-webdev" />
            </div>
            <div className="text-div-webdev">
            <div className="row">
                <div className="col-lg quote-column-webdev">
                    <p className='webdev-text'>Web and mobile development</p>
   
                    <h2 className="headline">We are a full-service digital company</h2>
                 
                    <p>Mauris purus maecenas purus, aliquet lacus varius. Proin venenatis vel cras phasellus condimentum.</p>
                   
                    <div className='info-button'>
                    <a href="#"className="btn btn-primary info-btn">got a project ? Contact Us!</a>
                    </div>
                    </div>
                </div>
            </div>

            </div>
       

    );
}

export default WebDevSection;

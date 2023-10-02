// ServicesComponent.js
import React from 'react';
import "./ServiceProvide.css"

const ServicesProvide = () => {
    return (
        <div className="container-fluid">
            <div className="row serviceprovide ">
                <div className="col-lg-3 col-md-6 col-sm-12 text-center text-center-class mb-4">
                    <i className="bi bi-paperclip bi-class bg-blue" style={{fontSize: '32px'}}></i>
                    <h3 className='h3service'>Web & Mobile</h3>
                    <p>Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-center mb-4 text-center-class ">
                    <i className="bi bi-pie-chart mb-3 bi-class bg-orange" style={{fontSize: '32px'}}></i>
                    <h3 className='h3service'>UX design</h3>
                    <p>Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-center mb-4 text-center-class ">
                    <i className="bi bi-film bi-class  bg-green" style={{fontSize: '32px'}}></i>
                    <h3 className='h3service'>Video production</h3>
                    <p>Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-center mb-4 text-center-class ">
                    <i className="bi bi-cloud mb-3 bi-class bg-violet" style={{fontSize: '32px'}}></i>
                    <h3 className='h3service'>Digital marketing</h3>
                    <p>Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit.</p>
                </div>
            </div>
        </div>
    );
}

export default ServicesProvide;
import React from 'react';
import './floatbtn.css';

export default function FloatBtn() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-start position-fixed floatbtn">
            <button className="btn fbtn2 mb-2">
                <i className="bi bi-stack mb-1"></i>
                <span>Prebuilts</span>
            </button>
            <button className="btn fbtn2">
                <i className="bi bi-cart2 mb-1"></i>
                <span>Buy Now</span>
            </button>
        </div>
    );
}

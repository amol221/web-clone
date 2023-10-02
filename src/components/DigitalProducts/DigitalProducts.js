import React from 'react';
import productData from './Carddata'; 
import "./digitalproducts.css"

export default function DigitalProducts() {
    return (
        <div>
            <div className='label-digi'>
            <p className='product-heading'>Our downloadable digital products</p>
            <a href='#' className='product-link'>View all products available</a>
            </div>
            
            <div className='productContainer'>
                {productData.map((product, index) => (
                    <ProductCard 
                        key={index}
                        imgSrc={product.imgSrc}
                        name={product.name}
                        link={product.link}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}

function ProductCard({ imgSrc, name, link, price }) {
    return (
        <div className='productCard'>
            <img src={imgSrc} alt={name} />
            <div className='productData'>
                <div className='productDetails'>
                    <p className='pName'>{name}</p>
                    <a href={link}>{link}</a>
                </div>
                <div className='productPrice'>{price}</div>
            </div>
        </div>
    );
}

import React from 'react'
import './cards.css'

export default function ProductCards() {
    return (
        <div className='containers'>
            <div className='cards card1'>
                <img src='resources/p1.jpg' alt='' />
                <p className='tag'>Design</p>
                <h4>Power up your design system with an Avada prebuilt website</h4>
                <p className='desc'>Sit amet quam vehicula elementum sed sit dolor sit amet, consectetur adipiscing elit.

                </p>
                <a href='#' className='cr-btn'>Continue Reading</a>
            </div>
            
            <div className='cards caed2'>
                <img src='resources/p2.jpg' alt='' />
                <p className='tag'>Design</p>
                <h4>Power up your design system with an Avada prebuilt website</h4>
                <p className='desc'>Sit amet quam vehicula elementum sed sit dolor sit amet, consectetur adipiscing elit.

                </p>
                <a href='#' className='cr-btn'>Continue Reading</a>
            </div>

            <div className='cards card3'>
                <img src='resources/p3.jpg' alt=''/>
                <p className='tag'>Design</p>
                <h4>Power up your design system with an Avada prebuilt website</h4>
                <p className='desc'>Sit amet quam vehicula elementum sed sit dolor sit amet, consectetur adipiscing elit.

                </p>
                <a href='#' className='cr-btn'>Continue Reading</a>
            </div>

        </div>
    )
}

import React from 'react'
import './BannerLogo.css'

function BannerLogo() {
  return (

    <>
      <p className='bannerlogotext'>We are very fortunate to work with these amazing partners</p>
      <div className='flex flex-div'>
        <div className='Logo-div'>
          <img src="/partners-logo/logo-1.jpg" className="img-responsive" width="100" height="auto" />
        </div>
        <div className='Logo-div'>
          <img src="/partners-logo/logo-2.jpg" className="img-responsive" width="100" height="auto" />
        </div>
        <div className='Logo-div'>
          <img src="/partners-logo/logo-3.jpg" className="img-responsive" width="100" height="auto" />
        </div>
        <div className='Logo-div'>
          <img src="/partners-logo/logo-4.jpg" className="img-responsive" width="100" height="auto" />
        </div>
        <div className='Logo-div'>
          <img src="/partners-logo/logo-5.jpg" className="img-responsive" width="100" height="auto" />
        </div>
        <div className='Logo-div'>
          <img src="/partners-logo/logo-6.jpg" className="img-responsive" width="100" height="auto" />
        </div>
        <div className='Logo-div'>
          <img src="/partners-logo/logo-7.jpg" className="img-responsive" width="100" height="auto" />
        </div>

      </div>
    </>
  )
}

export default BannerLogo;

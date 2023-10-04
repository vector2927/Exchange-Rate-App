import React from 'react'
import usdIcon1 from '../assets/usd-icon-1.png';
import eurIcon1 from '../assets/euro-icon-1.png';
import gbpIcon1 from '../assets/gbp-icon-1.png';
import usdIcon2 from '../assets/usd-icon-2.png';
import cadIcon from '../assets/cad-icon.png';
import eurIcon2 from '../assets/euro-icon-2.png';

const Footer = () => {
  return (
    <div className='footer mt-5 container-fluid'>

      <div className='d-flex justify-content-center'>
          <div className='d-flex flex-row'>
              <div className='d-flex col-2 justify-content-center'>
                <img src={usdIcon1} className='img'></img>
              </div> 
              <div className='d-flex col-2 justify-content-center'>
                <img src={eurIcon1} className='img img2'></img>
              </div> 
              <div className='d-flex col-2 justify-content-center'>
                <img src={gbpIcon1} className='img img3'></img>
              </div> 
              <div className='d-flex col-2 justify-content-center'>
                <img src={usdIcon2} className='img img4'></img>
              </div> 
              <div className='d-flex col-2 justify-content-center'>
                <img src={cadIcon} className='img img5'></img>
              </div> 
              <div className='d-flex col-2 justify-content-center'>
                <img src={eurIcon2} className='img img6'></img>
              </div> 
          </div>
      </div>

      <div className='d-block text-center text-light container-fluid fixed-bottom mb-5'>
          <div>Copy Rights to SMT - "A project task done for Job Application at Career Tech Japan"</div>
      </div>
    </div>
  )
}

export default Footer;
import React from 'react';
import Currencies from './Currencies';

const RateBox = () => {
  return (
    <div className='container-fluid d-flex col-12 justify-content-center'>
        <div className='ratebox text-light py-3'>
            <h2 className='m-0'>Please Choose Amount and Currency</h2>
            <br/>
            <Currencies />
        </div>
        
        
    </div>
  )
}

export default RateBox;
import React from 'react';
import Currencies from './Currencies';

const RateBox = () => {
  return (
    <div className='container-fluid d-flex col-12 justify-content-center'>
        <div className='ratebox text-light pt-3'>
            <h2 className='m-0'>Please Choose Currency and Amount</h2>
            <br/>
            <Currencies />
        </div>
        
        
    </div>
  )
}

export default RateBox;
import React from 'react'
import { useState } from 'react';

const CurrencyResult = (props) => {
    const data = props.data;
    const value = props.value;
        
  return (
    <div className='col-12 d-flex justify-content-center mt-3'>
                {data && data.quotes ? 
                    <div className='container-fluid d-flex flex-row'>
                        <span className='col-6 fs-5 d-flex justify-content-end'>
                            <div>
                                <p>EUR : </p>
                                <p>GBP : </p>
                                <p>CAD : </p>
                            </div>   
                        </span >
                        <span className='col-6 fs-5 d-flex justify-content-start container-fluid'>
                            <div>
                                <p>{(data.quotes.USDEUR * value).toFixed(3)}</p>
                                <p>{(data.quotes.USDGBP * value).toFixed(3)}</p>
                                <p>{(data.quotes.USDCAD * value).toFixed(3)}</p>
                            </div>
                        </span>
                    </div>
                : null}
            </div>
  )
}

export default CurrencyResult;
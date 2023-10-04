import React from 'react'
import { useState } from 'react';

const CurrencyResult = (props) => {
    const data = props.data;
    const value = props.value;
    const currency = props.currency;

    const HtmlText = () => {

        switch (currency){
            
            case "USD" : 
            return(  
                <div className='container-fluid d-flex flex-row'>
                    <span className='col-6 fs-5 d-flex justify-content-end container-fluid'>
                        <div>
                            <p>{(data.quotes.USDEUR * value).toFixed(3)}</p>
                            <p>{(data.quotes.USDGBP * value).toFixed(3)}</p>
                            <p>{(data.quotes.USDCAD * value).toFixed(3)}</p>
                        </div>
                    </span>
                    <span className='col-6 fs-5 d-flex justify-content-start'>
                        <div>
                            <p> EUR</p>
                            <p> GBP</p>
                            <p> CAD</p>
                        </div>   
                    </span >
                    
                </div>
                )
            ;break;

            case "EUR" : 
            return (
                <div className='container-fluid d-flex flex-row'>
                    <span className='col-6 fs-5 d-flex justify-content-end container-fluid'>
                        <div>
                            <p>{(data.quotes.EURUSD * value).toFixed(3)}</p>
                            <p>{(data.quotes.EURGBP * value).toFixed(3)}</p>
                            <p>{(data.quotes.EURCAD * value).toFixed(3)}</p>
                        </div>
                    </span>
                    <span className='col-6 fs-5 d-flex justify-content-start'>
                        <div>
                            <p> USD</p>
                            <p> GBP</p>
                            <p> CAD</p>
                        </div>   
                    </span >
                    
                </div>)
            ;break;

            case "GBP" : 
            return (
                <div className='container-fluid d-flex flex-row'>
                    <span className='col-6 fs-5 d-flex justify-content-end container-fluid'>
                        <div>
                            <p>{(data.quotes.GBPUSD * value).toFixed(3)}</p>
                            <p>{(data.quotes.GBPEUR * value).toFixed(3)}</p>
                            <p>{(data.quotes.GBPCAD * value).toFixed(3)}</p>
                        </div>
                    </span>
                    <span className='col-6 fs-5 d-flex justify-content-start'>
                        <div>
                            <p> USD</p>
                            <p> EUR</p>
                            <p> CAD</p>
                        </div>   
                    </span >
                    
                </div>)
            ;break;

            case "CAD" : 
            return (
                <div className='container-fluid d-flex flex-row'>
                    <span className='col-6 fs-5 d-flex justify-content-end container-fluid'>
                        <div>
                            <p>{(data.quotes.CADUSD * value).toFixed(3)}</p>
                            <p>{(data.quotes.CADGBP * value).toFixed(3)}</p>
                            <p>{(data.quotes.CADEUR * value).toFixed(3)}</p>
                        </div>
                    </span>
                    <span className='col-6 fs-5 d-flex justify-content-start'>
                        <div>
                            <p> USD</p>
                            <p> GBP</p>
                            <p> EUR</p>
                        </div>   
                    </span >
                    
                </div>)
            ;break;

        }   
    }

    
        
  return (
    <div className='col-12 d-flex justify-content-center mt-3'>
                {data && data.quotes ? 
                    <HtmlText />
                : null}
            </div>
  )
}

export default CurrencyResult;
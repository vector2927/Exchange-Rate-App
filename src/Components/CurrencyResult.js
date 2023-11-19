import React from 'react'

const CurrencyResult = (props) => {
    const data = props.data;
    const value = props.value;
    const currency = props.currency;

    const HtmlText = () => {

        switch (currency){
            
            case "USD" : 
            return(  
                <div className='container-fluid'>
                    <div className=' d-flex flex-row justify-content-center'>
                        <span className='col-6 fs-5 d-flex justify-content-end'>
                            <div>
                                <p>{(data.data.EUR * value).toFixed(3)}</p>
                                <p>{(data.data.GBP * value).toFixed(3)}</p>
                                <p>{(data.data.CAD * value).toFixed(3)}</p>
                            </div>
                        </span>
                        <span className='col-6 fs-5 d-flex justify-content-start ms-2'>
                            <div>
                                <p> EUR</p>
                                <p> GBP</p>
                                <p> CAD</p>
                            </div>   
                        </span >
                    </div>  
                </div>
                )
            ;break;

            case "EUR" : 
            return (
                <div className='container-fluid'>
                    <div className=' d-flex flex-row justify-content-center'>
                        <span className='col-6 fs-5 d-flex justify-content-end'>
                            <div>
                                <p>{(data.data.USD * value).toFixed(3)}</p>
                                <p>{(data.data.GBP * value).toFixed(3)}</p>
                                <p>{(data.data.CAD * value).toFixed(3)}</p>
                            </div>
                        </span>
                        <span className='col-6 fs-5 d-flex justify-content-start ms-2'>
                            <div>
                                <p> USD</p>
                                <p> GBP</p>
                                <p> CAD</p>
                            </div>   
                        </span >
                    </div>  
                </div>
                )
            ;break;

            case "GBP" : 
            return (
                <div className='container-fluid'>
                    <div className=' d-flex flex-row justify-content-center'>
                        <span className='col-6 fs-5 d-flex justify-content-end'>
                            <div>
                                <p>{(data.data.USD * value).toFixed(3)}</p>
                                <p>{(data.data.EUR * value).toFixed(3)}</p>
                                <p>{(data.data.CAD * value).toFixed(3)}</p>
                            </div>
                        </span>
                        <span className='col-6 fs-5 d-flex justify-content-start ms-2'>
                            <div>
                                <p> USD</p>
                                <p> EUR</p>
                                <p> CAD</p>
                            </div>   
                        </span >
                    </div>  
                </div>
                )
            ;break;

            case "CAD" : 
            return (
                <div className='container-fluid'>
                    <div className=' d-flex flex-row justify-content-center'>
                        <span className='col-6 fs-5 d-flex justify-content-end'>
                            <div>
                                <p>{(data.data.USD * value).toFixed(3)}</p>
                                <p>{(data.data.GBP * value).toFixed(3)}</p>
                                <p>{(data.data.EUR * value).toFixed(3)}</p>
                            </div>
                        </span>
                        <span className='col-6 fs-5 d-flex justify-content-start ms-2'>
                            <div>
                                <p> USD</p>
                                <p> GBP</p>
                                <p> EUR</p>
                            </div>   
                        </span >
                    </div>  
                </div>
                )
            ;break;

        }   
    }

    
        
  return (
    <div className='col-12 d-flex justify-content-center mt-3'>
                {data && data.data ? 
                    <HtmlText />
                : null}
            </div>
  )
}

export default CurrencyResult;
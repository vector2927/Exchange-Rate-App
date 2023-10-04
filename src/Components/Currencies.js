import React, { useEffect } from 'react';
import { useState } from 'react';
import CurrencyResult from './CurrencyResult';

const Currencies = () => {

    const [currency,setCurrency] = useState("");
    
    const [apiLink, setApiLink] = useState(null);

    const [data,setData] = useState({});
    const handleChange = (e) => {
        const newCurrency = e.target.value;
        setCurrency(newCurrency);
        switch (newCurrency) {
            case 'USD':
              setApiLink('http://apilayer.net/api/live?access_key=aecf8378046a96b292076720f5c9f931&currencies=EUR,GBP,CAD&source=USD&format=1');
              break;
            case 'EUR':
              setApiLink('http://apilayer.net/api/live?access_key=aecf8378046a96b292076720f5c9f931&currencies=USD,GBP,CAD&source=EUR&format=1');
              break;
            case 'GBP':
              setApiLink('http://apilayer.net/api/live?access_key=aecf8378046a96b292076720f5c9f931&currencies=USD,EUR,CAD&source=GBP&format=1');
              break;
            case 'CAD':
              setApiLink('http://apilayer.net/api/live?access_key=aecf8378046a96b292076720f5c9f931&currencies=USD,GBP,EUR&source=CAD&format=1');
              break;
            default:
              setApiLink(null);
          }
    };

    useEffect(() => {
        async function fetchData() {
            if (!apiLink) {
                return;
              }
        
            const response = await fetch(apiLink) ;
            const result = await response.json();
            setData(result);
        }
        fetchData()},[apiLink]);     
    

        
    const [value, setValue] = useState(1);
    
        const handleInputChange = (e) => {
          setValue(e.target.value);
        }
    return (
        <div>
            <div className='d-flex justify-content-center col'>
                <div className='row container-fluid'>
                    <div className='col-md-6 col-sm-12 col-lg-6 justify-content-lg-end justify-content-md-end justify-content-center d-flex'>
                        <input 
                            type='number' 
                            className='form-control currency-amount me-lg-3' 
                            value={value} 
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='col-md-6 col-sm-12 col-lg-6 justify-content-center justify-content-lg-start justify-content-md-start d-flex'>
                        <select  className='form-select currency-list bg-light' 
                        onChange={handleChange}
                        >
                            <option value="" disabled selected>Currency</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="CAD">CAD</option>
                        </select>
                    </div>
                </div>
                
            </div>

            <CurrencyResult data={data} value={value} currency={currency}/>

            

        </div>
    )
}

export default Currencies;
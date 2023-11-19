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
              setApiLink('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Olm7FLckIIO2aYk3Pi3m2WD3EhSVsG8nLwR7ualD&currencies=EUR%2CGBP%2CCAD');
              break;
            case 'EUR':
              setApiLink('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Olm7FLckIIO2aYk3Pi3m2WD3EhSVsG8nLwR7ualD&currencies=USD%2CGBP%2CCAD&base_currency=EUR');
              break;
            case 'GBP':
              setApiLink('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Olm7FLckIIO2aYk3Pi3m2WD3EhSVsG8nLwR7ualD&currencies=CAD%2CEUR%2CUSD&base_currency=GBP');
              break;
            case 'CAD':
              setApiLink('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Olm7FLckIIO2aYk3Pi3m2WD3EhSVsG8nLwR7ualD&currencies=GBP%2CEUR%2CUSD&base_currency=CAD');
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
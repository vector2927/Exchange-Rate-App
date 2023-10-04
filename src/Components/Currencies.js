import React, { useEffect } from 'react';
import { useState } from 'react';
import CurrencyResult from './CurrencyResult';

const Currencies = () => {

    const [currency,setCurrency] = useState("");
    
    const [apiLink, setApiLink] = useState(null);

    const data = {
        success: true,
        terms: "https://currencylayer.com/terms",
        privacy: "https://currencylayer.com/privacy",
        timestamp: 1696396503,
        source: "USD",
        quotes: {
          USDEUR: 0.955105,
          USDGBP: 0.82763,
          USDCAD: 1.369855
        }
      }

    // const [data,setData] = useState({});
    // const handleChange = (e) => {
    //     const newCurrency = e.target.value;
    //     setCurrency(newCurrency);
    //     switch (newCurrency) {
    //         case 'USD':
    //           setApiLink('http://apilayer.net/api/live?access_key=aecf8378046a96b292076720f5c9f931&currencies=EUR,GBP,CAD&source=USD&format=1');
    //           break;
    //         case 'EUR':
    //           setApiLink('http://apilayer.net/api/live?access_key=aecf8378046a96b292076720f5c9f931&currencies=USD,GBP,CAD&source=EUR&format=1');
    //           break;
    //         case 'GBP':
    //           setApiLink('http://apilayer.net/api/live?access_key=aecf8378046a96b292076720f5c9f931&currencies=USD,EUR,CAD&source=GBP&format=1');
    //           break;
    //         case 'CAD':
    //           setApiLink('http://apilayer.net/api/live?access_key=aecf8378046a96b292076720f5c9f931&currencies=USD,GBP,EUR&source=CAD&format=1');
    //           break;
    //         default:
    //           setApiLink(null);
    //       }
    // };

    // useEffect(() => {
    //     async function fetchData() {
    //         if (!apiLink) {
    //             return;
    //           }
        
    //         const response = await fetch(apiLink) ;
    //         const result = await response.json();
    //         setData(result);
    //     }
    //     fetchData()},[apiLink]);     
    

        
    const [value, setValue] = useState(1);
    
        const handleInputChange = (e) => {
          setValue(e.target.value);
        }
    return (
        <div>
            <div className='d-flex justify-content-center col'>
                <select  className='col-12 form-select currency-list bg-light me-5' 
                // onChange={handleChange}
                
                >
                    <option value="" disabled selected>Please Select Currency</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="CAD">CAD</option>
                </select>
                <input 
                    type='number' 
                    className='form-control currency-amount' 
                    value={value} 
                    onChange={handleInputChange}
                />
            </div>

            <CurrencyResult data={data} value={value} />

            

        </div>
    )
}

export default Currencies;
import React, {useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';

const CountryDetails = () => {
    const {countryDetails} =useParams()
    const [countyDetail,setCountryDetail]= useState({})
    useEffect(()=>{
     fetch(`https://restcountries.eu/rest/v2/name/${countryDetails}`)
     .then(res=>res.json())
     .then(data=>setCountryDetail(data))
    },[])
    return (
        <div>
            <h1>this is country details of {countryDetails}</h1>
            <h1>show more </h1>
        </div>
    );
};

export default CountryDetails;
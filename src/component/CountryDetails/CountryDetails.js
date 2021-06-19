import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const CountryDetails = () => {
    const {countryDetails} =useParams()
    const [countyDetail,setCountryDetail]= useState([])
    useEffect(()=>{
        const url=`https://restcountries.eu/rest/v2/name/${countryDetails}`
     fetch(url)
     .then(res=>res.json())
     .then(data=>setCountryDetail(data))
    },[])
    const {capital,region,population}=countyDetail
    return (
        <div>
            <h1>this is country details of {countryDetails}</h1>
            <h1>show more:{capital} </h1>
            <h4>Populations: {population}</h4>
            <h3>{region}</h3>
        </div>
    );
};

export default CountryDetails;
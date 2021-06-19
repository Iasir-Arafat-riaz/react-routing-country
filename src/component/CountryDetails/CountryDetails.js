import React, {useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';

const CountryDetails = () => {
    const {countryDetails} =useParams()
    const [countyDetail,setCountryDetail]= useState({})
    useEffect(()=>{
        const url=`https://restcountries.eu/rest/v2/name/${countryDetails}`
     fetch(url)
     .then(res=>res.json())
     .then(data=>setCountryDetail(data))
    },[])
    const {capital,region}=countyDetail
    return (
        <div>
            <h1>this is country details of {countryDetails}</h1>
            <h1>show more:{capital} </h1>
            <h3>{region}</h3>
        </div>
    );
};

export default CountryDetails;
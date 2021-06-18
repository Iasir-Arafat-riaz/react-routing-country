import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {countryDetails} =useParams()
    return (
        <div>
            <h1>this is country details of {countryDetails}</h1>
            <h2>country details</h2>
        </div>
    );
};

export default CountryDetails;
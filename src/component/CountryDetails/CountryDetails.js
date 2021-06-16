import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const countryDetails = useParams()
    return (
        <div>
            <h1>this is country details</h1>
        </div>
    );
};

export default CountryDetails;
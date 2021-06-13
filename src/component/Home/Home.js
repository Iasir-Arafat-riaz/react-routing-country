import React, { useEffect, useState } from 'react';


const Home = () => {
    const [countries,setCountries] =useState([]);
    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            this is home

            <h2>total {countries.length}</h2>
            {
                countries.map(country=>country.name)
            }
        </div>
    );
};

export default Home;
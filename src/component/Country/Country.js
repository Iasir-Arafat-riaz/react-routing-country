import React from 'react';

const Country = (props) => {
    const{name,capital}=props.country
    const style ={border:"2px solid purple", margin:"2px", borderRadius:"10px"}
    
    return (
        <div style={style}>
            <h1>Country Name : {name} </h1>
            <h2>Capital : {capital}</h2>
        </div>
    );
};

export default Country;
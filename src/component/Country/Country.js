import React from 'react';
import {Link} from "react-router-dom"

const Country = (props) => {
    const{name,capital}=props.country
    const style ={border:"2px solid purple", margin:"2px", borderRadius:"10px"}
    
    return (
        <div style={style}>
            <h1>Country Name : {name} </h1>
            <h2>Capital : {capital}</h2>
            <Link to={`country/${name}`}><button>click here</button></Link>
        </div>
    );
};

export default Country;
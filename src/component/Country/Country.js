import React from 'react';

const Country = (props) => {
    const{name}=props.country
    
    return (
        <div>
            <h1>Country Name : {name} </h1>
        </div>
    );
};

export default Country;
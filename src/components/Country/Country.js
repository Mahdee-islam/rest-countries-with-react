import React from 'react';

const Country = (props) => {
    
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h3>Capital is: { props.capital}</h3>
        </div>
    );
};

export default Country;
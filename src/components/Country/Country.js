import React from 'react';
import './Country.css';

const Country = (props) => {
    /* console.log(props); */
    return (
        <div>
            
            <div className="content">
            {<h2>Name: {props.country.name.common}</h2>}
            <p>Capital is: { props.country.capital}</p>
            <p>Population is: {props.country.population}</p>
            <br />
            <img src={props.country.flags.svg} alt="img"></img>
        </div>
        </div>
    );
};

export default Country;
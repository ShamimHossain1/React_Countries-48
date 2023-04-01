import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area, region, population, name, flags} = props.country
    return (
        <div className='country bg-warning'>
            <h2>country: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <p>Region: {region}</p>
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;
import React from 'react';
import Select from 'react-select';


const CountryNameDropdown = ({handleChange, selectedCountry, countryNames}) => {

    return (
        <Select className="options-dropdown country-name-dropdown" value={selectedCountry} options={countryNames.countries.map(({name}) => ({label: name, value: name}))} onChange={handleChange}/>
    )
}

export default CountryNameDropdown;

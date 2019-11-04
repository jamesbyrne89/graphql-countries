import React from 'react';
import Select from 'react-select';




const options = [{label: "Population", value: "Population"}]

const VariableDropdown = ({handleChange, selectedValue, data}) => {

    return (
        <Select className="options-dropdown country-name-dropdown" value={options[0]} options={options} onChange={handleChange}/>
    )
}


export default VariableDropdown;

import React from 'react';
import Select from 'react-select';




const options = [{label: "Population", value: "Population"}]

const VariableDropdown = ({handleChange, selectedValue, variables}) => {

    return (
        <Select className="options-dropdown country-name-dropdown" value={variables[0]} options={variables} onChange={handleChange}/>
    )
}


export default VariableDropdown;

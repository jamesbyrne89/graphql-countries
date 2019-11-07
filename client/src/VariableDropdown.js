import React from 'react';
import Select from 'react-select';




const VariableDropdown = ({handleChange, selectedValue, variables}) => {

    return (
        <Select className="options-dropdown country-name-dropdown" options={variables} onChange={handleChange}/>
    )
}


export default VariableDropdown;

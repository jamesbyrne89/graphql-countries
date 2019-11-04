import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';




const options = [{label: "Population", value: "Population"}]

const VariableDropdown = ({handleChange, selectedValue, data}) => {

    return (
        <Select className="options-dropdown country-name-dropdown" value={options[0]} options={options} onChange={handleChange}/>
    )
}


export default VariableDropdown;

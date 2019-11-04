import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';




const options = [{label: "Population", value: "Population"}]

const VariableDropdown = () => {


    return (
        <div>Loading...</div>
        // <Select className="options-dropdown country-name-dropdown" value={selectedCountry} options={options} onChange={handleChange}/>
    )
}

export default VariableDropdown;

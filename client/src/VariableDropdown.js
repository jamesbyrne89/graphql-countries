import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';


const COUNTRY_NAMES_QUERY = gql`
{
  countries {
    name
  }
}
`

const POPULATION_QUERY = gql`
query country($name: String!) {
  country(name: $name) {
    population
  }
}`

const options = [{label: "Population", value: "Population"}]

const VariableDropdown = () => {
const {error, loading, data} = useQuery(POPULATION_QUERY, {variables: {name: "Australia"}});

const initialValue = data ? {
    label: data.country.population, value: data.country.population
} : null

const [selectedCountry, setSelectedCountry] = useState(initialValue);

const handleChange = (country) => {
    setSelectedCountry(country);
}

    return (
        loading ? <div>Loading...</div> : console.log(data) || <Select className="options-dropdown country-name-dropdown" value={selectedCountry} options={options} onChange={handleChange}/>
    )
}

export default VariableDropdown;

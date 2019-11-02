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

const CountryNameDropdown = () => {
const {error, loading, data} = useQuery(COUNTRY_NAMES_QUERY);

const initialValue = data ? {
    label: data.countries[0].name, value: data.countries[0].name
} : null

const [selectedCountry, setSelectedCountry] = useState(initialValue);

const handleChange = (country) => {
    setSelectedCountry(country);
}

    return (
        loading ? <div>Loading...</div> : <Select className="options-dropdown country-name-dropdown" value={selectedCountry} options={data.countries.map(({name}) => ({label: name, value: name}))} onChange={handleChange}/>
    )
}

export default CountryNameDropdown;

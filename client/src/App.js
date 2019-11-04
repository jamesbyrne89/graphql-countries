import React, {useState, useEffect} from 'react';
import { useQuery } from '@apollo/react-hooks';
import VariableDropdown from './VariableDropdown'
import CountryNameDropdown from './CountryNameDropdown'
import queries from './queries'
import './App.css';



const App = () => {
  const useCombinedQueries = (name) => {
    const [variable, setVariable] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState('');
    const variableQuery = useQuery(queries.POPULATION_QUERY, {variables: {
      name: selectedCountry || 'Australia'
    }});
   
    const countryNamesQuery = useQuery(queries.COUNTRY_NAMES_QUERY);
  
    const isLoading = countryNamesQuery.loading;

    return {
      setVariable, setSelectedCountry, isLoading, countryNames: countryNamesQuery.data, result: variableQuery.data, refetch: variableQuery.refetch
    }
  }

  const {setVariable, selectedCountry, setSelectedCountry, isLoading, countryNames, result, refetch} = useCombinedQueries(null);

  useEffect(() => {
    refetch({variables: {name: selectedCountry}})
  }, [refetch, selectedCountry])


if (!isLoading) {
  return (
      <div className="App">
        <main>
          <h1>Countries</h1>
                <div className="container">
                <div><span>What is the</span></div>
                <VariableDropdown handleChange={({value}) => setVariable(value)} variable={[{label: 'Australia', value: 'Australia'}]} />
                <div><span>of</span></div>
                <CountryNameDropdown handleChange={({value}) => setSelectedCountry(value)} countryNames={countryNames} />
              </div>
            <output>{result.country.population.toLocaleString()}</output>
        </main>
      </div>

  );
}
else {
  if (isLoading) {
    return <h1>Loading...</h1>
    }
}
}

export default App;

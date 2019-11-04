import React, {useState, useEffect} from 'react';
import { useQuery } from '@apollo/react-hooks';
import VariableDropdown from './VariableDropdown'
import CountryNameDropdown from './CountryNameDropdown'
import queries from './queries'
import './App.css';



const App = () => {
  const useCombinedQueries = (name, varName) => {
    const [variable, setVariable] = useState(varName);
    const [selectedCountry, setSelectedCountry] = useState('');
    const variableQuery = useQuery(queries[variable] || queries.population, {variables: {
      name: selectedCountry || 'Australia'
    }});
   
    const countryNamesQuery = useQuery(queries.COUNTRY_NAMES_QUERY);
  
    const isLoading = countryNamesQuery.loading;

    return {
      setVariable, setSelectedCountry, isLoading, countryNames: countryNamesQuery.data, result: variableQuery.data, refetch: variableQuery.refetch, variable
    }
  }

  const {setVariable, selectedCountry, setSelectedCountry, isLoading, countryNames, result, refetch, variable} = useCombinedQueries(null);

  useEffect(() => {
    refetch({variables: {name: selectedCountry}})
  }, [refetch, selectedCountry])

console.log(Object.keys(queries))
if (!isLoading) {
  return (
      <div className="App">
        <main>
          <h1>Countries</h1>
                <div className="container">
                <div><span>What is the</span></div>
                <VariableDropdown handleChange={({value}) => setVariable(value)} variables={Object.keys(queries).map(key => ({
                  label: key,
                  value: key
                }))} />
                <div><span>of</span></div>
                <CountryNameDropdown handleChange={({value}) => setSelectedCountry(value)} countryNames={countryNames} />
              </div>
            <output>{result.country[variable]}</output>
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

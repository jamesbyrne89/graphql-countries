import React, {useState, useEffect} from 'react';
import { useQuery } from '@apollo/react-hooks';
import VariableDropdown from './components/VariableDropdown'
import CountryNameDropdown from './components/CountryNameDropdown'
import Output from './components/Output'
import queries from './queries'
import './App.css';



const App = () => {
  const useCombinedQueries = (name, varName) => {
    const [variable, setVariable] = useState(varName);
    const [selectedCountry, setSelectedCountry] = useState('');
    console.log(!selectedCountry, queries[variable])
    const variableQuery = useQuery(queries.population, {skip: !selectedCountry,  variables: {
      name: selectedCountry || "Australia"
    }});

    console.log(variableQuery)
   
    const countryNamesQuery = useQuery(queries.COUNTRY_NAMES_QUERY);
  
    const isLoading = countryNamesQuery.loading || variableQuery.loading;

    return {
      setVariable, setSelectedCountry, isLoading, countryNames: countryNamesQuery.data, result: variableQuery.data, refetch: variableQuery.refetch, variable
    }
  }

  const {setVariable, selectedCountry, setSelectedCountry, isLoading, countryNames, result, refetch, variable} = useCombinedQueries(null);

  useEffect(() => {
    refetch({variables: {name: selectedCountry}})
  }, [refetch, selectedCountry])

if (!isLoading) {
  console.log(result)
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
                <CountryNameDropdown handleChange={({value}) => setSelectedCountry(value)} value={selectedCountry ? {label: selectedCountry, value: selectedCountry} : undefined} countryNames={countryNames} />
              </div>
              {result && <Output result={result.country} />}
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

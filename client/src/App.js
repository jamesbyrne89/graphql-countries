import React, {useState, useEffect} from 'react';
import { useQuery, ApolloProvider } from '@apollo/react-hooks';
import VariableDropdown from './VariableDropdown'
import CountryNameDropdown from './CountryNameDropdown'
import queries from './queries'
import './App.css';




console.log(queries.COUNTRY_NAMES_QUERY)
const App = () => {
  const useCombinedQueries = (name) => {
    const [variable, setVariable] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    // const variableQuery = useQuery(queries[name] || queries.POPULATION_QUERY);
   
    const countryNamesQuery = useQuery(queries.COUNTRY_NAMES_QUERY);
  
    const isLoading = countryNamesQuery.loading;
  console.log(countryNamesQuery)
  console.log(countryNamesQuery.loading)
    return {
      setVariable, setSelectedCountry, isLoading, countryNames: countryNamesQuery.data
    }
  }

  const {setVariable, setSelectedCountry, isLoading, countryNames} = useCombinedQueries(null);
  
  const options = [
    {value: 'population', label: 'population'},
  ]

  useEffect(() => {

  }, [])

  console.log(countryNames.data)

if (!isLoading)
  return (
      <div className="App">

        <main>
          <h1>Countries</h1>
            
                <div className="container">

                <div><span>What is the</span></div>
                {/* <VariableDropdown handleChange={({value}) => setVariable(value)} /> */}
                <div><span>of</span></div>
                <CountryNameDropdown handleChange={({value}) => setSelectedCountry(value)} countryNames={countryNames} />
                    {/* <output>{result}</output> */}
              </div>
        </main>
      </div>

  );
}

export default App;

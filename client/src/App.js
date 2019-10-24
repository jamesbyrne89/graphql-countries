import React, {useState} from 'react';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import Select from 'react-select';
import './App.css';


const client = new ApolloClient({
  uri: 'http://localhost:4000/countries'
});

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

const App = () => {
  
  const [variable, setVariable] = useState(null);
  const [country, setCountry] = useState(null);
  const [result, setResult] = useState(null);
  
  const options = [
    {value: 'population', label: 'population'},
  ]

const handleVariableChange = selectedOption => {
  setVariable(selectedOption.value)
}

const handleCountryChange = selectedOption => {
  setCountry(selectedOption.value)
}

  return (
    <ApolloProvider client={client}>
      <div className="App">

        <main>
          <h1>Countries</h1>
            
                <div className="container">

                <div><span>What is the</span></div>
              <Query query={POPULATION_QUERY} variables={{ name: country }}>
              {({loading, error, data}) => (
              loading ? (<span>loading...</span>) : (
                console.log(country, data) ||
                <Select className="options-dropdown country-name-dropdown" value={options[0]} options={options} onChange={handleVariableChange}/>
              ))}
                </Query>
                <div><span>of</span></div>
                <Query query={COUNTRY_NAMES_QUERY}>
                {({loading, error, data}) => (
                  loading ? (<span>loading...</span>) : (
                <Select className="options-dropdown country-property-dropdown" options={data.countries.map(({name}) => ({value: name, label: name}))}  onChange={handleCountryChange}/>
                ))}
                </Query>
                    {/* <output>{result}</output> */}
              </div>
        </main>
      </div>
    </ApolloProvider>
  );
}

export default App;

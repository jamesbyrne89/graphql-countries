import React, {useState} from 'react';
import Select from 'react-select';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import VariableDropdown from './VariableDropdown'
import CountryNameDropdown from './CountryNameDropdown'
import './App.css';


const client = new ApolloClient({
  uri: 'http://localhost:4000/countries'
});


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
                <VariableDropdown />
                <div><span>of</span></div>
                <CountryNameDropdown />
                    {/* <output>{result}</output> */}
              </div>
        </main>
      </div>
    </ApolloProvider>
  );
}

export default App;

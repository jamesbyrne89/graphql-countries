import React, {Fragment} from 'react';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import Select from 'react-select';
import logo from './logo.svg';
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
{
  countries {
    population
  }
}`

const App = () => {

const options = [
  {value: 'Option one', label: 'Option one'},
  {value: 'Option two', label: 'Option two'},
  {value: 'Option three', label: 'Option three'},
]

  return (
    <ApolloProvider client={client}>
      <div className="App">

        <main>
          <h1>Countries</h1>
          <Query query={COUNTRY_NAMES_QUERY}>
            {({loading, error, data}) => (
              loading ? (<span>loading...</span>) : (
              <div className="container">

                <div><span>What is the</span></div>
                <Select  className="options-dropdown country-name-dropdown" options={options}/>
                <div><span>of</span></div>
                <Select className="options-dropdown country-property-dropdown" options={data.countries.map(({name}) => ({value: name, label: name}))}/>

              </div>
            ))}
          </Query>
        </main>
      </div>
    </ApolloProvider>
  );
}

export default App;

import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider, Query} from 'react-apollo';
import Select from 'react-select';
import logo from './logo.svg';
import './App.css';


const client = new ApolloClient({
  uri: '/countries'
})

const App = () => {

const options = [
  {value: 'Option one', label: 'Option one'},
  {value: 'Option two', label: 'Option two'},
  {value: 'Option three', label: 'Option three'},
]

  return (
    <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <main>
        <h1>Countries</h1>
      <div className="container">
        <div><span>What is the</span></div>
        <Select className="options-dropdown country-property-dropdown" options={options}/>
        <div><span>of</span></div>
        <Select  className="options-dropdown country-name-dropdown" options={options}/>
      </div>
      </main>
    </div>
    </ApolloProvider>
  );
}

export default App;

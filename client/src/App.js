import React from 'react';
import Select from 'react-select';
import logo from './logo.svg';
import './App.css';

const App = () => {

const options = [
  {value: 'Option one', label: 'Option one'},
  {value: 'Option two', label: 'Option two'},
  {value: 'Option three', label: 'Option three'},
]

  return (
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
        <Select options={options}/>
        <div><span>of</span></div>
        <Select options={options}/>
      </div>
      </main>
    </div>
  );
}

export default App;

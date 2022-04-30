import React from 'react';
import logo from './bridge-four.png';
import './App.scss';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Larkin</h1>
        <p>Crypto Engineer</p>
        </header>
        <div className="App-body">
          <ul>
            <li>
                Solidity & EVM
            </li>
            <li>
                React
            </li>
            <li>
                Pinata & IPFS
            </li>
            <li>
                Python
            </li>
          </ul>
        </div>
      </div>
    );
}

export default App;

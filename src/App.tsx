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
          <p>
            <h2>Interests</h2>
            Zero-knowledge technology
            <br/><br/>
            Ethereum L2s (especially privacy focused)
            <br/><br/>
            Innovative Web3 L1s
            <br/><br/>
            Empowering the individual through GameFi/P2E
            <br/><br/>
          </p>
          <p>
            <h2>Languages</h2>
            Solidity, Python, Rust, Javascript, Typescript, C/C++
          </p>
          <p>
            <h2>Technologies</h2>
            EVM, Hardhat, React, Ethers JS, Ethers RS, IPFS, Pinata
          </p>
        </div>
      </div>
    );
}

export default App;

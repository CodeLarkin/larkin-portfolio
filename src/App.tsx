import React from 'react';
import logo from './bridge-four.png';
import './App.scss';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="container">
            <h1>Larkin</h1>
            <p className="typewriter">Web3 Engineer</p>
          </div>
        </header>
        <div className="App-body">
          <div>
            <p>
              <h2>Passions</h2>
              I want to be a part of the revolutionary change that decentralized networks and money can bring to the world.
              <br/><br/>

              <h2>Projects</h2>
              Fantomon, CultNFTs, Farmgod Dashboard
              <br/><br/>

              <h2>Interests</h2>
              ZK technology
              <br/><br/>
              Private-by-default networks
              <br/><br/>
              Ethereum L2s
              <br/><br/>
              Innovative Web3 L1s
              <br/><br/>
              GameFi and P2E
              <br/><br/>

              <h2>Languages</h2>
              Solidity, Python, Rust, Javascript, Typescript, C, Bash
              <br/><br/>

              <h2>Technologies</h2>
              EVM, Hardhat, React, Ethers JS, Ethers RS, IPFS, Pinata
              <br/><br/>

            </p>
          </div>
        </div>
      </div>
    );
}

export default App;

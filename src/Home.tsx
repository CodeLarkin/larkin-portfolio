import React from 'react';
import { Link } from 'react-router-dom';

import bridgeFour from './images/bridge-four.png';
import './App.scss';


function Home() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={bridgeFour} className="App-logo" alt="Bridge Four" />
          <h1>Larkin</h1>
          <div className="typewriter-container">
            <p className="typewriter">Web3 Engineer</p>
          </div>
        </header>
        <div className="App-body">
          <div>
            <h2>Mission</h2>
            <p>
              I will be a part of the revolutionary change made possible by decentralized networks and money.
              <br/><br/>
              I will build technologies that empower the individual and improve lives.
              <br/><br/>
            </p>

            <h2>Projects</h2>
            <Link to="/fantomon">Fantomon</Link>, <Link to="/cult">CultNFTs</Link>, <Link to="/farmgod">Farmgod Dashboard</Link>
              <br/><br/>

            <Link to="/about"><h2>Learn more about me</h2></Link>
          </div>
        </div>
      </div>
    );
}

export default Home;

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
              I will be a part of the revolutionary change made possible by decentralized money and networks.
              <br/><br/>
              I will build technologies that empower the individual and improve lives.
              <br/><br/>
            </p>

            <h2>Projects</h2>
            <p>
              Click one of my projects below to learn more!
              <br/><br/>
            </p>
            <Link className="fantomon-title" to="/fantomon">Fantomon</Link>
            <Link className="cult-title"     to="/cult">Cult NFTs</Link>
            <Link className="farmgod-title"  to="/farmgod"><h1 className="farmgod-h1"><span>Farmgod Dashboard</span></h1></Link>
            <br/><br/>

            <h2>About me</h2>
            <Link to="/about">Click here to learn more about me</Link>
          </div>
        </div>
      </div>
    );
}

export default Home;

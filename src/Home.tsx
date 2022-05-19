import React from 'react';
import { Link } from 'react-router-dom';

import bridgeFour from './images/bridge-four.png';

import './App.scss';
import Mission from './Mission';
import Projects from './Projects';


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
            <Mission />

            <Projects />

            <h2>About me</h2>
            <Link to="/about">Click here to learn more about me</Link>
          </div>
        </div>
      </div>
    );
}

export default Home;

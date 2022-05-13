import React from 'react';
import { Link } from 'react-router-dom';

import logo from './images/bridge-four.png';
import './App.scss';


function Home() {
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
              <h2>Mission</h2>
              I will be a part of the revolutionary change that decentralized networks and money bring to the world.
              <br/><br/>
              I will build technologies that empower the individual and improve lives.
              <br/><br/>

              <h2>Philosophy</h2>
              Time is our most valuable resource. I spend my time where my passions are and with the people I love.
              <br/><br/>
              An individual's digital footprint and data belongs in his/her hands.
              <br/><br/>
              Bitcoin and decentralized Web3 economies play a critical role as opt-in alternatives to government-controlled money and economies. Empowering the individual to choose their own money holds governments accountable in their actions.
              <br/><br/>
              Different individuals bring unique experiences and perspectives to the table. One should never be forced to adopt someone else's worldview, culture, or opinion. Diversity enriches a team or community.
              <br/><br/>
              My loyalties lie with people, not companies or nations.
              <br/><br/>

              <h2>About Me</h2>
              I am an engineer with 6 years of experience. I spent 2021 learning to build in the Web3 space. The connections I made with individuals around the globe made me truly appreciate the global nature of this space and how it can bring people together.
              <br/><br/>
              I had already been passionate about the Web3 space, but my experience in 2021 as a developer and community leader for Fantomon compounded my passion.
              <br/><br/>
              <h2>Before Web3</h2>
              Prior to entering the Web3 space, I worked for five years as a software and hardware engineer. I primarily contributed to developer frameworks written in Python. 
              <br/><br/>
              I have loved every team I have worked on, and became close with my mentors and peers.
              <br/><br/>
              I have a Master of Science in Electrical and Computer Engineering.
              <br/><br/>

              <h2>Projects</h2>
              <Link to="/fantomon">Fantomon</Link>, <Link to="/cult">CultNFTs</Link>, <Link to="/farmgod">Farmgod Dashboard</Link>
              <br/><br/>

              <h2>Interests</h2>
              Zero-Knowledge technology
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

export default Home;

// External packages
import React from 'react';
import { Link } from 'react-router-dom';

// Utils
import { LarkinLink } from './utils/Links';


function Resume() {
    return (
      <div className="App">
        <div className="App-body">
          <div>
            <section>
              <h2>Credentials</h2>
              <ul>
                <li>Master of Science in Electrical and Computer Engineering</li>
                <li>6 years of Software Engineering industry experience</li>
                <li>{">"}1 year of engineering experience in Web3</li>
                <li>Co-founder of multiple Web3 projects and communities</li>
                <br/>
              </ul>

              <h2>Interests</h2>
              <ul>
                <li>Zero-Knowledge technology</li>
                <li>Private-by-default networks</li>
                <li>Blockchain Interoperability</li>
                <li>Ethereum L2s</li>
                <li>Innovative Web3 L1s</li>
                <li>GameFi and P2E</li>
                <br/>
              </ul>

              <h2>Languages</h2>
              <p>
                Solidity, Python, Rust, Javascript, Typescript, C, Bash
                <br/><br/>
              </p>

              <h2>Technologies</h2>
              <ul>
                <li>Linux, Git</li>
                <li>EVM, Hardhat, Ethers JS, Ethers RS</li>
                <li>React, Vercel</li>
                <br/>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
}

export default Resume;

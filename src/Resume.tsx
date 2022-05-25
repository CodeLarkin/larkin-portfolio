// External packages
import React from 'react';

// Utils
import { LarkinLink } from './utils/Links';


function Resume() {
    return (
      <div className="App">
        <div className="App-body">
          <div>
            <section>
              <h2>Resume</h2>
              <h3>Credentials</h3>
              <ul>
                <li>Master of Science in Electrical and Computer Engineering - 2016</li>
                <li>6 years of Software Engineering industry experience</li>
                <li>{">"}1 year of engineering experience in Web3</li>
                <li>Co-founder of multiple Web3 projects and communities</li>
                <br/>
              </ul>

              <h3>Interests</h3>
              <ul>
                <li>Zero-Knowledge technology</li>
                <li>Private-by-default networks</li>
                <li>Blockchain interoperability</li>
                <li>Ethereum L2s</li>
                <li>Innovative Web3 L1s</li>
                <li>Application-specific blockchains</li>
                <li>GameFi and P2E</li>
                <br/>
              </ul>

              <h3>Languages</h3>
              <p>
                Solidity, Python, Rust, Javascript, Typescript, C, Bash
                <br/><br/>
              </p>

              <h3>Technologies</h3>
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

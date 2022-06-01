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
                <li>Zero-knowledge protocols</li>
                <li>Private-by-default networks</li>
                <li>Blockchain interoperability</li>
                <li>Bitcoin and Lightning</li>
                <li>Ethereum L2s</li>
                <li>Innovative Web3 L1s</li>
                <li>Application-specific blockchains</li>
                <li>MEV and Flashbots</li>
                <li>DeFi, GameFi and P2E</li>
                <br/>
              </ul>

              <h3>Languages</h3>
              <p>
                Solidity, Python, Rust, Javascript, Typescript, C, Bash, Verilog
                <br/><br/>
              </p>

              <h3>Technologies</h3>
              <ul>
                <li>EVM, Hardhat, Ethers JS, Ethers RS, The Graph, Chainlink VRF</li>
                <li>React, Vercel</li>
                <li>Linux, Git, GitLab CI/CD</li>
                <li>FPGAs, Vivado, Quartus</li>
                <br/>
              </ul>

              <h3>Experience</h3>
              For more information on each of my Web3 projects, select one via the menu on the left.
              <br/><br/>
              <div>
                <div className="resumeLine">
                  <u>Self Employed</u>
                  <div>10/2021 - Present</div>
                </div>
                Web3 Engineer & Project Founder
              </div>
              <ul>
                <li>Fantomon</li>
                <li>Cult NFTs</li>
                <li>Farmgod Dashboard</li>
                <li>The Happies™ by Yeah! Studios™</li>
                <li>Developed Typescript, Brownie and Rust bots for detecting arbitrage opportunities on Fantom</li>
                <br/>
              </ul>

              <div>
                <div className="resumeLine">
                  <u>Pre-Web3 Employment</u>
                  <div>09/2016 - 10/2021</div>
                </div>
                Software and FPGA Engineer
              </div>
              <ul>
                <li>Please <LarkinLink href="mailto:code.larkin@gmail.com">reach out to me directly</LarkinLink> for more details regarding my pre-Web3 employers and experience</li>
                <li>Contributed to development frameworks written in Python and C++ for targeting heterogeneous processing environments including embedded systems and FPGAs</li>
                <li>Implemented compilation frameworks in Python and GNU-Make to abstract away compiler intricacies in the context of heterogeneous processing</li>
                <li>Architected highly parallel FPGA solutions for ingesting signal data into high-speed networks</li>
                <li>Applied machine-learning algorithms via Tensorflow to reconstruct and classify signal data</li>
                <li>As mentioned above, more details are available upon request.</li>
                <br/>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
}

export default Resume;

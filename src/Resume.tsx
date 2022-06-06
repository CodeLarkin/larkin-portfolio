// External packages
import React from 'react';

// Utils
import { LarkinLink, LarkinRouterLink } from './utils/Links';


function Resume() {
    return (
      <div className="App">
        <div className="App-body">
          <div>
            <section className="Resume">
              <h2>Resume</h2>
              <h3>Credentials</h3>
              <hr/>
              <ul>
                <li>Master of Science in Electrical and Computer Engineering - 2016</li>
                <li>6 years of Software Engineering industry experience</li>
                <li>{">"}1 year of engineering experience in Web3</li>
                <li>Cofounder of multiple Web3 projects and communities</li>
                <br/>
              </ul>

              <h3>Interests</h3>
              <hr/>
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
              <hr/>
              <p>
                Solidity, Python, Rust, Javascript, Typescript, C, Bash, Verilog
                <br/><br/>
              </p>

              <h3>Technologies</h3>
              <hr/>
              <p>
                <u>General</u>
                <ul>
                  <li>Linux, Git, GitLab CI/CD</li>
                </ul>
              </p>

              <p>
                <u>Web3</u>
                <ul>
                  <li>EVM, Hardhat, Ethers JS, Ethers RS, The Graph, Chainlink VRF</li>
                </ul>
              </p>

              <p>
                <u>Websites</u>
                <ul>
                  <li>React, Vercel</li>
                </ul>
              </p>

              <p>
                <u>Embedded & Hardware</u>
                <ul>
                  <li>FPGAs, Vivado, Quartus</li>
                  <br/>
                </ul>
              </p>

              <h3>Experience</h3>
              <hr/>
              For more information on any of my Web3 projects, select it via the menu on the left.
              <br/><br/>
              <div>
                <div className="resumeLine">
                  <u>Self Employed</u>
                  <div>10/2021 - Present</div>
                </div>
                Web3 Engineer & Project Founder
              </div>
              <ul>
                <li>Cofounded <LarkinRouterLink to="/fantomon">Fantomon</LarkinRouterLink>, a GameFi trading card game built on the Fantom Opera network</li>
                <li>Designed and implemented a modular <LarkinRouterLink to="/fantomon-dive">ecosystem</LarkinRouterLink> of Solidity smart <LarkinLink href="https://fmons.gitbook.io/fantomon/welcome/contracts">contracts</LarkinLink> for Fantomon including highly interactive and dynamic NFTs, ERC20 farming mechanisms, and more</li>
                <li>Constructed an elaborate React website for tracking Fantomon cards and interacting with them</li>
                <li>Authored <LarkinLink href="https://fmons.gitbook.io">documentation</LarkinLink> and <LarkinLink href="https://fmons.gitbook.io/fantomon/lore/the-quasar-expedition">lore</LarkinLink> for the Fantomon community</li>
                <li>Implemented custom ERC721 contracts and React mint websites for <LarkinRouterLink to="/cult">Cult NFTs</LarkinRouterLink> and <LarkinRouterLink to="/happies">The Happies™</LarkinRouterLink></li>
                <li>Built a multi-protocol and multi-chain DeFi farming tool, the <LarkinRouterLink to="/farmgod">Farmgod Dashboard</LarkinRouterLink>, for harvesting and compounding yields from multiple protocols all at once</li>
                <li>Developed separate Typescript, Python and Rust bots for detecting arbitrage opportunities on Fantom</li>
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
                <li>Mentored interns and managed young engineers on projects ranging from C++ image processing, Python code-generators, and FPGA development</li>
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

// External packages
import React from 'react';

// Images
import fantomonHome from '../images/fantomon/home.png';
import fantomon1 from '../images/fantomon/fantomon.svg';
import trainer2 from '../images/fantomon/trainer.svg';

// Utils
import { LarkinLink, LarkinRouterLink } from '../utils/Links';


function Fantomon() {
    return (
      <div className="App">
        <div className="App-body">
          <section>
            <h2>Fantomon</h2>
            <p>
              This is a passion project of mine that begun in September 2021. I work on this project with cofounder and artist <LarkinLink href="https://twitter.com/RiverBusy">Water (@RiverBusy)</LarkinLink> who had the original idea for the game.
              <br/><br/>
              I am the sole developer for Fantomon and am responsible for the complex ecosystem of smart contracts, as well as the elaborate retro-style React website. This is the largest Web3 project I have worked on as of May 2022.
              <br/><br/>
              Check out the Fantomon website at <LarkinLink href="https://fantomon.net">Fantomon.net</LarkinLink>,
              or dig deeper by browsing our <LarkinLink href="https://fmons.gitbook.io">docs</LarkinLink>.
              <br/><br/>
            </p>

            <h3>About The Game</h3>
            <p>
              Fantomon is a Play-to-Earn Trading Card Game that merges a retro game style with DeFi and Play-to-Earn. The entire game is built on-chain on the Fantom Opera network. All cards, items and resources are tokens on Fantom!
              <br/><br/>
              Fantomons are bizarre creatures from another realm that have started appearing in our universe through some form of "gateway"! We don't know how or why they are here, nor do we understand where they came from. Trainers collect and study Fantomons to improve our understanding of them, maintain the delicate balance and prevent catastrophe.
              <br/><br/>
              Read more lore <LarkinLink href="https://fmons.gitbook.io/fantomon/lore">here</LarkinLink>! Some is professionally written, some is written by community members, and some is written by me.
              <br/><br/>

              If you're interested, <LarkinLink href="https://fantomon.net">Fantomons are still minting!</LarkinLink>
              <br/><br/>
            </p>

            <h3>Gallery Preview</h3>
            <div className="cards">
              <img className="wideImagePreview" src={fantomonHome} alt="Fantomon Homescreen"/>
              <div className="horizontal-centered twoCardImagePreview">
                <img className="cardImagePreview" src={trainer2} alt="Trainer #2"/>
                <img className="cardImagePreview" src={fantomon1} alt="Fantomon #1"/>
              </div>
            </div>
            <p>
              Visit the <LarkinRouterLink to="/fantomon-dive">Fantomon - Deep Dive</LarkinRouterLink> for more visuals of the Fantomon website and cards.
              <br/><br/>
            </p>

            <h3>Let's Get Technical</h3>
            <p>
              The ecosystem of Fantomon Contracts was designed in a modular manner where each contract can probe the <LarkinLink href="https://ftmscan.com/address/0xe3A8104F62E562a0a4402e5Cf9E27E3c3733d80d#code">Fantomon Registry</LarkinLink> to access the latest version of another ecosystem contract. To see various different modules in the Fantomon ecosystem, check out our <LarkinLink href="https://fmons.gitbook.io/fantomon/welcome/contracts">Contracts</LarkinLink> page.
              <br/><br/>
              The "Let's Get Technical" section for Fantomon is large enough to warrant its own page. Visit the <LarkinRouterLink to="/fantomon-dive">Fantomon - Deep Dive</LarkinRouterLink> section to get a better picture of the ecosystem of Fantomon contracts I authored. In that section I dive into dynamically-generated card images, community-made Journeys, per-card royalties based on player effort, pseudorandom minting, Fantomon foods and farming contracts.
              <br/><br/>
            </p>

            <h3>Source Code</h3>
            <p>
              <LarkinLink href="https://fmons.gitbook.io/fantomon/welcome/contracts">Fantomon Solidity Contracts</LarkinLink> developed using Hardhat.
              <br/><br/>
              <LarkinLink href="https://github.com/CodeLarkin/fantomon-website">Fantomon Website</LarkinLink> built with React and Ethers JS (not yet open-source).
              <br/><br/>
            </p>
            <br/>
          </section>
        </div>
      </div>
    );
}

export default Fantomon;

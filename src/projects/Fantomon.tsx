// External packages
import React from 'react';
import { Link } from 'react-router-dom';

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
            <h2 className="h2 fantomon-title">Fantomon</h2>
            <p>
              This is a passion project of mine that begun in September 2021. I work on this project with cofounder and artist Water (@RiverBusy) who had the original idea for the game.
              <br/><br/>
              I am the sole developer for Fantomon and am responsible for the complex ecosystem of smart contracts, as well as the elaborate retro-style React website. This is the largest Web3 project I have worked on as of May 2022.
              <br/><br/>
              Check out the Fantomon website at <LarkinLink href="https://fantomon.net">Fantomon.net</LarkinLink>,
              or dig deeper by browsing our <LarkinLink href="https://fmons.gitbook.io">docs</LarkinLink>.
              <br/><br/>
            </p>
            <h3>Gallery</h3>
            <div className="cards">
              <img className="wideImagePreview" src={fantomonHome} alt="Fantomon Homescreen"/>
              <div className="horizontal-centered twoCardImagePreview">
                <img className="cardImagePreview" src={trainer2} alt="Trainer #2"/>
                <img className="cardImagePreview" src={fantomon1} alt="Fantomon #1"/>
              </div>
            </div>
            <p>
              <br/><br/>
              View the <LarkinRouterLink to="/fantomon-gallery">Fantomon Gallery</LarkinRouterLink> to get a better preview of the website and cards.
              <br/><br/>
            </p>

            <h3>About The Game</h3>
            <p>
              Fantomon is a Play-to-Earn Trading Card Game that merges a retro game style with DeFi and Play-to-Earn. The entire game is built on-chain on the Fantom Opera network. All cards, items and resources are tokens on Fantom!
              <br/><br/>
              Fantomons are bizarre creatures from another realm that have started appearing in our universe through some form of "gateway"! We don't know how or why they are here, nor do we understand where they came from. Trainers collect and study Fantomons to improve our understanding of them, maintain the delicate balance and prevent catastrophe.
              <br/><br/>
              <LarkinLink href="https://fantomon.net">Fantomons are still minting!</LarkinLink>
              <br/><br/>
            </p>

            <h3>Let's Get Technical</h3>
            <h3>Dymically Generated Card Images</h3>
            <p>
              Cards are represented by ERC721 non-fungible tokens. All card images are stored on-chain via their base64 encodings. Token URIs are formed on-chain in Solidity by generating an SVG that overlays dynamic card stats onto encoded card images.
              <br/><br/>
              This allows the cards to merge dynamic on-chain data like XP, HP and other stats with art that was originally made off-chain. My inspiration for on-chain SVGs came from <LarkinLink href="https://www.lootproject.com/">Loot (for Adventurers)</LarkinLink> as well as <LarkinLink href="https://eyeoftruth.io/alchemists">Maxus' Alchemists</LarkinLink>. My latest code for these Solidity-generated card visualizations can be found in the <LarkinLink href="https://ftmscan.com/address/0x62332cf40203c725be736ff8f32f40a9d3af66fb#code">FantomonGraphics</LarkinLink> contract.
              <br/><br/>
            </p>

            <h3>Per-card Royalties Based on Effort</h3>
            <p>
              Section in progress...
              <br/><br/>
            </p>

            <h3>Pseudorandom Minting</h3>
            <p>
              Section in progress...
              <br/><br/>
              Attributes
              <br/><br/>
            </p>

            <h3>Fantomon Foods and Farming</h3>
            <p>
              Section in progress...
              <br/><br/>
              GunkFarm
              <br/><br/>
              HealingRifts
              <br/><br/>
              Quasar
              <br/><br/>
              Feeding
              <br/><br/>
              Mixing
              <br/><br/>
            </p>

            <h3>Community-made Journeys</h3>
            <p>
              Section in progress...
              <br/><br/>
              Journeys
              <br/><br/>
            </p>

            <h3>Source Code</h3>
            <LarkinLink href="https://fmons.gitbook.io/fantomon/welcome/contracts">Fantomon Solidity Contracts</LarkinLink> developed using Hardhat.
            <br/><br/>
            <LarkinLink href="https://github.com/CodeLarkin/fantomon-website">Fantomon Website</LarkinLink> built with React and Ethers JS.
            <br/><br/>

          </section>
        </div>
      </div>
    );
}

export default Fantomon;

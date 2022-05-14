import React from 'react';
import { Link } from 'react-router-dom';

import bridgeFour from './images/bridge-four.png';
import fantomonHome from './images/fantomon/home.png';
import fantomon1 from './images/fantomon/fantomon.svg';
import trainers from './images/fantomon/trainers.png';
import fantomons from './images/fantomon/fantomons.png';
import trainerInspect from './images/fantomon/trainer-inspect.png';
import fantomonInspect from './images/fantomon/fantomon-inspect.png';
import quasar from './images/fantomon/quasar.png';
import healingRifts from './images/fantomon/healing-rifts.png';
import gunkfarm from './images/fantomon/gunk-farm.png';
import './App.scss';

function Fantomon() {
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
            <h2>Fantomon</h2>
            <p>
              This is a passion project of mine, born in 2021. I work on this project with cofounder and artist Water (@RiverBusy) who had the original idea for the game.
              <br/><br/>
              I am the sole developer for Fantomon and am responsible for the complex ecosystem of smart contracts, as well as the elaborate React website.
              <br/><br/>
              Check out the Fantomon website at <a href="https://fantomon.net">Fantomon.net</a>,
              or dig deeper by reading our <a href="https://fmons.gitbook.io">docs</a>.
              <br/><br/>
            </p>
            <h4>Gallery</h4>
            <p>
              <img className="imagePreview" src={fantomonHome} alt="Fantomon Homescreen"/>
              <img className="imagePreview" src={fantomon1} alt="Fantomon #1"/>
              <br/><br/>
              View the <Link to="/fantomon-gallery">Fantomon Gallery</Link> to get a better preview of the website and cards.
              <br/><br/>
            </p>

            <h4>About The Game</h4>
            <p>
              Fantomon is a Play-to-Earn Trading Card Game that merges a retro game style with DeFi and Play-to-Earn. The entire game is built on-chain on the Fantom Opera network. All cards, items and resources are tokens on Fantom!
              <br/><br/>
              Fantomons are bizarre creatures from another realm that have started appearing in our universe through some form of "gateway"! We don't know how or why they are here, nor do we understand where they came from. Trainers collect and study Fantomons to improve our understanding of them, maintain the delicate balance and prevent catastrophe.
              <br/><br/>
            </p>

            <h4>A Technical Aside</h4>
            <p>
              Cards are represented by ERC721 non-fungible tokens. All card images are stored on-chain via their base64 encodings. Token URIs are formed on-chain in Solidity by generating an SVG that overlays dynamic card stats onto encoded card images.
              <br/><br/>
              This allows the cards to merge dynamic on-chain data like XP, HP and other stats with art that was originally made off-chain. My inspiration for on-chain SVGs came from <a href="https://www.lootproject.com/">Loot (for Adventurers)</a> as well as <a href="https://eyeoftruth.io/alchemists">Maxus' Alchemists</a>. My latest code for these Solidity-generated card visualizations can be found in the <a href="https://ftmscan.com/address/0x62332cf40203c725be736ff8f32f40a9d3af66fb#code">FantomonGraphics</a> contract.
              <br/><br/>
            </p>

            <h4>Source Code</h4>
            <a href="https://fmons.gitbook.io/fantomon/welcome/contracts">Fantomon Solidity Contracts</a> developed using Hardhat.
            <br/><br/>
            <a href="https://github.com/CodeLarkin/fantomon-website">Fantomon Website</a> built with React and Ethers JS.
            <br/><br/>

          </div>
        </div>
      </div>
    );
}

export default Fantomon;

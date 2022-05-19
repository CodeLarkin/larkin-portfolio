import React from 'react';
import { Link } from 'react-router-dom';

import bridgeFour from './images/bridge-four.png';
import farmgodFantom from './images/farmgod/fantom.png';
import farmgodMatic from './images/farmgod/matic.png';
import './App.scss';

function Farmgod() {
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
            <h2 className="h1 farmgod-title"><span>FARMGOD DASHBOARD</span></h2>
            <p>
              The Farmgod Dashboard aggregates yield-farming / staking pools from multiple protocols into a single dashboard. It allows you to harvest farm rewards across many protocols all at once and even compound rewards. It also displays balances for many ecosystem tokens in a categorized wallet panel.
              <br/><br/>
              Today the dashboard supports a handful of protocols in the Polygon and Fantom ecosystems, but it is built in a generic way, making it very quick to add protocols and networks.
              <br/><br/>
              This project was my introduction to Web3 development. I had been playing around with DeFi apps for a few months, while doing CryptoZombies and reading up on Solidity. When summer 2021 began, I decided to finally start building something, and so I started with something that would prove useful in my day-to-day Web3 activities.
              <br/><br/>
              Check out the Farmgod Dashboard for yourself at <a href="https://farmgod.finance">farmgod.finance</a>, and when you find bugs, keep in mind that this was my first ever Web3 project, and my first ever website &#128540;.
              <br/><br/>
            </p>
            <h2>Gallery</h2>
            <p>
              <u>Farmgod Dashboard on Fantom</u>
              <br/>
              <img className="galleryImageLong" src={farmgodFantom} alt="Farmgod Fantom"/>
              <br/>
              <u>Farmgod Dashboard on Polygon</u>
              <br/>
              <img className="galleryImage" src={farmgodMatic} alt="Farmgod Matic"/>
              <br/><br/>
            </p>

            <h2>About The Dashboard</h2>
            <p>
              As I dove further into DeFi, I found myself spending too much time harvesting and compounding every day. The Farmgod Dashboard seemed like the perfect opportunity to learn Web3/EVM development while also increasing my efficiency.
              <br/><br/>
              When you "Select Pending" in the dashboard, all pools/farms with pending rewards will be selected. "Harvest Selection" will then generate a Metamask transaction for every one of those pools.
              <br/><br/>
              The wallet panel on the top right shows user balances for many ecosystem tokens and groups them into collapsible categorizes.
              <br/><br/>
            </p>

            <h2>Let's Get Technical</h2>
            <p>
              This project taught me how to interact with EVM contracts via Web3.js (and later Ethers.js) and make use of "multicalls" when making many view-only requests. As my first ever website, this also served as my introduction to React.
              <br/><br/>
              I tend to wonder about solving the "general" problem, even in the early stages of tackling a more focused use-case. Coming from a background of developer frameworks, my mind quickly wandered from "I want to aggregate farm information on Polygon" to "I want to aggregate ALL THE FARM INFORMATION on other chains too".
              <br/><br/>
              And so, the Farmgod Dashboard codebase evolved to allow new farms and even new chains in a plugin manner.
              <br/><br/>
              Since this was my first ever website, I learned quite a bit from Maxus, a friend of mine, who helped me with the styling and animations, and introduced me to React.
              <br/><br/>
            </p>
          </div>
        </div>
      </div>
    );
}

export default Farmgod;

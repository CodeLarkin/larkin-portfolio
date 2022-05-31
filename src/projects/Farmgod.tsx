// External packages
import React from 'react';

// Images
import farmgodFantom from '../images/farmgod/fantom.png';
import farmgodMatic from '../images/farmgod/matic.png';

// Utils
import { LarkinLink } from '../utils/Links';


function Farmgod() {
    return (
      <div className="App">
        <div className="App-body">
          <section>
            <h2>Farmgod Dashboard</h2>
            <p>
              Farmgod is a community of individuals in the Web3 space with a passion for DeFi and GameFi. Founded by <LarkinLink href="https://twitter.com/sourSources">Maxus</LarkinLink>, the Farmgod DAO spans multiple blockchain ecosystems, but is headquartered on Fantom. Contributing to the Farmgod DAO was my introduction to development in the Web3 space and Fantom in particular.
              <br/><br/>
              The Farmgod Dashboard aggregates DeFi farms and pools from multiple protocols into a single dashboard. It allows you to harvest and compound rewards across many protocols all at once. It also displays balances for many ecosystem tokens in a categorized wallet panel.
              <br/><br/>
              Today the dashboard supports a handful of protocols in the Polygon and Fantom ecosystems, but it is built in a generic way, making it very quick to add protocols and networks.
              <br/><br/>
              Check out the Farmgod Dashboard for yourself at <LarkinLink href="https://farmgod.finance">farmgod.finance</LarkinLink>, and when you find bugs, keep in mind that this was my first ever Web3 project, and my first ever website &#128540;.
              <br/><br/>
            </p>

            <h3>Gallery</h3>
            <div className="cards">
              <div className="vertical-centered twoCardImagePreview">
                Farmgod Dashboard on Fantom
                <img className="wideImagePreview" src={farmgodFantom} alt="Farmgod Fantom"/>
              </div>
              <div className="vertical-centered twoCardImagePreview">
                Farmgod Dashboard on Polygon
                <img className="wideImagePreview" src={farmgodMatic} alt="Farmgod Matic"/>
              </div>
              <p>
                When you "Select Pending" in the dashboard, all farms with pending rewards are selected. "Harvest Selection" then generates a Metamask transaction for every one of those farms.
                <br/><br/>
                The wallet panel on the top right shows user balances for many ecosystem tokens and groups them into collapsible categories.
                <br/><br/>
              </p>
            </div>

            <h3>Let's Get Technical</h3>
            <p>
              Created in June 2021, the dashboard was my first Web3 project. I had been playing around with DeFi apps for a few months while doing the CryptoZombies tutorial and reading up on Solidity. Even though I had a full-time job, I decided to finally start building something, and so I started with something that would prove useful in my day-to-day Web3 activities.
              <br/><br/>
              This project taught me how to interact with EVM contracts via Web3.js (and later Ethers.js) and make use of "multicalls" when making many view-only requests. As my first ever website, this also served as my introduction to React and Javascript.
              <br/><br/>
              I tend to wonder about solving the "general" problem, even in the early stages of tackling a more focused use-case. Coming from a background of developer frameworks, my mind quickly wandered from "I want to aggregate farm information on Polygon" to "I want to aggregate ALL THE FARM INFORMATION on other chains too".
              <br/><br/>
              And so, the Farmgod Dashboard codebase evolved to allow new farms and even new chains in a plugin manner.
              <br/><br/>
              Since this was my first ever website, I learned quite a bit from Maxus, a friend of mine, who helped me with the styling and animations, and introduced me to React.
              <br/><br/>
            </p>
          </section>
        </div>
      </div>
    );
}

export default Farmgod;

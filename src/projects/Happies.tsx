// External packages
import React from 'react';

// Images
import myHappiesPfp from '../images/happies/my-happies-pfp.png';
import featured from '../images/happies/happies-featured.jpg';

// Utils
import { LarkinLink } from '../utils/Links';


function Happies() {
    return (
      <div className="App">
        <div className="App-body">
          <section>
            <h2>The Happies™</h2>
            <p>
              The Happies™ (<LarkinLink href="https://twitter.com/HappieFamily">HappieFamily</LarkinLink>) is a fun brand created by a team dedicated to positivity! We have a long term goal of raising funds for humanitarian causes.
              <br/><br/>
              The Happies™ were free to mint on Ethereum Mainnet. The collection of 5000 NFTs minted out in only 4 minutes!
              <br/><br/>
              This fun CC0 collection (all art done in MS Paint), was our happy introduction into the NFT space where we hope to continue building a meaningful community, raise money for good causes, and make a real difference in the world.
              <br/><br/>
              As the sole developer on this team, I was responsible for the mint website as well as the smart contracts.
              <br/><br/>
              Check out the <LarkinLink href="https://thehappies.io">The Happies™ website</LarkinLink>, or take a look on <LarkinLink href="https://opensea.io/collection/thehappies">Opensea</LarkinLink>.
              <br/><br/>
            </p>
            <h3>Gallery</h3>
            <div className="vertical-centered">
              <img className="galleryImage" src={featured} alt="Happies Featured"/>
              My Happie PFP
              <img className="galleryImage" src={myHappiesPfp} alt="Happies PFP"/>
              <br/>
            </div>
            <br/><br/>

            <h3>Let's Get Technical</h3>
            <p>
              The Happies™ contract is a fairly straightforward one. It uses the ERC721A base contract which is a modified version of ERC721 that includes substantial gas optimizations for mint, but with a tradeoff of higher gas for transfers. The contract also includes a few custom features.
              <br/><br/>
              Holders can pay ETH to transform their token. After the transform function is called for a specific tokenId, the tokenURI function toggles to use a different baseURI for that token's metadata and image. The maximum number of tokens that can be transformed is configurable post-deployment, as is the transform price.
              <br/><br/>
              Tokens can be burned. All tokenIds that a user has burned are stored in that user's burn-history array. This enables us to optionally use the onchain list of a user's burned tokens for future NFT collections or contracts.
              <br/><br/>
              The contract implements EIP2981 and can receive payments in the form of ETH or any ERC20 token. When payments are withdrawn from the contract, they are split among the team members according to per-member shares.
            </p>

            <h3>Source Code</h3>
            <p>
              <LarkinLink href="https://etherscan.io/address/0xefB4F583B2b6F0E8C658Dd7675E356D8a30Ac7FF#code">The Happies™ on Etherscan</LarkinLink> developed using Hardhat.
              <br/><br/>
            </p>
            <br/>
          </section>
        </div>
      </div>
    );
}

export default Happies;

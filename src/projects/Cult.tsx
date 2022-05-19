// External packages
import React from 'react';

// Images
import skullysMint from '../images/cult/skullys-mint.png';
import skully2 from '../images/cult/skully-2.png';
import ghostly92 from '../images/cult/ghostly-92.png';

// Sub-components
import Header from '../Header';


function Cult() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
          <div>
            <h1 className="h1 cult-title">Cult NFTs</h1>
            <p>
              &#128367;&#65039; Join the Cult &#128367;&#65039;
              <br/><br/>
              The Cult began as meme in the Farmgod community, its essence aligned with the spooky theme of the Fantom ecosystem. Over time, it turned into an entire community of its own led by legendary artist, graphic designer and community-builder Funeral (@yolofinancial), with some help from me.
              <br/><br/>
              In September of 2021, I approached my friend Funeral and let him know that I would be happy to help launch the first Cult NFTs.
              <br/><br/>
              The Skullys contract was my first ever production-ready contract. It was launched on Fantom Mainnet in October 2021. Shortly afterwards, Summoners were invited to enter the summoning circle and summon a Ghost Companion.
              <br/><br/>
              The Cult remains a thriving community where builders, creators, and degens congregate to support one another and "defend the realm" that is the Fantom ecosystem.
              <br/><br/>
            </p>
            <h2>Gallery</h2>
            <p>
              <u>Skullys... Join the Cult.</u>
              <br/>
              <img className="galleryImage" src={skullysMint} alt="SKULLYS Mint"/>
              <br/>
              <u>My Skully PFP</u>
              <br/>
              <img className="galleryImage" src={skully2} alt="SKULLY 2"/>
              <br/>
              <u>My Ghost Companion</u>
              <br/>
              <img className="galleryImage" src={ghostly92} alt="Ghostly 92"/>
              <br/>
              Ghost Companions are still minting in the <a href="https://ghostgarden.io">Ghost Gharden</a> for any lonely Summoners out there.
              <br/><br/>
            </p>

            <h2>Let's Get Technical</h2>
            <p>
              The Skullys contract was the first Solidity contract I ever deployed to a mainnet (other than an <a href="https://ftmscan.com/address/0x623470fe45d3AF9C53Aa9333C6a6417385130d73#code">experimental helper contract</a> I wrote to help aggregate information for Maxus' Alchemists). In most ways it is just a basic ERC721Enumerable, but it has a cool additional feature.
              <br/><br/>
              When formulating our plan for Skullys, Funeral and I bounced around the idea that holders could share royalties. We decided to split royalties among ourselves and holders of 5 special token IDs. Every time a Skully is sold, royalties are sent to the Skullys Payments contract which splits the payment between the team and the current holders of the 5 special Skullys.
              <br/><br/>
              While exploring this idea, I discovered <a href="https://eips.ethereum.org/EIPS/eip-2981">EIP2981</a>: a standard that lets a token contract communicate per-token royalty information to marketplaces. This proved critical in my later work on Fantomon cards (see <a href="https://fmons.gitbook.io/fantomon/fantomon-cards/royalties">Fantomon Royalties</a> for more information).
              <br/><br/>
              As I moved on to develop the contract for Ghost Companions, I searched for a way to solve the "sniping" problem that plagues NFT projects. Users want to see their NFTs as soon as they mint, but since true randomness is difficult to accomplish on an EVM without something like Chainlink VRF, individuals and bots may try to snipe rare NFTs.
              <br/><br/>
              Skullys followed the "post-mint-reveal" paradigm, where the team randomly orders the NFTs before hand, and sets a provenance hash on the contract, but the NFT images are not actually revealed until the collection mints out. For Ghost Companions, I came up with a pseudorandom mint algorithm that has proven sufficient in light of very limited bot-driven sniping on Fantom. Check out the algorithm and its description <a href="https://github.com/CodeLarkin/ghostlys-contracts/blob/638f72b5ae0470feada35f619388d94cffd84ef9/contracts/Ghostlys.sol#L138">here</a>.
              <br/><br/>
              For Skullys and Ghost Companions, Funeral designed the plain HTML+CSS websites, but I added React, wallet-connection, minting, NFT wallets and other web3 features.
              <br/><br/>
            </p>

            <h2>Source Code</h2>

            <h3>GitHub</h3>
            <a href="https://github.com/CodeLarkin/skullys-contracts">Skullys Contracts and Hardhat Tests</a>
            <br/><br/>
            <a href="https://github.com/CodeLarkin/ghostlys-contracts">Ghost Companion Contracts and Hardhat Tests</a>

            <h3>FTMScan</h3>
            <a href="https://ftmscan.com/address/0x25ff0d27395a7aad578569f83e30c82a07b4ee7d#code">Skullys Contract</a>
            <br/><br/>
            <a href="https://ftmscan.com/address/0xfB391f9a8ab09E95Eb19C670272D411951A04175#code">Skullys Payments ERC2981 Contract</a>
            <br/><br/>
            <a href="https://ftmscan.com/address/0x4eab37d5c62fa3bff8f7a5ffce6a88cfc098749c#code">Ghost Companions Contract</a>
            <br/><br/>
          </div>
        </div>
      </div>
    );
}

export default Cult;
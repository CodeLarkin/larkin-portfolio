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
            The ecosystem of Fantomon Contracts was designed in a modular manner where each contract can probe the <LarkinLink href="https://ftmscan.com/address/0xe3A8104F62E562a0a4402e5Cf9E27E3c3733d80d#code">Fantomon Registry</LarkinLink> to access the latest version of another ecosystem contract. To see various different modules in the Fantomon ecosystem, check out our <LarkinLink href="https://fmons.gitbook.io/fantomon/welcome/contracts">Contracts</LarkinLink> page.
            <br/><br/>
            <h4>Dymically Generated Card Images</h4>
            <p>
              Cards are represented by ERC721 non-fungible tokens. All card images are stored on-chain via their base64 encodings. Token URIs are formed on-chain in Solidity by generating an SVG that overlays dynamic card stats onto encoded card images.
              <br/><br/>
              This allows the cards to merge dynamic on-chain data like XP, HP and other stats with art that was originally made off-chain. My inspiration for on-chain SVGs came from <LarkinLink href="https://www.lootproject.com/">Loot (for Adventurers)</LarkinLink> as well as <LarkinLink href="https://eyeoftruth.io/alchemists">Maxus' Alchemists</LarkinLink>. My latest code for these Solidity-generated card visualizations can be found in the <LarkinLink href="https://ftmscan.com/address/0x62332cf40203c725be736ff8f32f40a9d3af66fb#code">FantomonGraphics</LarkinLink> contract.
              <br/><br/>
            </p>

            <h4>Per-card Royalties Based on Effort</h4>
            <p>
              While designing ways for Fantomon players to earn, one possibility that came to mind was royalties sharing. In particular, I wanted to reward users for the time and resources they would dedicate to the game. This led me down the rabbit hole of per-token royalties and <LarkinLink href="https://eips.ethereum.org/EIPS/eip-2981">EIP2981</LarkinLink>.
              <br/><br/>
              EIP2981 allows you to specify a royalties receiver and percentage per-token. I wanted to take it a step further and split a Fantomon card's royalties among the specific players that put effort into a given card.
              <br/><br/>

              <h5>The Royalties Mechanism</h5>
              A player who levels a card to level 25 locks in 1% lifetime royalties for secondary sales of that card. If that same player levels the card to 50, they lock in another 1% (2% total now). If the card is sold and another player levels it to 75, that new player locks in 1%. The same rules apply for level 100 (which is the max level).
              <br/><br/>
              So, 7% royalties are taken on secondary sales of Fantomon cards. For a specific card, the Fantomon team splits 3%, and the players who level that card split the remaining 4%. For a more detailed explanation along with an example, take a look at the <LarkinLink href="https://fmons.gitbook.io/fantomon/fantomon-cards/royalties">Fantomon Card Royalties</LarkinLink> section of our documentation.
              <br/><br/>

              <h5>How Royalties-Splitting Was Implemented</h5>
              The primary challenge was figuring out how split royalties among a <i>unique</i> set of four players for each Fantomon card. Via EIP2981, an NFT marketplace asks an NFT contract "which address should receive royalties for this token ID, and how much royalties should it be?" The marketplace would then transfer that amount of royalties to the <i>single</i> specified address.
              <br/><br/>
              I was able to solve this problem within the bounds of EIP2981 by deploying a payments splitting contract on-the-fly for a card as it is leveled to 25. So, as a player levels a card to 25 (via feeding or battles), under the hood the <LarkinLink href="https://ftmscan.com/address/0x19D4076DDa5fa81Bd6d4b72Ce354767B93eE350A#code">Fantomon Royalties</LarkinLink> contract deploys a new royalties-splitting contract for that specific card. From then on, that contract receives all royalties for that card and splits them among the team and the players who leveled it.
              <br/><br/>
              To accomplish substantial gas-savings for the player who levels a card to 25, and therefore deploys a royalties-splitting contract, I made use of the <LarkinLink href="https://soliditydeveloper.com/clonefactory">CloneFactory design pattern</LarkinLink>.
              <br/><br/>
            </p>

            <h4>Pseudorandom Minting</h4>
            <p>
              To gamify the minting process, card attributes are pseudorandom. Some card attributes are common (like Trainer homeworld Gunka or an Fantomon type Aqua) and others are very rare (like Trainer class Cosmic Explorer or Ancient Fantomon species Jixpi).
              <br/><br/>
              Of course pseudorandomness is not perfect, but it makes minting more fun and creates some rarity for on-chain card attributes. Further gamifying Fantomon card mint, Trainer attributes and stats affect pseudorandom mint probabilities. In short, stronger Trainer cards (especially those with substantial player-time dedicated to them) have better chances of minting rarer Fantomons. When a player is minting a Fantomon card, they first activate a Trainer to improve their chances of getting a card they want.
              <br/><br/>
              To learn more about Trainer attributes and stats, see the <LarkinLink href="https://fmons.gitbook.io/fantomon/trainer-cards">Trainer Cards</LarkinLink> section of our documentation. For more information on Fantomon attributes and stats, see <LarkinLink href="https://fmons.gitbook.io/fantomon/fantomon-cards">Fantomon Cards</LarkinLink>. Finally, to see how Trainer cards impact Fantomon mint, check the corresponding <LarkinLink href="https://fmons.gitbook.io/fantomon/fantomon-cards/trainer-card-impact-on-fantomon-mint">section</LarkinLink> of our documentation.
              <br/><br/>
            </p>

            <h4>Fantomon Foods and Farming</h4>
            <p>
              Foods are ERC20 tokens that can be fed to a Fantomon to increase their level and stats. Different foods provide different stat "nutrients". There are a handful of ways to earn foods, and foods can be mixed or fed.
              <br/><br/>
              The <LarkinLink href="https://fantomon.net/farm">GunkFarm</LarkinLink> is a classic MasterChef farm <LarkinLink href="https://ftmscan.com/address/0x538f4fb0124f49eec4d3bd8a54b5c743128f2aa5#code">contract</LarkinLink> that lets players earn BlackGunk by providing liquidity for foods on <LarkinLink href="https://app.spiritswap.finance">SpiritSwap</LarkinLink>.
              <br/><br/>
              The <LarkinLink href="https://fantomon.net/rifts">HealingRifts</LarkinLink> is a fully custom non-custodial <LarkinLink href="https://ftmscan.com/address/0x078937ebfe4b994162520de713aea3541e38420a#code">contract</LarkinLink> that allows Trainer card holders to earn EntGunk. Trainers with better attributes earn more rewards.
              <br/><br/>
              The <LarkinLink href="https://fantomon.net/quasar">Quasar</LarkinLink> is another custom <LarkinLink href="https://ftmscan.com/address/0x3f62001ca62c6d0d79c4a91f74dccb7093e2813b#code">contract</LarkinLink> that is an adaptation of the MasterChef contract for ERC721s. Where a MasterChef expects LP addresses, this contract expects ERC721s. A userInfo entry corresponds to an ERC721 token ID instead a user address. Instead of containing an "amount" of tokens staked, a userInfo entry contains a rewards "boost/multipler" for that token ID. Finally, the contract is non-custodial and is therefore really just a gas-efficient mechanism for distributing tokens to ERC721 holders.
              <br/><br/>
              When a Fantomon is fed, the corresponding ERC20 food tokens are burned, and the Fantomon becomes stronger. New foods or partner tokens can be quickly added to the menu via the <LarkinLink href="https://ftmscan.com/address/0xf695fb062A310b9BDbDd7C45B4B6b7479BFCFaE6#code">Fantomon Feeding</LarkinLink> contract. You can browse the <LarkinLink href="https://fmons.gitbook.io/fantomon/tokens/food-menu">Food Menu</LarkinLink> or check out <LarkinLink href="https://www.fantomon.net/feed">feeding</LarkinLink> or <LarkinLink href="https://www.fantomon.net/mix">mixing</LarkinLink> on the site itself!
              <br/><br/>
            </p>

            <h4>Community-made Journeys</h4>
            <p>
              I very much admire the open nature of projects like <LarkinLink href="https://www.lootproject.com/">Loot (for Adventurers)</LarkinLink> and <LarkinLink href="https://rarity.game">Rarity Adventures</LarkinLink>. I knew that there would be certain permissioned aspects of Fantomon (like the ability for battle arenas to modify a card's wins and losses), but I also wanted there to be some completely open aspects to the ecosystem.
              <br/><br/>
              This line of reasoning led me to <LarkinLink href="https://fmons.gitbook.io/fantomon/trainer-cards/courage">Courage</LarkinLink> and <LarkinLink href="https://fantomon.net/journey">Journeys</LarkinLink>. Anybody can create a Journey contract with custom rules and rewards. Trainers can journey once every 12 hours, and each time they journey they can gain up to 1 Courage.
              <br/><br/>
              Within a day or two of launching Trainer cards, a passionate community member <LarkinLink href="https://twitter.com/MrChoupinou">Choupinette</LarkinLink> launched the very first journey to <LarkinLink href="https://twitter.com/TheOldFantoLab">The Old Fanto Lab</LarkinLink>. Since then Choupinette and others have launched a few different Journey variations.
              <br/><br/>
              Journeys have also served as an easy entry point for new Solidity developers to tackle an interesting, fun and fairly simple project.
              <br/><br/>
            </p>

            <h3>Source Code</h3>
            <LarkinLink href="https://fmons.gitbook.io/fantomon/welcome/contracts">Fantomon Solidity Contracts</LarkinLink> developed using Hardhat.
            <br/><br/>
            <LarkinLink href="https://github.com/CodeLarkin/fantomon-website">Fantomon Website</LarkinLink> built with React and Ethers JS (not yet open-source).
            <br/><br/>

          </section>
        </div>
      </div>
    );
}

export default Fantomon;

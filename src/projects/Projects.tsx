import { Link } from 'react-router-dom';

// Images
import farmgodFantom from '../images/farmgod/fantom.png';
import farmgodMatic from '../images/farmgod/matic.png';
import skullysMint from '../images/cult/skullys-mint.png';
import skully2 from '../images/cult/skully-2.png';
import ghostly92 from '../images/cult/ghostly-92.png';
import fantomonHome from '../images/fantomon/home.png';
import trainer2 from '../images/fantomon/trainer.svg';
import fantomon1 from '../images/fantomon/fantomon.svg';


function Projects() {
    return (
        <div>
          <h2>Projects</h2>
          <p>
            Select one of my projects below to learn more!
            <br/>
          </p>
          <div className="cards">
            <Link className="ProjectCard" to="/fantomon">
              <div>
                <h2 className="h2 fantomon-title">Fantomon</h2>
                GameFi trading-card-game built on Fantom.
              </div>
              <div>
                <img className="mediumImagePreview" src={fantomonHome} alt="Fantomon Homescreen"/>
                <br/>
                <img className="mediumImagePreview" src={trainer2} alt="Trainer #2"/>
                <img className="mediumImagePreview" src={fantomon1} alt="Fantomon #1"/>
              </div>
              Collect, Farm, Journey, Battle!
            </Link>

            <Link className="ProjectCard" to="/cult">
              <div>
                <h2 className="h1 cult-title"><b>Cult NFTs</b></h2>
                <p>&#128367;&#65039; Join the Cult &#128367;&#65039;</p>
              </div>
              <div>
                <img className="smallImagePreview" src={skullysMint} alt="SKULLYS Mint"/>
                <br/>
                <img className="mediumImagePreview" src={skully2} alt="SKULLY 2"/>
                <img className="mediumImagePreview" src={ghostly92} alt="Ghostly 92"/>
              </div>
              A community of builders, creators, and degens.
            </Link>

            <Link className="ProjectCard" to="/farmgod">
              <div>
                <h2 className="h2 farmgod-title"><span>FARMGOD</span><br/><span>DASHBOARD</span></h2>
                Multi-protocol yield farming dashboard.
              </div>
              <img className="mediumLargeImagePreview" src={farmgodMatic} alt="Farmgod Matic"/>
              Harvest all your yields at once!
            </Link>
          </div>
        </div>
    );
}
export default Projects;

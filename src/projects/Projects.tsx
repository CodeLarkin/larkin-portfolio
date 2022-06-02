// External packages
import { Link } from 'react-router-dom';

// Images
import trainer from '../images/fantomon/trainer-01.png';
import cult from '../images/cult/skullys-logo.png';
import farmgod from '../images/farmgod/farmgod-logo.png';
import happies from '../images/happies/happies.jpg';


function Projects() {
    return (
        <div>
          <section>
            <h3>Projects</h3>
            <p>
              Select one of my projects below to learn more!
              <br/>
            </p>
          </section>
          <div className="cards">
            <Link className="ProjectCard" to="/fantomon">
              <h3>Fantomon</h3>
              <div className="vertical-centered">
                <img className="projectImagePreview" src={trainer} alt="Trainer"/>
              </div>
              <p>
                GameFi trading-card-game built on Fantom.
                <br/><br/>
                Collect, Farm, Journey, Battle!
              </p>
            </Link>

            <Link className="ProjectCard" to="/cult">
              <h3>The Cult</h3>
              <div className="vertical-centered">
                <img className="projectImagePreview" src={cult} alt="Cult"/>
              </div>
              <p>
                Join the Cult &#128367;&#65039;
                <br/><br/>
                Community of builders, creators, and degens.
              </p>
            </Link>

            <Link className="ProjectCard" to="/farmgod">
              <h3>Farmgod</h3>
              <div className="vertical-centered">
                <img className="projectImagePreview" src={farmgod} alt="Farmgod"/>
              </div>
              <p>
                Community of cross-chain DeFi degens.
                <br/><br/>
                Multi-protocol yield farming dashboard.
              </p>
            </Link>

            <Link className="ProjectCard" to="/happies">
              <h3>The Happies™</h3>
              <div className="vertical-centered">
                <img className="projectImagePreview" src={happies} alt="Happies"/>
              </div>
              <p>
                Free CC0 mint! All art done in MS Paint.
                <br/><br/>
                Even when markets are sad, we all deserve to be happy!
              </p>
            </Link>
          </div>
        </div>
    );
}
export default Projects;

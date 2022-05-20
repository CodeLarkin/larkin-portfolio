import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div>
          <h2>Projects</h2>
          <p>
            Select one of my projects below to learn more!
            <br/>
          </p>
          <div className="vertical-centered">
            <div className="projects">
              <Link className="farmgod-title"  to="/farmgod"><h1 className="farmgod-h1"><span>FARMGOD DASHBOARD</span></h1></Link>
              <Link className="cult-title"     to="/cult"><b>Cult NFTs</b></Link>
              <Link className="fantomon-title" to="/fantomon">Fantomon</Link>
            </div>
            <p>
              Be sure to check out <b className="focused">Fantomon</b>! These are listed in chronological order, but <b className="focused">Fantomon</b> is my most elaborate Web3 project to date.
            </p>
          </div>
        </div>
    );
}
export default Projects;

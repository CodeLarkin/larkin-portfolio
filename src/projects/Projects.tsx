import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div>
          <h2>Projects</h2>
          <p>
            Click one of my projects below to learn more!
            <br/>
          </p>
          <div className="vertical-centered">
            <div className="projects">
              <Link className="farmgod-title"  to="/farmgod"><h1 className="farmgod-h1"><span>FARMGOD DASHBOARD</span></h1></Link>
              <Link className="cult-title"     to="/cult"><b>Cult NFTs</b></Link>
              <Link className="fantomon-title" to="/fantomon">Fantomon</Link>
            </div>
            <p>
              These are ordered roughly in chronological order, but <b>Fantomon</b> is my largest and most complex Web3 project to date.
            </p>
          </div>
        </div>
    );
}
export default Projects;

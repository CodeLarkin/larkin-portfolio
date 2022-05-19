// External packages
import React from 'react';
import { Link } from "react-router-dom";

// Images
import bridgeFour from './images/bridge-four.png';



function Header() {
    return (
      <header className="App-header pointer">
        <Link to="/">
          <img src={bridgeFour} className="App-logo" alt="Bridge Four" />
          <h1>Larkin</h1>
          <div className="typewriter-container">
            <p className="typewriter">Web3 Engineer</p>
          </div>
        </Link>
      </header>
    );
}

export default Header;

// External packages
import React from 'react';
import { Link } from "react-router-dom";


function Header() {
    return (
      <header className="App-header pointer">
        <Link to="/">
          <h1>Larkin</h1>
          <div className="typewriter-container">
            <p className="typewriter">Web3 Engineer</p>
          </div>
        </Link>
      </header>
    );
}

export default Header;

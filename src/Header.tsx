// External packages
import React from 'react';
import { Link } from "react-router-dom";


function Header() {
    return (
      <header className="App-header">
        <Link to="/"><h1>Larkin</h1></Link>
        <div className="typewriter-container">
          <p className="typewriter">Web3 Engineer</p>
        </div>
      </header>
    );
}

export default Header;

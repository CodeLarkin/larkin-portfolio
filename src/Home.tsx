// External packages
import React from 'react';

// Utils
import { LarkinRouterLink } from "./utils/Links";

// Sub-components
import Header from './Header';
import Mission from './Mission';
import Projects from './projects/Projects';


function Home() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
        <div>
            <Mission />
            <Projects />

            <h2>About me</h2>
            <LarkinRouterLink to="/about">Click here to learn more about me</LarkinRouterLink>
        </div>
        </div>
      </div>
    );
}

export default Home;

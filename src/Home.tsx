// External packages
import React from 'react';

// Utils
import { LarkinRouterLink } from "./utils/Links";

// Sub-components
import Mission from './Mission';
import Projects from './projects/Projects';


function Home() {
    return (
      <div className="App">
        <div className="App-body">
        <div>
            <Mission />
            <Projects />

            <section>
              <h2>About me</h2>
              <LarkinRouterLink to="/about">Click here to learn more about me</LarkinRouterLink>
            </section>
        </div>
        </div>
      </div>
    );
}

export default Home;

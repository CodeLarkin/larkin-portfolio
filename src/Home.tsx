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
            <section>
              <h2>My Portfolio</h2>
            </section>
            <Mission />
            <section>
              <h3>Things To Do Here</h3>
              <ul>
                <li>Check out my <LarkinRouterLink to="/resume">resume</LarkinRouterLink></li>
                <li>Click on a project below</li>
                <li>Learn more <LarkinRouterLink to="about">about me</LarkinRouterLink></li>
                <br/>
              </ul>
            </section>

            <Projects />
            <br/><br/>
        </div>
        </div>
      </div>
    );
}

export default Home;

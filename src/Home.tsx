// External packages
import React from 'react';

// Utils
import { LarkinLink, LarkinRouterLink } from "./utils/Links";

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
            <br/>

            <section>
              <h3>Contact or Follow Me</h3>
              <ul>
                <li>Email me at <LarkinLink href="mailto:code.larkin@gmail.com">code.larkin@gmail.com</LarkinLink></li>
                <li>Follow me on <LarkinLink href="https://twitter.com/CodeLarkin">Twitter</LarkinLink></li>
                <li>Track me on <LarkinLink href="https://github.com/CodeLarkin">GitHub</LarkinLink></li>
                <li>Friend me on Discord @ Larkin#5716</li>

              </ul>
              <br/><br/>
            </section>

        </div>
        </div>
      </div>
    );
}

export default Home;

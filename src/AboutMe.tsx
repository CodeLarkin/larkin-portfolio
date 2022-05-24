// External packages
import React from 'react';
import { Link } from 'react-router-dom';

// Images
import chiri from './images/Chiri-Chiri.jpg';

// Utils
import { LarkinLink } from './utils/Links';


function AboutMe() {
    return (
      <div className="App">
        <div className="App-body">
          <div>
            <section>
              <h2>Philosophy</h2>
              <p>
                Time is our most valuable resource. I spend my time where my passions are and with the people I love.
                <br/><br/>
                An individual's digital footprint and data belongs in his/her hands.
                <br/><br/>
                Bitcoin and decentralized Web3 economies play a critical role as opt-in alternatives to government-controlled money and economies. Empowering the individual to choose their own money holds governments accountable in their actions.
                <br/><br/>
                Different individuals bring unique experiences and perspectives to the table. One should never be forced to adopt someone else's worldview, culture, or opinion. Diversity enriches a team or community.
                <br/><br/>
                My loyalties lie with individuals.
                <br/><br/>
                Everyone deserves a chance.
                <br/><br/>
              </p>

              <h2>About Me</h2>
              <p>
                I am an engineer with 6 years of work experience. I spent 2021 learning to build in the Web3 space. The connections I made with individuals around the globe made me truly appreciate the global nature of this space and how it can bring people together.
                <br/><br/>
                I had already been passionate about the Web3 space, but my experience in 2021 as a developer and community leader for Fantomon compounded my passion.
                <br/><br/>
              </p>

              <h2>Before Web3</h2>
              <p>
                Prior to entering the Web3 space, I worked for five years as a software and hardware engineer. I primarily contributed to frameworks written in Python for development targeting embedded systems.
                <br/><br/>
                I have loved every team I have worked on, and became close with my mentors and peers.
                <br/><br/>
                I have a Master of Science in Electrical and Computer Engineering.
                <br/><br/>
              </p>

              <h2>Vim</h2>
              <p>
                I love Vim &#9829;
                <br/><br/>
                The style and many of the colors of this website are inspired by my favorite Vim theme "<LarkinLink href="https://github.com/junegunn/seoul256.vim">seoul256.vim</LarkinLink>".
                <br/><br/>
              </p>

              <h2>Hobbies</h2>
              <p>
                My hobbies include reading and audiobooks, rock climbing, anime and video games
                <br/><br/>
                My favorite book series is <LarkinLink href="https://www.brandonsanderson.com/the-stormlight-archive-series/#THEWAYOFKINGS">"The Stormlight Archive"</LarkinLink>, by Brandon Sanderson.
                <br/><br/>
                My favorite anime is Fullmetal Alchemist.
                <br/><br/>
                My favorite video game is Star Wars, Knights of the Old Republic.
                <br/><br/>
                But to be honest... I spend most of my free time learning new technologies.
                <br/><br/>
              </p>

              <h2>The Pseudonym "Larkin" </h2>
              <div className="vertical-centered">
                <img src={chiri} alt="Chiri-Chiri"/>
              </div>
              <p>
                "Larkin" are little flying crustaceans in my favorite fantasy series, <LarkinLink href="https://www.brandonsanderson.com/the-stormlight-archive-series/#THEWAYOFKINGS">"The Stormlight Archive"</LarkinLink>, by Brandon Sanderson. I feel a deep connection to this series of novels and its characters.
                <br/><br/>
                I cannot go into further detail about why I chose the name Larkin without risking spoilers, but I encourage you to dive into <LarkinLink href="https://www.brandonsanderson.com/">Sanderson's Cosmere</LarkinLink>.
                <br/><br/>
                The logo at the top of this site is from the series as well and symbolizes, among many things, perseverance, the power of unity, and the strength that our burdens can lend us.
                <br/><br/>
                When I find myself going through a rough time, I find solace in the journeys, trials and triumphs of Kaladin, Shallan, Dalinar and others.
                <br/><br/>
                "Life before death."
                <br/>
                "Strength before weakness."
                <br/>
                "Journey before destination."
              </p>
            </section>
          </div>
        </div>
      </div>
    );
}

export default AboutMe;

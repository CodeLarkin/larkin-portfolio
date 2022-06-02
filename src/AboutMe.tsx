// External packages
import React from 'react';

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
              <h2>About Me</h2>
              <p>
                I am an engineer with 6 years of industry experience and a passion for solving problems and learning new skills. I spent 2021 learning to build in the Web3 space. The connections I made with individuals around the globe gave me the confidence and drive to take the leap and build a career at this exciting frontier.
                <br/><br/>
                Prior to 2021 I worked traditional software engineering jobs, but for years had an itching interest in cryptocurrencies. I wanted to take part in this revolution of money, data ownership, human organization, digital identity and privacy. I truly believe that Bitcoin and Web3 can improve lives around the world and I am proud to finally be a part of the change.
                <br/><br/>
              </p>

              <h3>My Philosophy</h3>
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

              <h3>Hobbies</h3>
              <p>
                My hobbies include reading and audiobooks, crypto podcasts, rock climbing, watching anime, playing video games, and jamming on the drums.
                <br/><br/>
                Some of my favorites include:
                <ul>
                  <li>Fantasy book series: <LarkinLink href="https://www.brandonsanderson.com/the-stormlight-archive-series/#THEWAYOFKINGS">The Stormlight Archive</LarkinLink>, by Brandon Sanderson</li>
                  <li>Non-fiction book series: <LarkinLink href="https://en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind">Sapiens: A Brief History of Humankind</LarkinLink>, by Yuval Noah Harari</li>
                  <li>Podcast: <LarkinLink href="https://www.coindesk.com/podcasts/the-breakdown-with-nlw/">The Breakdown</LarkinLink> with <LarkinLink href="https://twitter.com/nlw">NLW</LarkinLink></li>
                  <li>Anime: <LarkinLink href="https://en.wikipedia.org/wiki/Fullmetal_Alchemist:_Brotherhood">Fullmetal Alchemist: Brotherhood</LarkinLink></li>
                  <li>Video game: <LarkinLink href="https://en.wikipedia.org/wiki/Star_Wars:_Knights_of_the_Old_Republic">Star Wars: Knights of the Old Republic</LarkinLink></li>
                </ul>
                But to be honest... I spend most of my free time learning new technologies in the Web3 space.
                <br/><br/>
                And I love Vim! The style and many of the colors of this website are inspired by my favorite Vim theme "<LarkinLink href="https://github.com/junegunn/seoul256.vim">seoul256.vim</LarkinLink>".
                <br/><br/>
              </p>

              <h3>The Pseudonym "Larkin" </h3>
              <div className="vertical-centered">
                <img src={chiri} alt="Chiri-Chiri"/>
                <figcaption>by <LarkinLink href="https://coppermind.net/wiki/Coppermind:Artists/Casta">Casta</LarkinLink></figcaption>
              </div>
              <p>
                "Larkin" are little flying crustaceans in my favorite fantasy series, <LarkinLink href="https://www.brandonsanderson.com/the-stormlight-archive-series/#THEWAYOFKINGS">"The Stormlight Archive"</LarkinLink>, by Brandon Sanderson. I feel a deep connection to this series of novels and its characters.
                <br/><br/>
                I cannot go into further detail about why I chose the name Larkin without risking spoilers, but I encourage you to dive into <LarkinLink href="https://www.brandonsanderson.com/">Sanderson's Cosmere</LarkinLink>.
                <br/><br/>
                The logo at the top left of this site (desktop only) is from the series as well and symbolizes, among many things, perseverance, the power of unity, and the strength that our burdens can lend us.
                <br/><br/>
                When I find myself going through a rough time, I find solace in the journeys, trials and triumphs of Kaladin, Shallan, Dalinar and others.
                <br/><br/>
                "Life before death."
                <br/>
                "Strength before weakness."
                <br/>
                "Journey before destination."
                <br/><br/>
              </p>
            </section>
          </div>
        </div>
      </div>
    );
}

export default AboutMe;

// External packages
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// App style
import './App.scss';

// Utils
import ScrollToTop from './utils/ScrollToTop';
import { LarkinLink } from './utils/Links';

// Sub-components
import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import Fantomon from './projects/Fantomon';
import FantomonGallery from './projects/FantomonGallery';
import Cult from './projects/Cult';
import Farmgod from './projects/Farmgod';
import AboutMe from './AboutMe';


function Layout() {
    const isMobile = window.matchMedia("only screen and (max-width: 800px)").matches;
    const [menuOpen, setMenuOpen] = React.useState(!isMobile);

    return (
      <div className="Layout">
        <BrowserRouter>
          <div className="MenuAndApp">
            <div className={(isMobile && !menuOpen) ? "LonelyMenuButtonContainer" : "MenuParent"}>
              {menuOpen ?
              <div>
                <button onClick={() => setMenuOpen(false)} className={(isMobile && !menuOpen) ? "LonelyMenuButton" : "MenuToggleButton"}>
                  &laquo;
                </button>
              </div>
              :
              <div>
                <button onClick={() => setMenuOpen(true)} className={(isMobile && !menuOpen) ? "LonelyMenuButton" : "MenuToggleButton"}>
                  &#9776;
                </button>
              </div>
              }
              {(!isMobile || menuOpen) &&
                <Menu active={menuOpen} close={() => setMenuOpen(false)}/>
              }
              <div/><div/><div/>
            </div>
            <ScrollToTop/>
            <div className="App">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route index element={<Home />} />
                <Route path="/fantomon"         element={<Fantomon />} />
                <Route path="/fantomon-gallery" element={<FantomonGallery />} />
                <Route path="/cult"             element={<Cult />} />
                <Route path="/farmgod"          element={<Farmgod />} />
                <Route path="/resume"           element={<AboutMe  />} />
                <Route path="/about"            element={<AboutMe  />} />
              </Routes>
              <div className="Footer">
                <LarkinLink href="https://twitter.com/CodeLarkin">Twitter</LarkinLink>
                <LarkinLink href="https://github.com/CodeLarkin">GitHub</LarkinLink>
                <LarkinLink href="https://fantomon.net">Fantomon</LarkinLink>
                <br/><br/>
                Larkin#5716 @ Discord
                <br/><br/>
                <LarkinLink href="https://github.com/CodeLarkin/larkin-portfolio">Website source code (React & Typescript)</LarkinLink>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
}

export default Layout;

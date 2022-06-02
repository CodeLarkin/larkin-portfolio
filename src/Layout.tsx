// External packages
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// App style
import './App.scss';

// Utils
import ScrollToTop from './utils/ScrollToTop';
import { LarkinLink, LarkinRouterLink } from './utils/Links';

// Sub-components
import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import Fantomon from './projects/Fantomon';
import FantomonDive from './projects/FantomonDive';
import Cult from './projects/Cult';
import Farmgod from './projects/Farmgod';
import Happies from './projects/Happies';
import Resume from './Resume';
import AboutMe from './AboutMe';

// Images
import bridgeFour from './images/bridge-four.webp';


function Layout() {
    const isMobile = window.matchMedia("only screen and (max-width: 800px)").matches;
    const [menuOpen, setMenuOpen] = React.useState(false);

    const vimGray = "#3A3A3A";
    const MenuButton = () => {
        // SVG menu open/close buttons here were adapted from PaintSwap's website: https://paintswap.finance
        // Credit to @paintoshi and the @Paint_Swap team
        return (
          <button onClick={() => setMenuOpen(!menuOpen)} className={(isMobile && !menuOpen) ? "LonelyMenuButton" : "MenuToggleButton"}>
            {menuOpen ?
              <svg viewBox="0 0 24 24" width="45px" color="text" xmlns="http://www.w3.org/2000/svg" rotate="0"><path fill="whitesmoke" d="M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z"></path></svg>
            :
              <svg viewBox="0 0 24 24" width="45px" color="text" xmlns="http://www.w3.org/2000/svg" rotate="0"><path fill={isMobile ? vimGray : "whitesmoke"} d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"></path></svg>
            }
          </button>
        );
    }

    return (
      <div className="Layout">
        <BrowserRouter>
          <div className="MenuAndApp">
            <div className={(isMobile && !menuOpen) ? "LonelyMenuButtonContainer" : "MenuParent"}>
              <div className="vertical-left">
                <div className="vertical-centered menuHeaderParent">
                {!isMobile && <Link to="/"><img className="menuLogo" src={bridgeFour} alt="b4"/></Link>}
                <MenuButton/>
              </div>
              </div>
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
                <Route path="/fantomon"      element={<Fantomon />} />
                <Route path="/fantomon-dive" element={<FantomonDive />} />
                <Route path="/cult"          element={<Cult />} />
                <Route path="/farmgod"       element={<Farmgod />} />
                <Route path="/happies"       element={<Happies />} />
                <Route path="/resume"        element={<Resume  />} />
                <Route path="/about"         element={<AboutMe  />} />
              </Routes>
              <div className="Footer">
                <LarkinLink href="https://twitter.com/CodeLarkin">Twitter</LarkinLink>
                <LarkinLink href="https://github.com/CodeLarkin">GitHub</LarkinLink>
                <LarkinLink href="mailto:code.larkin@gmail.com">Email</LarkinLink>
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

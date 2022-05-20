// External packages
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// App style
import './App.scss';

// Utils
import ScrollToTop from './utils/ScrollToTop';
import { LarkinLink } from './utils/Links';

// Sub-components
import Home from './Home';
import Fantomon from './projects/Fantomon';
import FantomonGallery from './projects/FantomonGallery';
import Cult from './projects/Cult';
import Farmgod from './projects/Farmgod';
import AboutMe from './AboutMe';


function Layout() {
    return (
      <div className="Layout">
        <BrowserRouter>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/farmgod"          element={<Farmgod />} />
            <Route path="/cult"             element={<Cult />} />
            <Route path="/fantomon"         element={<Fantomon />} />
            <Route path="/fantomon-gallery" element={<FantomonGallery />} />
            <Route path="/about"            element={<AboutMe  />} />
          </Routes>
        </BrowserRouter>
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
    );
}

export default Layout;

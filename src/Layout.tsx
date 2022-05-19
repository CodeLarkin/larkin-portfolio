import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

import ScrollToTop from './ScrollToTop';
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
          <a href="https://twitter.com/CodeLarkin">Twitter</a>
          <a href="https://github.com/CodeLarkin">GitHub</a>
          <a href="https://fantomon.net">Fantomon</a>
          <br/><br/>
          Larkin#5716 @ Discord
          <br/><br/>
          <a href="https://github.com/CodeLarkin/larkin-portfolio">Website source code</a>
        </div>
      </div>
    );
}

export default Layout;

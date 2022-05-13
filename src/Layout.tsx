import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

import Home from './Home';
import Fantomon from './Fantomon';
import AboutMe from './AboutMe';

function Layout() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/fantomon" element={<Fantomon  />} />
            <Route path="/about" element={<AboutMe  />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default Layout;

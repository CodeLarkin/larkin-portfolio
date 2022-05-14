import React from 'react';
import { Link } from 'react-router-dom';

import bridgeFour from './images/bridge-four.png';
import fantomonHome from './images/fantomon/home.png';
import trainer2 from './images/fantomon/trainer.svg';
import fantomon1 from './images/fantomon/fantomon.svg';
import trainers from './images/fantomon/trainers.png';
import fantomons from './images/fantomon/fantomons.png';
import trainerInspect from './images/fantomon/trainer-inspect.png';
import fantomonInspect from './images/fantomon/fantomon-inspect.png';
import quasar from './images/fantomon/quasar.png';
import healingRifts from './images/fantomon/healing-rifts.png';
import gunkFarm from './images/fantomon/gunk-farm.png';
import journey from './images/fantomon/journey.png';
import './App.scss';

function Fantomon() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={bridgeFour} className="App-logo" alt="Bridge Four" />
          <h1>Larkin</h1>
          <div className="typewriter-container">
            <p className="typewriter">Web3 Engineer</p>
          </div>
        </header>
        <div className="App-body vertical-centered">
            <h2>Fantomon Gallery</h2>
            <img className="galleryImage" src={fantomonHome} alt="Fantomon Homescreen"/>
            <img className="galleryImage" src={trainer2} alt="Trainer #2"/>
            <img className="galleryImage" src={fantomon1} alt="Fantomon #1"/>
            <img className="galleryImage" src={trainers} alt="Trainers"/>
            <img className="galleryImage" src={fantomons} alt="Fantomons"/>
            <img className="galleryImageLong" src={trainerInspect} alt="Trainer Inspect"/>
            <img className="galleryImageLong" src={fantomonInspect} alt="Fantomon Inspect"/>
            <img className="galleryImageXLong" src={gunkFarm} alt="Gunk Farm"/>
            <img className="galleryImage" src={quasar} alt="Quasar"/>
            <img className="galleryImage" src={healingRifts} alt="Healing Rifts"/>
            <img className="galleryImage" src={journey} alt="Journey"/>
        </div>
      </div>
    );
}

export default Fantomon;

// External packages
import React from 'react';

// Images
import fantomonHome from '../images/fantomon/home.png';
import trainer2 from '../images/fantomon/trainer.svg';
import fantomon1 from '../images/fantomon/fantomon.svg';
import trainers from '../images/fantomon/trainers.png';
import fantomons from '../images/fantomon/fantomons.png';
import trainerInspect from '../images/fantomon/trainer-inspect.png';
import fantomonInspect from '../images/fantomon/fantomon-inspect.png';
import quasar from '../images/fantomon/quasar.png';
import healingRifts from '../images/fantomon/healing-rifts.png';
import gunkFarm from '../images/fantomon/gunk-farm.png';
import journey from '../images/fantomon/journey.png';


function FantomonGallery() {
    return (
      <div className="App">
        <div className="App-body">
          <section>
            <h2>Fantomon Gallery</h2>
            <div className="cards">
              <img className="galleryImage" src={fantomonHome} alt="Fantomon Homescreen"/>
              <img className="galleryImage" src={trainer2} alt="Trainer #2"/>
              <img className="galleryImage" src={fantomon1} alt="Fantomon #1"/>
              <img className="galleryImage" src={trainers} alt="Trainers"/>
              <img className="galleryImage" src={fantomons} alt="Fantomons"/>
            </div>
            <div className="cards">
              <img className="galleryImageLong" src={trainerInspect} alt="Trainer Inspect"/>
              <img className="galleryImageLong" src={fantomonInspect} alt="Fantomon Inspect"/>
              <img className="galleryImageXLong" src={gunkFarm} alt="Gunk Farm"/>
            </div>
            <div className="cards">
              <img className="galleryImage" src={quasar} alt="Quasar"/>
              <img className="galleryImage" src={healingRifts} alt="Healing Rifts"/>
              <img className="galleryImage" src={journey} alt="Journey"/>
            </div>
          </section>
        </div>
      </div>
    );
}

export default FantomonGallery;

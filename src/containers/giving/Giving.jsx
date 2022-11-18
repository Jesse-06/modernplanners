import React from 'react';
import givingImage from '../../assets/giving.png';
import './giving.css';

const Giving = () => (
  <div className="gpt3__giving section__padding" id="giving">
    
    <div className="gpt3__giving-content">
      <h4>Reforesting the Globe </h4>
      <h1 className="gradient__text">How your purchase <br /> plants trees</h1>
      <p>2021 saw One Tree Planted double its impact across the board. They planted over 23 million trees through 166 projects in 42 countries around the globe. And are committed to planting another 25 million by the years end!</p>
      <a href="https://onetreeplanted.org/pages/global-forest-watch" target="_blank" rel="noopener noreferrer">
      <h4>Learn More</h4>
      </a>
    </div>
    <div className="gpt3__giving-image">
      <img src={givingImage} alt="giving" />

    </div>
  </div>
);

export default Giving;


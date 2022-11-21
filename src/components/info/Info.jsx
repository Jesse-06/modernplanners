import React from 'react';
import './info.css';
import treeImage from '../../assets/knockout.png';

const Info = ({ imgUrl, date, text }) => (
  <div className="gpt3__trees-container_info">
    <div className="gpt3__trees-container_info-image">
      <img src={imgUrl} alt="One Tree Planted volunteers and workers" />
    </div>
    <div className="gpt3__trees-container_info-content">
      <div>
        <h4>{date}</h4>
        <p>{text}</p>
      </div>
      <div className="gpt__trees-container_info-image img">
      <img src={treeImage} alt="One Tree Planted product badge"/>
      </div>
      <a href="https://onetreeplanted.org/" target="_blank" rel="noopener noreferrer">
      <h3>onetreeplanted.org</h3>
      </a>
    </div>
  </div>
);

export default Info;

import React from 'react';
import { one, tree, knockout, planted } from './imports';
import './partner.css';

const Partner = () => (
  <div className="gpt3__partner section__padding">
    <div>
      
      <img src={one} alt="Reforestation logo"/>
    </div>
    <div>
      <img src={tree} alt="One Tree Planted logo"/>
    </div>
    <div>
      <img src={knockout} alt="One Tree Planted product badge"/>
    </div>
    <div>
      <img src={planted} alt="One Tree Planted logo white"/>
    </div>
    
  </div>
);

export default Partner;
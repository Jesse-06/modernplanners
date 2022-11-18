import React from 'react';
import { one, tree, knockout, planted } from './imports';
import './partner.css';

const Partner = () => (
  <div className="gpt3__partner section__padding">
    <div>
      
      <img src={one} alt="OneTreePlanted"/>
    </div>
    <div>
      <img src={tree} alt="OneTreePlanted"/>
    </div>
    <div>
      <img src={knockout} alt="OneTreePlanted"/>
    </div>
    <div>
      <img src={planted} alt="OneTreePlanted"/>
    </div>
    
  </div>
);

export default Partner;
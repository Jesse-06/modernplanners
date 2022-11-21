import React from 'react'
import { Feature } from '../../components';
import './whatGP3.css';


const WhatGP3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3"> 
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Designer Notebooks and Planners" text="Every year we introduce a new line of covers and replenish the previous years planners with the updated calendar year. Found a cover you like? We'll keep you up-to-date before your current yearly planner runs out, with seamless notifications. Hassle-free purchasing with one-click redirect to our inventory."/>
    </div>
    <div className=" gpt3__whatgpt3-heading">
      <h3 className=" gradient__text"> Shop our variety of selections: Kids, Floral Designs, Ornamental Patterns, Nature Inspired.</h3>
      <a href="https://www.dropbox.com/s/qdbw55swolpo0tn/Virtual%20Catalogue.pdf?dl=0" target="_blank" rel="noopener noreferrer" alt="virtual catalogue">
      <p> Become A Distributor</p>
      </a>
    </div>
    <div className="gpt3__whatgpt3-container"> 
      <Feature title = "Kids" text="Perfect for birthdays and back-to-school shopping."/>
      <Feature title = "Floral Designs" text="Wow your special someone with one of our beautiful floral-imbued covers."/>
      <Feature title = "Ornamental Patterns and Nature Inspired" text="Enjoy a scenic getaway without leaving your desk with a touch of nature from Modern Planners."/>
    </div>
    </div>
  )
}

export default WhatGP3;
import React from 'react'
import { Feature } from '../../components';
import './features.css';


const featuresData = [
{ 
  title: 'Elegant Designs',
  text: 'Our curated covers are specially designed for beauty and quality.',
},

{ 
  title: 'Annual Arrivals',
  text: 'Each year we replenish our covers and feature a new stock of assortments.',
},

{ 
  title: 'A Perfect Gift',
  text: 'Everyone can appreciate a thoughtful notepad and or agenda...on the go!',
},

{ 
  title: 'One of a Kind',
  text: 'Only available through our partners and their select distributors.',
},


]

const Features = () => {
  return (
   <div className="gpt3__features section__padding"  id="features">
    <div className=" gpt3__features-heading"> 
    <h3 className="gradient__text"> Get Organized in Style!</h3>
    <a href="#blog">
    <p>Shop Today</p>
    </a>
    </div>  
    <div className="gpt3__features-container">
    {featuresData.map((item, index)=> 
    (<Feature title={item.title} text={item.text} key={item.title + index} />))}

    </div>
  </div>
  )
}

export default Features;
import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
     <div className="gpt3__possibility-image"> 
     <a href="#blog">
      <img src={possibilityImage} alt="Variety of daily planners 2023"/>
      </a>
     </div>
    <div className="gpt3__possibility-content"> 
      <h5>Choose from Over 100 Variety of Assortments</h5>
      <h3 className="gradient__text">Mix and Match Dimensions with Styles. </h3>
      <p> Our selections include hardcovers and paperbacks with page counts of: 120, 180, 198, 200. Sizes include 6" X 9" and 7.2" X 10.3"; 7" X 10". All of our pages are 36 lined,
college ruled. Perfect as: journals, diaries, notebooks, logbooks, and memo pads. A great
choice for: office planning, back to school, university students, midterm planning, task
management, losing weight, financial planning and maintenance tracking.</p>
      <a href="#home"><h5> Request to be Notified of New Arrivals </h5></a>
    </div>
    </div>
  )
}

export default Possibility;
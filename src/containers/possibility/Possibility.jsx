import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
     <div className="gpt3__possibility-image"> 
     <a href="#blog">
      <img src={possibilityImage} alt="possibility"/>
      </a>
     </div>
    <div className="gpt3__possibility-content"> 
      <h4>Choose from Over 100 Variety of Assortments</h4>
      <h1 className="gradient__text">Mix and Match Dimensions with Styles. </h1>
      <p> Our selections include hardcovers and paperbacks with page counts of: 120, 180, 198, 200. Sizes include 6" X 9" and 7.2" X 10.3". All of our pages are 36 lined, college ruled. Perfect as: Writing Journals, Diaries, Notebooks, Agendas, and Planners. A great choice for: Office Planning, Back to School, University Students, Midterm Planning, Task Management, Dieting and Exercise Tracking.</p>
      <a href="#home"><h4> Request to be Notified of New Arrivals </h4></a>
    </div>
    </div>
  )
}

export default Possibility;
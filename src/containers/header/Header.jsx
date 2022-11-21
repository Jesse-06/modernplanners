import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className=" gpt3__header section__padding" id="home">
      <div className=" gpt3__header-content"> 
        <h1 className=" gradient__text"> Artisan Designer Notebooks and Planners</h1>
        <p> One of a kind, hand designed, artisan planners and notebooks offered exclusively by Modern Planners. Our modern <a href="https://www.modernplanners.co/#brand">planners</a> and <a
href="https://www.modernplanners.co/#blog">notebooks</a> make for the perfect moment to
celebrate a special occasion, birthday, holiday or a wonderful addition to any workstation. Subscribe to our mailing list so you don't miss out on our latest arrivals and best selling
notebooks & planners for your daily life!</p>
        <div className=" gpt3__header-content__input"> 
        <form action="https://formsubmit.co/contact@modernplanners.co" method="POST">
        <input type="hidden" name="_subject" value="Modern Planners Submission!"/>
        <input type="hidden" name="_captcha" value="false"/>
        <input type="email" name= "email" placeholder="Your Email Address..." required/>
        <button type="submit">Subscribe</button> 
        </form>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt= "Shop sustainable planners"/>
          <p>Planners & Notebooks...that plant trees!</p>
        </div>
      </div>
      <div className="gpt3__header-image"> 
      <a href="#brand">
        <img src={ai} alt="Shop 2023 daily planner"/>
        </a>
        </div>
    </div>
  )
}

export default Header;


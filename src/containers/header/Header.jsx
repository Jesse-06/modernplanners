import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className=" gpt3__header section__padding" id="home">
      <div className=" gpt3__header-content">
        <h1 className=" gradient__text"> Artisan Designer Notebooks and Planners</h1>
        <p> Each <a href="https://www.modernplanners.co/#brand">planner</a> and <a
          href="https://www.modernplanners.co/#blog">notebook</a> in our collection is a work of art, created with passion and care. From elegant cover designs to thoughtfully designed interior layouts, our products are a true reflection of artistic craftsmanship. Whether you're a professional, student, or creative enthusiast, our planners and notebooks make the perfect gift to celebrate a special occasion, birthday, holiday, or simply as a wonderful addition to any workstation.<br />
          <br />

          By subscribing to our mailing list, you'll stay informed and never miss out on our latest arrivals and best-selling notebooks and planners. Be the first to explore our newest designs, limited editions, and exclusive offers. We'll keep you inspired with fresh ideas, productivity tips, and creative prompts to enhance your daily routines.One of a kind, hand designed, artisan planners and notebooks offered exclusively by Modern Planners.</p>
        <div className=" gpt3__header-content__input">
          <form action="https://formsubmit.co/contact@modernplanners.co" method="POST">
            <input type="hidden" name="_subject" value="Modern Planners Submission!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="email" name="email" placeholder="Your Email Address..." required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="Shop sustainable planners" />
          <p>Planners & Notebooks...that plant trees!</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <a href="#brand">
          <img src={ai} alt="Shop 2023 daily planner" />
        </a>
      </div>
    </div>
  )
}

export default Header;


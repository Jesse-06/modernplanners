
import React from 'react';
import './article.css';


const Article = ({ imgUrl, price, title }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="Modern Planners notebooks and planners" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{price}</p>
        <h3>{title}</h3>
      </div>
      <p>Shop Now</p>
    </div>
  </div>
);

export default Article;
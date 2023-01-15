import React from "react";
import "./blog.css";
import { Article } from "../../components";
import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
  blog06,
  blog07,
  blog08,
  blog09,
  blog10,
  blog11,
  blog12,
  blog13,
  blog14,
  blog15,
  blog16,
  blog17,
  blog18,
  blog19,
  blog124,
  blog1020,
  blog1021,
  blog1022,
  blog1024,
} from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h2 className="gradient__text"> Notebooks </h2>
      </div>
      <div className="gpt3__blog-container">
        <ArticlesGrid />
      </div>
    </div>
  );
};

export default Blog;

const ArticlesGrid = () => {
  return (
    <>
      <a
        href="https://www.amazon.com/dp/B09PMBSY67"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog03}
          price="$9.99"
          title="Futuristic Notebook | 6 X 9 | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09PM8BQGY"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog03}
          price="$10.99"
          title="Futuristic Notebook | 7.2 X 10.3 | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09Q9GZ468"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog04}
          price="$10.99"
          title="Zen Inspired Notebook | 7.2 X 10.3 | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09PRZ1Y5C"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog04}
          price="$9.99"
          title="Zen Inspired Notebook | 6 X 9 | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09QP3K99K"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog04}
          price="$16.99"
          title="Zen Inspired Notebook | 6 X 9 Hardcover | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09QP3K97S"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog05}
          price="$17.99"
          title="Floarl Patterned (Green) Notebook | 6 X 9 Hardcover| 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B0B455DL4F"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog05}
          price="$8.99"
          title="Floarl Patterned (Green) Notebook | 6 X 9 | 120 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09Q3PDPK3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog08}
          price="$9.99"
          title="Hungry Kitty Notebook | 6 X 9 | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09QP86BXJ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog124}
          price="$16.99"
          title="Hungry Kitty Notebook | 6 X 9 Hardcover | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09Q8WN1RS"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog09}
          price="$10.99"
          title="A Drop Notebook | 7.2 X 10.3 | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09Q4CNR4D"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog09}
          price="$9.99"
          title="A Drop Notebook | 6 X 9 | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09QFFP5B1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog11}
          price="$8.99"
          title="Forest Mist Writing Journal | 6 X 9 | 120 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09QJW67J4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog11}
          price="$10.99"
          title="Forest Mist Writing Journal | 7.2 X 10.3 | 180 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09PW7LYYB"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog10}
          price="$10.99"
          title="Cosmic Notebook | 6 X 9 | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09PP3GKC4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog10}
          price="$10.99"
          title="Cosmic Notebook | 7.2 X 10.3 | 180 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09QJXBJGR"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog16}
          price="$8.99"
          title="Retro Sun Hue Notebook | 6 X 9 | 120 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09PM787V4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog02}
          price="$10.99"
          title="Ornamental Patterned | 7.2 X 10.3 | 180 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09PVW2SXZ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog02}
          price="$9.99"
          title="Ornamental Patterned | 6 X 9 | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09QK7K7CW"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog12}
          price="$8.99"
          title="Golden Garden Notebook | 6 X 9 | 120 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09QNSPNFV"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog07}
          price="$8.99"
          title="Mountain Breeze Notebook | 6 X 9 | 120 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B0BHL6BYN4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog1020}
          price="$9.99"
          title="English Bulls Notebook| 6 X 9 | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B0BHKWKM7F"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog1021}
          price="$9.99"
          title="The Artist Notebook | 6 X 9 | 200 Pages"
        />
      </a>

      <a
        href="https://www.amazon.com/dp/B09PW8L8JH"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog01}
          price="$8.99"
          title="Floral Patterned (Tan) Notebook | 6 X 9 | 120 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09PM89XM8"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog01}
          price="$10.99"
          title="Floral Patterned (Tan) Notebook | 7.2 X 10.3 | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09QF8JMN8"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog06}
          price="$10.99"
          title="Land of the Rising Sun Notebook | 7.2 X 10.3 | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09QF6Q3BY"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog06}
          price="$9.99"
          title="Land of the Rising Sun Notebook | 6 X 9 | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09QF3MWPK"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog06}
          price="$8.99"
          title="Land of the Rising Sun Notebook | 6 X 9 | 120 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09PM786H8"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog13}
          price="$9.99"
          title="Writing Journal | 6 X 9 | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09PVYK2PQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog13}
          price="$8.99"
          title="Writing Journal | 6 X 9 | 120 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09PMBSWQ3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog13}
          price="$10.99"
          title="Writing Journal | 7.2 X 10.3 | 180 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09PPH4M6S"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog14}
          price="$9.99"
          title="Colorful Rain Notebook| 6 X 9 | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09Q8WM2PD"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog14}
          price="$10.99"
          title="Colorful Rain Notebook| 7.2 X 10.3 | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09PMFX3QX"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog15}
          price="$10.99"
          title="Patterned Yellow and Purple | 7.2 X 10.3 | 180 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09Q61D3BC"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog15}
          price="$9.99"
          title="Patterned Yellow and Purple | 6 X 9 | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09PW4V3VN"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog17}
          price="$10.99"
          title="Forest-Green, Teal and White Polkadot | 7.2 X 10.3 | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09Q96CWS3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog17}
          price="$9.99"
          title="Forest-Green, Teal and White Polkadot | 6 X 9 | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09QNCY28D"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog02}
          price="$17.99"
          title="Ornamental Patterned | 6 X 9 Hardcover| 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09QF44W6C"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog18}
          price="$8.99"
          title="Personal Prayer Journal | 6 X 9 | 120 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B09QFDQTHV"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog19}
          price="$8.99"
          title="Forest Green Elegant Patterned | 6 X 9 | 120 Pages"
        />
      </a>
      
      <a
        href="https://www.amazon.com/dp/B0BHN5B8X6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog1022}
          price="$10.99"
          title="Frenchy Notebook| 7.2 X 10.3 | 200 Pages"
        />
      </a>
      <a
        href="https://www.amazon.com/dp/B0BHKTB151"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Article
          imgUrl={blog1024}
          price="$9.99"
          title="Petals Notebook | 6 X 9 | 200 Pages"
        />
      </a>
    </>
  );
};
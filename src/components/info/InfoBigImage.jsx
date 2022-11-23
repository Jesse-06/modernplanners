import React from "react";
import "./info.css";
import treeImage from "../../assets/knockout.png";

const InfoBigImage = ({ imgUrl, date, text }) => (
  <div className="gpt3__trees-container_info" id="big-image-container">
    <div
      className="gpt3__trees-container_info-image"
      id="big-image-container-image"
    >
      <img src={imgUrl} alt="trees_image" id="big-image-img" />
    </div>
    <div
      className="gpt3__trees-container_info-content"
      id="big-image-container-content"
    >
      <div>
        <p>{date}</p>
        <h4>{text}</h4>
      </div>
      <div className="gpt__trees-container_info-image img">
        <img src={treeImage} alt="onetreeplanted" />
      </div>
      <a
        href="https://onetreeplanted.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>onetreeplanted.org</h3>
      </a>
    </div>
  </div>
);

export default InfoBigImage;
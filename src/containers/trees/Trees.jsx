import React from "react";
import { Info, InfoBigImage } from "../../components";
import { blog0111, blog0222, blog0333, blog0444, blog0555 } from "./imports.js";
import "./trees.css";

const Trees = () => (
  <div className="gpt3__trees section__padding" id="trees">
    <div className="gpt3__trees-heading">
      <h2 className="gradient__text">
        One Planner or Notebook <br /> = <br /> One Tree Planted!
      </h2>
    </div>
    <div className="gpt3__trees-container">
      <div className="gpt3__trees-container_groupA">
        <InfoBigImage
          imgUrl={blog0111}
          date="About One Tree Planted"
          text="One Tree Planted is a 501(c)(3) nonprofit on a mission to make it simple for anyone to help the environment by planting trees. Their projects span the globe and are done in partnership with local communities and knowledgeable experts to create an impact for nature, people, and wildlife. Reforestation helps to rebuild forests after fires and floods, provide jobs for social impact, and restore biodiversity. Many projects have overlapping objectives, creating a combination of benefits that contribute to the UN's Sustainable Development Goals."
        />
      </div>
      <div className="gpt3__trees-container_groupB">
        <Info
          imgUrl={blog0222}
          date="Our Partner"
          text="We care deeply about the planet and creating a business that gives back to nature. That’s why we’re thrilled to share that we’re partnering with One Tree Planted at onetreeplanted.org to plant a tree for every notebook or planner sold."
        />
        <Info
          imgUrl={blog0333}
          date="Giving Back"
          text="We plant trees with @onetreeplanted! Every tree makes a positive impact for nature, wildlife, and
people."
        />
        <Info
          imgUrl={blog0444}
          date="Sustainability"
          text="It's an honor to support reforestation with a global mission as part of our commitment to sustainability."
        />
        <Info
          imgUrl={blog0555}
          date="Values"
          text="We’re delighted to have reforestation through One Tree Planted as an integral part of our business model."
        />
      </div>
    </div>
  </div>
);

export default Trees;
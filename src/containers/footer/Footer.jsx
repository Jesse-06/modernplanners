import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import tiktok from '../../assets/tiktok.png';


import './footer.css';


const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h2 className="gradient__text">A Designers Touch to Your Stationary Workflow</h2>
    </div>

    <div className="gpt3__footer-btn">
      <a href="https://www.dropbox.com/s/y40rgptug0nzgbv/Modern%20Planners%20Reseller%20Distributor%20Catalogue%20%7C%20Spring%20Catalogue.pdf?dl=0" target="_blank" rel="noopener noreferrer" alt="Modern Planners Catalogue"><p>Virtual Catalogue</p></a>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <a href="#home">
          <img src={gpt3Logo} alt="Modern Planners footer logo" />
        </a>
        <p>9905 S Pennsylvania Ave Ste A, Oklahoma City, OK 73159 <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">

        <h4>Social Media</h4>
        <a href="https://www.facebook.com/ModernPlannersGlobal" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="facebook" /><p>Facebook</p>
        </a>
        <a href="https://www.instagram.com/modern_planners_/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="instagram" /><p>Instagram</p>
        </a>
        <a href="https://twitter.com/planners_modern" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="twitter" /><p>Twitter</p>
        </a>
        <a href="https://www.tiktok.com/@modern_planners?_t=8XhSxyvDVgU&_r=1" target="_blank" rel="noopener noreferrer">
          <img src={tiktok} alt="tiktok" /><p>TikTok</p>
        </a>


      </div>

      <div className="gpt3__footer-links_div">
        <h4>Company</h4>

        <a href="http://www.termsandconditionsmodernplanners.co.s3-website-us-east-1.amazonaws.com/" target="_blank" rel="noopener noreferrer">
          <p>Terms and Conditions </p>
        </a>
        <a href="http://www.privacypolicymodernplanners.co.s3-website-us-east-1.amazonaws.com/" target="_blank" rel="noopener noreferrer">
          <p>Privacy Policy</p>
        </a>
        <a href="https://onetreeplanted.org/" target="_blank" rel="noopener noreferrer">
          <p>We Support @onetreeplanted.org</p>
        </a>

      </div>
      <div className="gpt3__footer-links_div">
        <a href="#home">
        </a>

      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Modern Planners, LLC. All rights reserved.</p>

    </div>
  </div>
);

export default Footer;
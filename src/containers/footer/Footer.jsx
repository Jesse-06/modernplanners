import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';


import './footer.css';


const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">A designer touch to your stationary workflow</h1>
    </div>

    <div className="gpt3__footer-btn">
     <a href="https://www.dropbox.com/s/qdbw55swolpo0tn/Virtual%20Catalogue.pdf?dl=0" target="_blank" rel="noopener noreferrer" alt="catalogue"><p>Virtual Catalogue</p></a>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <a href="#home">
        <img src={gpt3Logo} alt="gpt3_logo" />
        </a>
        <p>9905 S Pennsylvania Ave Ste A, Oklahoma City, OK 73159 <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        
        <h4>Social Media</h4>
        <a href="https://www.facebook.com/ModernPlannersGlobal" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="facebook"/><p>Facebook</p>
        </a>
        <a href="https://www.instagram.com/modern_planners_/" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="instagram"/><p>Instagram</p>
        </a>
        <a href="https://twitter.com/planners_modern" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="twitter"/><p>Twitter</p>
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
        <h4>Global</h4>
        </a>
        
        
        <a href="http://www.modernplanners.website/" target="_blank" rel="noopener noreferrer">
        <p> CA Modern Planners</p>
       </a>
        <a href="http://www.modernplanners.de/" target="_blank" rel="noopener noreferrer">
        <p> DE Modern Planners</p>
        </a>
        <a href="http://www.modernplanners.jp/" target="_blank" rel="noopener noreferrer">
        <p> JP Modern Planners</p>
        </a>
        <a href="http://www.modernplanners.company/" target="_blank" rel="noopener noreferrer">
        <p> AU Modern Planners</p>
        </a>
        <a href="http://www.modernplanners.nl/" target="_blank" rel="noopener noreferrer">
        <p> NL Modern Planners</p>
        </a>
        <a href="http://www.modernplanners.net/" target="_blank" rel="noopener noreferrer">
        <p> FR Modern Planners</p>
        </a>
        <a href="http://www.modernplanners.co.uk/" target="_blank" rel="noopener noreferrer">
        <p> UK Modern Planners</p>
        </a>
      
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Modern Planners, LLC. All rights reserved.</p>
      
    </div>
  </div>
);

export default Footer;
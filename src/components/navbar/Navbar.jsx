import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';


const Menu = () => (
  <>
  <p> <a href="#home">Home</a> </p>
  <p> <a href="#blog">Notebooks</a> </p>
  <p> <a href="#brand">Planners</a> </p>
  <p> <a href="#wgpt3">About Us</a> </p>
  <p> <a href="#trees">Plant A Tree</a> </p>
  
</>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <a href="#blog">
          <img src= {logo} alt="Logo Modern Planners"/>
          </a>
        </div>
          <div className="gpt3__navbar-links_container">
             <Menu />
          </div>
       </div>
       <div className=" gpt3__navbar-sign">
         <a href="#home"> <p>Sign up</p> </a>
         <a href="#blog"><button type="button"> Shop Now</button>
         </a>
       </div>
         <div className=" gpt3__navbar-menu"> 
          {toggleMenu 
          ? <RiCloseLine color="#fff" size = {27} onClick={()=> setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size = {27} onClick={()=> setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links"> 
                    <Menu />
                   <div className=" gpt3__navbar-menu_container-links-sign">
                     <a href="#home"><p>Sign up</p></a>
                     <a href="#blog">
                     <button type="button"> Shop Now</button>
                     </a>
                   </div>
                 </div>
            </div>
          )}
         </div>
      </div>
  )
}

export default Navbar
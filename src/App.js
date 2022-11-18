import React from 'react';
import {Blog, Features, Footer, Header, Possibility, WhatGP3, Trees, Giving} from './containers';
import {CTA, Brand, Navbar, Partner} from './components';
import './App.css';


const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
         </div>
         <Brand/>
         <Blog/>
         <Partner/>
         <WhatGP3 />         
         <Features />
         <Possibility />
         <Trees/>
         <Giving/>
         <CTA />
         <Footer />
    </div>
  )
}


export default App;
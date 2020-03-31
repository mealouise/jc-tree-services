import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Callback from './components/Callback.js';
import Reviews from './components/Reviews.js';
import Footer from './components/Footer.js';
import Quote from './components/Quote.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import checkatrader from './images/checkatrader.png';
import facebook from './images/facebook.png';
import yellowpages from './images/yellowpages.png';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <header>
      <Link to="/">
        <img className="logo-thumbnail" src="http://jctreesurgeon.co.uk/assets/images/logo.png" alt="thumbnail" />
      </Link>
    <div className="contact-numbers">
      <ul>
        <li>07411082686</li>
        <li>0161 915 3508</li>
      </ul>
    </div>

      <div>
        <h3 className="emergency-subheader">24 Hour Emergency Call Outs</h3>
      </div>
      <div className="website-reviews">
        <ul>
          <li>
            <a href="https://www.checkatrade.com/trades/JcTreeServices/" target="_blank">
            <img className="logo-links" src={checkatrader} alt="checkatrader" />
            </a>
            <span class="fa fa-star check"></span>
            <span class="fa fa-star check"></span>
            <span class="fa fa-star check"></span>
            <span class="fa fa-star check"></span>
            <span class="fa fa-star check"></span>
            <span className="review-rating">4.9</span>
          </li>
          <li>
            <a href="https://www.facebook.com/pg/jcservices94/photos/?ref=page_internal" target="_blank">
            <img className="logo-links" src={facebook} alt="facebook" />
            </a>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span className="review-rating">4.9</span>
          </li>
          <li>
            <a href="https://www.yell.com/biz/jc-tree-services-manchester-8404594/" target="_blank">
            <img className="logo-links" src={yellowpages} alt="yellowpages" />
            </a>
            <span class="fa fa-star star"></span>
            <span class="fa fa-star star"></span>
            <span class="fa fa-star star"></span>
            <span class="fa fa-star star"></span>
            <span class="fa fa-star star"></span>
            <span className="review-rating">4.9</span>
          </li>
        </ul>
      </div>

      
      
    </header>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/callback' component={Callback} />
        <Route path='/reviews' component={Reviews} />
      </Switch>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;

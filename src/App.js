import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Callback from './components/Callback.js';
import Quote from './components/Quote.js';
import Footer from './components/Footer.js';
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

      <ul>
        <li>Telephone: 0161 915 3508</li>
        <li>Mobile: 07411082686</li>
      </ul>

      <ul>
        <li className="website-links">
          <a href="https://www.checkatrade.com/trades/JcTreeServices/" target="_blank">
          <img className="logo-links" src={checkatrader} alt="checkatrader" />
          </a>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <div>4.9</div>
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
          <div>4.9</div>
        </li>
        <li>
          <a href="https://www.yell.com/biz/jc-tree-services-manchester-8404594/" target="_blank">
          <img className="logo-links" src={yellowpages} alt="yellowpages" />
          </a>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <div>4.9</div>
        </li>
      </ul>

      
      
    </header>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/callback' component={Callback} />
        <Route path='/quote' component={Quote} />
      </Switch>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Callback from './components/Callback.js';
import Reviews from './components/Reviews.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/callback' component={Callback} />
        <Route path='/reviews' component={Reviews} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

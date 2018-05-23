import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Link } from "react-router-dom";
import Home from './component/home'
import Header from './component/header'
import User from './component/user'

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/header">HEADER</Link>
        </li>
        <li>
          <Link to="/user/1">USER</Link>
        </li>
      </ul>
      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/header" component={Header} />
      <Route path="/user/:id" component={User} />
    </div>
  </Router>
);

export default App;
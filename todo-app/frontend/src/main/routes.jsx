import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Todo from '../todo/todo';
import About from '../about/about';

export default props=> {
  return (
    <Router history={hashHistory}>
      <Redirect from="*" to="/todos"></Redirect>
      <Route path="/todos" component={Todo}></Route>
      <Route path="/about" component={About}></Route>
    </Router>
  )
}
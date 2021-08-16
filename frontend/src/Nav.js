import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App'
import Signin from './signin'
import FoodList from './components/FoodList';
import PrivateRouter from './components/PrivateRoute';
import PublicRouter from './components/PublicRouter';


function Nav() {
  return (
    <div className="Nav">
      <Router>
          <PrivateRouter path="/FoodBook" component={App} />                
          <PublicRouter path="/" component={Signin} />   
          <Route  path="/Search" component={FoodList} />  
      </Router>
    </div>
  );
}

export default Nav;
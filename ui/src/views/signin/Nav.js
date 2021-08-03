import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App'
import Signin from './signin'

import PrivateRouter from '../../components/PrivateRoute';
import PublicRouter from '../../components/PublicRouter';


function Nav() {
  return (
    <div className="Nav">
      <BrowserRouter>
          <PrivateRouter path="/FoodBook" component={App} />                
          <PublicRouter path="/" component={Signin} />   
      </BrowserRouter>
    </div>
  );
}

export default Nav;
import React from 'react';
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import { GoogleAuthProvider } from './components/googleAuth';


ReactDOM.render(
  <GoogleAuthProvider>
    <Nav />
  </GoogleAuthProvider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../signin/Nav';
import { GoogleAuthProvider } from '../../components/googleAuth';


ReactDOM.render(
  <GoogleAuthProvider>
    <Nav />
  </GoogleAuthProvider>,
  document.getElementById('root')
);


// we can commet out this line if they are in the same file
//export default App;

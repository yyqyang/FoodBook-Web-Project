import React from 'react';
import ReactDOM from 'react-dom';
import MyNavbar from '../../components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <MyNavbar />
    <div>Signin</div>
  </React.StrictMode>,
  document.getElementById('sign')
);
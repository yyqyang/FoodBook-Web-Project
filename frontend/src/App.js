import React from 'react';
import ReactDOM from 'react-dom'
import MyNavbar from './components/Navbar';

import FoodTable from './components/FoodTable.js';


function App() {
  return (
    <div>
      <MyNavbar />
     
      <FoodTable />
    </div>
  );
}


export default App;
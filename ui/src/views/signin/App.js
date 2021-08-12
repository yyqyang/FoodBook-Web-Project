import React from 'react';
import ReactDOM from 'react-dom'
import MyNavbar from '../../components/Navbar';
import Clock from '../../components/Clock';
import FoodTable from '../../components/FoodTable.js';


function App() {
  return (
    <div>
      <MyNavbar />
      <Clock />
      <FoodTable />
    </div>
  );
}


export default App;
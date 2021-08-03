import React from 'react';
import ReactDOM from 'react-dom'
import MyNavbar from '../../components/Navbar';
import FoodTable from '../../components/FoodTable';
import Searchbar from '../../components/Searchbar';
import Clock from '../../components/Clock';
import LogoutButton from '../../components/LogoutButton';



function App() {
  return (
    <div>
      <MyNavbar />
      <Clock />
      <Searchbar />
      <FoodTable />
      <LogoutButton/>
    </div>
  );
}


export default App;
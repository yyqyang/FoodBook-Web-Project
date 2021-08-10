import React from 'react';
import ReactDOM from 'react-dom'
import MyNavbar from '../../components/Navbar';
import FoodTable from '../../components/FoodTable';
import SearchBar from '../../components/SearchBar';
import Clock from '../../components/Clock';




function App() {
  return (
    <div>
      <MyNavbar />
      <Clock />
      <SearchBar />
      <FoodTable />
    </div>
  );
}


export default App;
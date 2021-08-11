import React from 'react';
import ReactDOM from 'react-dom'
import MyNavbar from '../../components/Navbar';
import FoodTable from '../../components/FoodTable';
import SearchBar from '../../components/SearchBar';
import Clock from '../../components/Clock';
import Reports from '../../components/Reports';



function App() {
  return (
    <div>
      <MyNavbar />
      <Clock />
      <SearchBar />
      <Reports />
    </div>
  );
}


export default App;
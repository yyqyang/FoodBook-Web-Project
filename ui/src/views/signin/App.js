import React from 'react';
import ReactDOM from 'react-dom'
import MyNavbar from '../../components/Navbar';
import FoodTable from '../../components/FoodTable';
import SearchBar from '../../components/SearchBar';
import Clock from '../../components/Clock';
import Reports from '../../components/Reports';
import Appt from '../../components/Appt';


function App() {
  return (
    <div>
      <MyNavbar />
      <Clock />
      <SearchBar />
      <Appt />
    </div>
  );
}


export default App;
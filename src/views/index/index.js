import React from 'react';
import ReactDOM from 'react-dom'
import MyNavbar from '../../components/Navbar';
import FoodTable from '../../components/FoodTable';
import Searchbar from '../../components/Searchbar';
import Clock from '../../components/Clock';


function App() {
  return (
    <div>
      <MyNavbar />
      <Clock />
      <Searchbar />
      <FoodTable />
    </div>
  );
}

// we can commet out this line if they are in the same file
//export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
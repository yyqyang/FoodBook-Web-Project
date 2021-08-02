import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyNavbar from './components/Navbar';
import FoodTable from './components/FoodTable';
import LogoutButton from './components/LogoutButton';


function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timeerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, World</h1>
        <FormattedDate date = {this.state.date} />
      </div>
    )
  }
}



function App() {
  return (
    <div>
      <MyNavbar />
      <Clock />
      <FoodTable />
      <LogoutButton/>
    </div>
  );
}

export default App;

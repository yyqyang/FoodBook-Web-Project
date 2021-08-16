import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import UserList from "./components/userlist";
import Calculator from "./components/calculator";
import LogoutButton from "./components/LogoutButton";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <a href='/user' className='navbar-brand'>
          FoodBook
        </a>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={"/user"} className='nav-link'>
              User
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={"/calculator"} className='nav-link'>
              Calculator
            </Link>
          </li>
          <li className='nav-item'>
 
              <LogoutButton />

          </li>
        </div>
      </nav>

      <div className='container mt-3'>
        <Switch>
          <Route exact path={["/", "/user"]} component={UserList} />
          <Route path={"/calculator"} component={Calculator} />

        </Switch>
      </div>
    </div>
  );
}

export default App;

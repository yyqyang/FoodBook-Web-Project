import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import FoodList from "./components/foodlist";
import Login from "./components/login";
import Calculator from "./components/calculator";

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
        <a href='/food' className='navbar-brand'>
          FoodBook
        </a>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={"/food"} className='nav-link'>
              Food
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={"/calculator"} className='nav-link'>
              Calculator
            </Link>
          </li>
          <li className='nav-item'>
            {user ? (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                onClick={logout}
                className='nav-link'
                style={{ cursor: "pointer" }}
              >
                Logout {user.name}
              </a>
            ) : (
              <Link to={"/login"} className='nav-link'>
                Login
              </Link>
            )}
          </li>
        </div>
      </nav>

      <div className='container mt-3'>
        <Switch>
          <Route exact path={["/", "/food"]} component={FoodList} />
          <Route
            path='/calculator'
            component={Calculator}/>
          <Route
            path='/login'
            render={(props) => <Login {...props} login={login} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./components/users";
import FoodList from "./components/userlist";
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
            {user ? (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                onClick={logout}
                className='nav-link'
                style={{ cursor: "pointer" }}
              >
                Logout {user.id}
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
          <Route exact path={["/", "/user"]} component={FoodList} />
          <Route 
            path="/users/:id"
            render={(props) => (
              <User {...props} />
            )}
          />
          
          <Route
            path='/calculator'
            render={() => (
              <Calculator value={user?(user.id):"You have not log in"} />
            )}/>
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

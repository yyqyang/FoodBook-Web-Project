import React, { useState, useEffect } from "react";
import FoodDataService from "../services/food";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import LogoutButton from './LogoutButton';
const FoodList = (props) => {
  const [food, setFood] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    retrieveFood();
  }, []);

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const retrieveFood = () => {
    FoodDataService.getAll()
      .then((response) => {
        console.log(response.data);
        setFood(response.data.food);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveFood();
  };

  const find = (query, by) => {
    FoodDataService.find(query, by)
      .then((response) => {
        console.log(response.data);
        setFood(response.data.food);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByName = () => {
    find(searchName, "food_name");
  };

  return (
    <div>
       <div>
          <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
              <Navbar.Brand href="#home">FoodBook</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  
                <Nav.Link href="./FoodBook#home">Home</Nav.Link>
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
            <LogoutButton/>
          </Navbar>
      <div className='row pb-1'>
        <div className='input-group col-lg-4'>
          <input
            type='text'
            className='form-control'
            placeholder='Search for food'
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-secondary'
              type='button'
              onClick={findByName}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className='row'>
        {food.map((food) => {
          return (
            <div className='col-lg-4 pb-1'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>{food.food_name}</h5>
                  <p className='card-text'>
                    <strong>Calorie: {food.food_cal}</strong>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default FoodList;

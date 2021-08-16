import React, { useState, useEffect } from "react";
import UserDataService from "../services/user";
import { Link } from "react-router-dom";

const UserList = (props) => {
  const [user, setFood] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    retrieveUser();
  }, []);

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const retrieveUser = () => {
    UserDataService.getAll()
      .then((response) => {
        console.log(response.data);
        setFood(response.data.food);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveUser();
  };

  const find = (query, by) => {
    UserDataService.find(query, by)
      .then((response) => {
        console.log(response.data);
        setFood(response.data.user);
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
      <div className='row pb-1'>
        <div className='input-group col-lg-4'>
          <input
            type='text'
            className='form-control'
            placeholder='Search for User'
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
        {user.map((food) => {
          return (
            <div className='col-lg-4 pb-1'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>{user.user_name}</h5>
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
  );
};

export default UserList;

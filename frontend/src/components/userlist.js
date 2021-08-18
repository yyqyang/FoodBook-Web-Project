import React, { useState, useEffect } from "react";
import UserDataService from "../services/user";
import { Link } from "react-router-dom";

const UserList = (props) => {
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    retrieveUser();
  }, []);

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const retrieveUser = () => {
    UserDataService.getAll()
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.users);
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
        setUsers(response.data.users);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByName = () => {
    find(searchName, "user_name");
  };

  const deleteUser = (userId) => {
    UserDataService.deleteUser(userId)
      .then((response) => {
        console.log(response.data);
        retrieveUser();
      })
      .catch((e) => {
        console.log(e);
      });
    UserDataService.deleteRecord(userId)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className='row pb-1'>
        <div className='input-group col-lg-4'>
          <input
            type='text'
            className='form-control'
            placeholder='Search for user'
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
        {users.map((user) => {
          return (
            <div className='col-lg-4 pb-1'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>{user.user_name}</h5>
                  <p className='card-text'>
                    <strong>UserId: {user.user_id}</strong>
                  </p>
                  <div className='row'>
                    <Link
                      to={"/users/" + user.user_id}
                      className='btn btn-primary col-lg-5 mx-1 mb-1'
                    >
                      View Records
                    </Link>
                    <button
                      className='btn btn-primary col-lg-5 mx-1 mb-1'
                      type='button'
                      onClick={() => deleteUser(user.user_id)}
                    >
                      Delete
                    </button>
                  </div>
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

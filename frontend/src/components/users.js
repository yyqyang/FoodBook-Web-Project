import React, { useState, useEffect } from "react";
import UserDataService from "../services/user.js";

const User = (props) => {
  const initialUserState = {
    id: null,
    user_name: "",
    user_id: "",
  };

  const [records, setRecords] = useState([]);

  const [user, setUser] = useState(initialUserState);

  const getUser = (id) => {
    UserDataService.get(id)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    UserDataService.getAllRecord(id)
      .then((response) => {
        setRecords(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };


  useEffect(() => {
    getUser(props.match.params.id);
  }, []);


  return (
    <div>
      {user ? (
        <div>
          <h5>{user.user_name}</h5>

          <h4> Record </h4>
          <div className='row'>
            <p>{records.total_results}</p>

            {records !== [] ? (
              (records.records||[]).map((record, index) => {
                return (
                  <div key={index} className='col-lg-4 pb-1'>
                    <div className='card'>
                      <div className='card-body'>
                        <p className='card-text'>
                          <strong>Text:</strong>
                          {record.text}
                          <br />
                          <strong>Date: </strong>
                          {record.date}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className='col-sm-4'>
                <p>No records yet.</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <br />
          <p>No user selected.</p>
        </div>
      )}
    </div>
  );
};

export default User;

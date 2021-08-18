import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { Grid, TextField } from "@material-ui/core";
import MaterialTable from "material-table";
import tableIcons from "./icons";
// import { useGoogleAuth } from './googleAuth';
import Input from "@material-ui/core/Input";
import UserDataService from "../services/user";
import User from "./users";

let foodName;
let foodCal;
let total;

const FoodTable = (props) => {
  const initialValues = {
    Food: "",
    Kcal: "",
    Quantity: "",
    Total: "",
  };

  const [data, setData] = useState([
    {
      Food: "Apple",
      Kcal: 52,
      Quantity: 1,
      Total: 52,
    },
    {
      Food: "Banana",
      Kcal: 89,
      Quantity: 1,
      Total: 89,
    },
  ]);

  const [columns, setColumns] = useState([
    {
      title: "Food",
      field: "Food",
      cellStyle: {
        width: 0,
        minWidth: 0,
      },
    },
    { title: "Kcal", field: "Kcal" },
    { title: "Quantity", field: "Quantity" },
    { title: "Total", field: "Total" },
  ]);

  const APP_ID = "51a353f2";
  const APP_KEY = "480a9349965ab2c4dc491fe714b9cea9";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${query}&nutrition-type=cooking`
    );

    const data = await response.json();
    setRecipes(data.parsed);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const saveData = () => {
    var data2 = {
      user_id: props.value,
      text: JSON.stringify(data, null, 2)
    };
    console.log(data2)
    UserDataService.createRecord(data2)
  }



  // const { googleUser } = useGoogleAuth();
  return (

    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Formik
        initialValues={initialValues}
        //validationSchema={validationSchema}
        onSubmit={(values) => {
 
          const newValues = {
            Food: foodName,
            Kcal: foodCal,
            Quantity: values.Quantity,
            Total: parseInt(foodCal) * parseInt(values.Quantity),
          };

          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newValues]);

              resolve();
            }, 1000);
          });
        }}
      >
        {(props) => (
          <Form>
            <div>
              <div className='App'>
                <form onClick={getSearch} className='search-form'>
                  <input
                    className='search-bar'
                    type='text'
                    value={search}
                    onChange={updateSearch}
                  />
                  <button className='search-button' type='submit'>
                    Search
                  </button>
                </form>
              </div>
              <div className='recpiesss'></div>
              <div>
                {recipes &&
                  recipes.map((recipes) => {
                    foodName = recipes.food.label;
                    foodCal = recipes.food.nutrients.ENERC_KCAL;

                    return (
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          <TextField
                            name='Food'
                            label='Food'
                            variant='outlined'
                            margin='dense'
                            color='secondary'
                            autoComplete={recipes.food.label}
                            defaultValue={recipes.food.label}
                            onChange={props.handleChange}
                            onBlur={props.handleChange}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                            name='Kcal'
                            label='Kcal'
                            variant='outlined'
                            margin='dense'
                            color='secondary'
                            autoComplete={recipes.food.nutrients.ENERC_KCAL}
                            defaultValue={recipes.food.nutrients.ENERC_KCAL}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                            name='Quantity'
                            label='Quantity'
                            variant='outlined'
                            margin='dense'
                            color='secondary'
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                          />
                        </Grid>
                        <br />
                        <Grid container item xs={12} justify='flex-start'>
                          <button
                            type='submit'
                            onClick={() => props.handleSubmit()}
                          >
                            Submit
                          </button>
                        </Grid>
                        <hr />
                      </Grid>
                    );
                  })}
              </div>
            </div>

            <MaterialTable
              title='Food List'
              columns={columns}
              data={data}
              icons={tableIcons}
              editable={{
                onRowAdd: (newData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      setData([...data, newData]);

                      resolve();
                    }, 1000);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      const dataUpdate = [...data];
                      const index = oldData.tableData.id;
                      console.log(index);
                      dataUpdate[index] = newData;
                      setData([...dataUpdate]);

                      resolve();
                    }, 1000);
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      const dataDelete = [...data];
                      const index = oldData.tableData.id;
                      dataDelete.splice(index, 1);
                      setData([...dataDelete]);

                      resolve();
                    }, 1000);
                  }),
              }}
            />
          </Form>
        )}
      </Formik>
      <button
        className='btn btn-primary col-lg-5 mx-1 mb-1'
        type='button'
        onClick={saveData}
      >
        Save
      </button>
      <p>valuetable{props.value}</p>
      {/* <p>Welcome user {googleUser.getBasicProfile().getId()}</p> */}
    </div>
  );
};
export default FoodTable;

{
  // /* <pre>{JSON.stringify(data, null, 2)}</pre> */
}

//   console.log('ID: ' + googleUser.getBasicProfile().getId());
//   console.log('Full Name: ' + googleUser.getBasicProfile().getName());
//   console.log('Given Name: ' + googleUser.getBasicProfile().getGivenName());
//   console.log('Family Name: ' + googleUser.getBasicProfile().getFamilyName());
//   console.log('Image URL: ' + googleUser.getBasicProfile().getImageUrl());
//   console.log('Email: ' + googleUser.getBasicProfile().getEmail());

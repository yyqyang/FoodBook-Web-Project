import React, { useEffect, useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import Recipes from "../../history/Recipes.js";
import Input from '@material-ui/core/Input';


const Inputs = (props) => {


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
      console.log(data.parsed);
      setRecipes(data.parsed);
    };
  
    const updateSearch = (e) => {
      setSearch(e.target.value);

      console.log(search);
    };
  
    const getSearch = (e) => {
      e.preventDefault();
      setQuery(search);
      setSearch("");
    };
   

  return (
    <div>
    <div className="App">
      <form onClick={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      </div>
      <div className="recpiesss"></div>
      <div> 
        {recipes && recipes.map((recipes) => {
        return (
       
            <Grid container spacing={2}>

            <Grid item xs={4}>
       
          

              <Input  
              
                name="Food"
                label="Food"
                variant="outlined"
                margin="dense"
                color="secondary"
                autoComplete={recipes.food.label}
                defaultValue={recipes.food.label}
                disabled inputProps={{ 'aria-label': 'description' }} 
                key={recipes.food.label}
                onChange={props.form.handleChange}
                onBlur={props.form.handleBlur}
              />
         
            </Grid>
            <Grid item xs={4}>
              <TextField 
                name="Kcal"
                label="Kcal"
              
                placeHolder={recipes.food.nutrients.ENERC_KCAL}
                autoComplete={recipes.food.nutrients.ENERC_KCAL}
                defaultValue={recipes.food.nutrients.ENERC_KCAL}
                variant="filled"
                margin="dense"
                color="secondary"
                onChange={props.form.handleChange}
                onBlur={props.form.handleBlur}
                
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                name="Quantity"
                label="Quantity"
                variant="outlined"
                margin="dense"
                color="secondary"
                onChange={props.form.handleChange}
                onBlur={props.form.handleBlur}
              />
            </Grid>
            <Grid> 
           
          </Grid>
     
          </Grid>

      
        );
      })}
      </div>
  
    </div>
  );
};
export default Inputs;
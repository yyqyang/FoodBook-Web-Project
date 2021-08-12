import React, { useEffect, useState } from "react";
import Recipe from "./Recipes.js";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import FormHelperText from "@material-ui/core/FormHelperText";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "white",
    color: "#546e7a",
    justifyContent: "left",
    padding: "10px 5px",
    fontWeight: "bold"
  },
  content: {
    padding: 0
  },
  status: {
    marginRight: "5px"
  },
  actions: {
    justifyContent: "flex-end"
  },
  summaryTable: {
    width: "auto",
    marginBottom: "10px",
    pointerEvents: "none"
  },
  noBorder: {
    border: "none"
  },
  denseCell: {
    padding: "5px"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const SearchBar = () => {

  const classes = useStyles();
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
      <div className="recpiesss">
	    {" "}
        {recipes && recipes.map((recipes) => (
          <Recipe
            title={recipes.food.label}
            calories={recipes.food.nutrients.ENERC_KCAL}
           
          />

        ))}
      </div>
      <div> 
      <button className="search-button" type="submit">
          Add Food
        </button>
      </div>
      <div className="recpiesss">
      <Grid container direction="row">
        <Grid item lg={12} md={12} xs={12}>
        <Card>
        <CardHeader
              className={classes.header}
         
              classes={{
                title: classes.header
              }}
            />
            <Divider />
            <CardContent>
            {recipes && recipes.map((recipes) => (
              <Recipe
                title={recipes.food.label}
                calories={recipes.food.nutrients.ENERC_KCAL}
              
              />

            ))}

            </CardContent>
            </Card>

          </Grid>
        </Grid>
      </div>

      </div>


  );
};

export default SearchBar;

// const [counter, setCounter] = useState(0);
// <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
//  key={recipes.recipe.label}
// ingredients={recipes.recipe.ingredients}

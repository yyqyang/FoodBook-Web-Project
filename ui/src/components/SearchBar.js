import React, { useEffect, useState } from "react";
import Recipe from "./Recipes.js";

const SearchBar = () => {
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
          Add Food
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
    </div>
  );
};

export default SearchBar;

// const [counter, setCounter] = useState(0);
// <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
//  key={recipes.recipe.label}
// ingredients={recipes.recipe.ingredients}

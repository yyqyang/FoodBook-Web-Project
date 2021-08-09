import React from "react";

const Recipes = ({ title, calories, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
    </div>
  );
};
export default Recipes;
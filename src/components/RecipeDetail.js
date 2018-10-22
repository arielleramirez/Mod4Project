import React from 'react';

const RecipeDetail = (props) => {
  return (<div><div>Name: {props.recipe.name}</div>
  <div> <a href={props.recipe.url}>Recipe instructions</a></div>
  {props.recipe.image?<img src={props.recipe.image} />:null}
  <div>Calories: {props.recipe.calories}</div><div>Cooking Time: {props.recipe.cooking_time}</div><div>Ingredients: {props.recipe.ingredients}</div></div>)
};

export default RecipeDetail;

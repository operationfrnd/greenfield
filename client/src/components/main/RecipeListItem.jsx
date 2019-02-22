// a component with
// a receipe name
// a match percentage
// a 'save/like recipe' button
// a 'dislike recipe' button
// ingredients

import React from 'react';

const RecipeListItem = ({ recipe }) => {

  const onClick = () => {
    console.log('clicked');
  }

  return (
    <div className="recipe-list-item" onClick={() => onClick()}>
      <b>Recipe Name:</b> {recipe.name} 
      <button type="button" className="save-recipe-button"> Save that recipe </button>
      <button type="button" className="dislike-recipe-button"> Never again! </button>
      <br />
      <b>Cook Time:</b> {recipe.cookTime} minutes
      <br />
      <b>Uses:</b> {recipe.ingredients.usedIngredients} <br />
      <b>Match Percentage:</b> {recipe.percentage}%
    </div>
  );
};


export default RecipeListItem;

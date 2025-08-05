// src/components/RecipeListItem.js

import React from 'react';

function RecipeListItem({ recipe }) {
  return (
    <div className="flex items-center p-4 border border-gray-200 rounded-lg shadow-sm">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-20 h-20 object-cover rounded-md flex-shrink-0"
      />
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold">{recipe.name}</h3>
        <p className="text-sm text-gray-500">Recipe by: {recipe.author}</p>
        <p className="text-sm text-gray-500">Time: {recipe.time}</p>
      </div>
    </div>
  );
}

export default RecipeListItem;